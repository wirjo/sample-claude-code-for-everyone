#!/usr/bin/env node
/**
 * Mock Jira MCP Server for Claude Code Workshop.
 * A lightweight MCP server that simulates Jira with pre-populated
 * data tied to a bank fraud investigation scenario.
 */
const { McpServer } = require("@modelcontextprotocol/sdk/server/mcp.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const { z } = require("zod");

const USERS = { rchen: "Robert Chen", jsmith: "Jane Smith", mwilson: "Mike Wilson", agarcia: "Ana Garcia" };
const PROJECTS = { FRAUD: { key: "FRAUD", name: "Fraud Investigation", lead: "jsmith", issueTypes: ["Task", "Bug", "Story", "Epic"] } };

const base = new Date(Date.now() - 3 * 86400000);
const h = (hrs) => new Date(base.getTime() + hrs * 3600000).toISOString();

const ISSUES = {
  "FRAUD-101": {
    key: "FRAUD-101", summary: "Investigate unauthorized charges on account #4521-CHEN",
    description: "Customer Robert Chen reported unauthorized charges totaling ~$1,247.85 between Feb 14-17, 2026. Need to investigate transaction patterns and prepare response.",
    status: "In Progress", priority: "High", assignee: "jsmith", reporter: "agarcia", type: "Story",
    created: h(0), updated: h(6), labels: ["fraud", "customer-dispute", "urgent"],
    comments: [
      { author: "agarcia", body: "Customer called in today. Very upset about the charges. Requesting expedited review.", created: h(0) },
      { author: "jsmith", body: "Pulled the transaction log. 4 transactions look suspicious — unusual times and locations. Starting detailed analysis.", created: h(4) },
    ],
  },
  "FRAUD-102": {
    key: "FRAUD-102", summary: "Cross-reference Chen dispute amounts with response letter",
    description: "Verify that the disputed amount in the customer response letter matches the transaction analysis spreadsheet. Compliance flagged a $0.01 discrepancy.",
    status: "To Do", priority: "Medium", assignee: "jsmith", reporter: "mwilson", type: "Task",
    created: h(2), updated: h(2), labels: ["compliance", "verification"],
    comments: [{ author: "mwilson", body: "Compliance review found the letter says $1,247.84 but the spreadsheet total is $1,247.85. Please reconcile before sending.", created: h(2) }],
  },
  "FRAUD-103": {
    key: "FRAUD-103", summary: "File fraud report with card network for Chen case",
    description: "Once investigation is complete, file the official fraud report with the card network. Include all supporting documentation.",
    status: "To Do", priority: "High", assignee: "jsmith", reporter: "jsmith", type: "Task",
    created: h(5), updated: h(5), labels: ["fraud", "card-network", "filing"], comments: [],
  },
  "FRAUD-100": {
    key: "FRAUD-100", summary: "[Epic] Q1 2026 Fraud Case Management",
    description: "Track all fraud investigation cases for Q1 2026.",
    status: "In Progress", priority: "Medium", assignee: "mwilson", reporter: "mwilson", type: "Epic",
    created: new Date(base.getTime() - 30 * 86400000).toISOString(), updated: h(0), labels: ["epic", "q1-2026"], comments: [],
  },
};
let nextId = 104;

const fmt = (issue, verbose = true) => {
  const r = { key: issue.key, summary: issue.summary, status: issue.status, priority: issue.priority, assignee: USERS[issue.assignee] || issue.assignee, type: issue.type };
  if (verbose) Object.assign(r, { description: issue.description, reporter: USERS[issue.reporter] || issue.reporter, created: issue.created, updated: issue.updated, labels: issue.labels, comments: issue.comments.map(c => ({ ...c, author: USERS[c.author] || c.author })) });
  return r;
};

const server = new McpServer({ name: "Mock Jira", version: "1.0.0" });

server.tool("search_issues", "Search for Jira issues using JQL", { jql: z.string().describe("JQL query string") }, ({ jql }) => {
  const q = jql.toLowerCase();
  const results = Object.values(ISSUES).filter(issue => {
    if (q.includes("status")) {
      for (const s of ["in progress", "to do", "done", "in review"])
        if (q.includes(s) && issue.status.toLowerCase() !== s) return false;
    }
    if (q.includes("priority = high") && issue.priority !== "High") return false;
    if (q.includes("type = epic") && issue.type !== "Epic") return false;
    for (const uid of Object.keys(USERS))
      if (q.includes(`assignee = ${uid}`) && issue.assignee !== uid) return false;
    return true;
  });
  return { content: [{ type: "text", text: JSON.stringify({ total: results.length, issues: results.map(i => fmt(i, false)) }, null, 2) }] };
});

server.tool("get_issue", "Get details of a Jira issue", { issue_key: z.string().describe("Issue key, e.g. FRAUD-101") }, ({ issue_key }) => {
  const issue = ISSUES[issue_key.toUpperCase()];
  const text = issue ? JSON.stringify(fmt(issue), null, 2) : JSON.stringify({ error: `Issue ${issue_key} not found` });
  return { content: [{ type: "text", text }] };
});

server.tool("create_issue", "Create a new Jira issue", {
  project: z.string(), summary: z.string(), description: z.string().default(""),
  issue_type: z.string().default("Task"), priority: z.string().default("Medium"),
  assignee: z.string().default("jsmith"), labels: z.array(z.string()).default([]),
}, ({ project, summary, description, issue_type, priority, assignee, labels }) => {
  if (!PROJECTS[project.toUpperCase()]) return { content: [{ type: "text", text: JSON.stringify({ error: `Project ${project} not found` }) }] };
  const key = `${project.toUpperCase()}-${nextId++}`;
  const now = new Date().toISOString();
  ISSUES[key] = { key, summary, description, status: "To Do", priority, assignee, reporter: "jsmith", type: issue_type, created: now, updated: now, labels, comments: [] };
  return { content: [{ type: "text", text: JSON.stringify({ created: true, key, url: `https://your-org.atlassian.net/browse/${key}` }, null, 2) }] };
});

server.tool("transition_issue", "Transition issue status", {
  issue_key: z.string(), status: z.string().describe("To Do, In Progress, In Review, or Done"),
}, ({ issue_key, status }) => {
  const issue = ISSUES[issue_key.toUpperCase()];
  if (!issue) return { content: [{ type: "text", text: JSON.stringify({ error: `Issue ${issue_key} not found` }) }] };
  const valid = ["To Do", "In Progress", "In Review", "Done"];
  if (!valid.includes(status)) return { content: [{ type: "text", text: JSON.stringify({ error: `Invalid status. Must be one of: ${valid}` }) }] };
  const old = issue.status; issue.status = status; issue.updated = new Date().toISOString();
  return { content: [{ type: "text", text: JSON.stringify({ transitioned: true, key: issue_key.toUpperCase(), from: old, to: status }, null, 2) }] };
});

server.tool("add_comment", "Add a comment to a Jira issue", { issue_key: z.string(), body: z.string() }, ({ issue_key, body }) => {
  const issue = ISSUES[issue_key.toUpperCase()];
  if (!issue) return { content: [{ type: "text", text: JSON.stringify({ error: `Issue ${issue_key} not found` }) }] };
  issue.comments.push({ author: "jsmith", body, created: new Date().toISOString() });
  issue.updated = new Date().toISOString();
  return { content: [{ type: "text", text: JSON.stringify({ added: true, key: issue_key.toUpperCase(), commentId: issue.comments.length }, null, 2) }] };
});

server.tool("list_projects", "List all Jira projects", {}, () => {
  return { content: [{ type: "text", text: JSON.stringify({ projects: Object.values(PROJECTS) }, null, 2) }] };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
main().catch(console.error);
