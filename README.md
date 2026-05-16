# Claude Code for Everyone - Workshop Files

Workshop exercise files for the [Claude Code for Everyone](https://catalog.workshops.aws/claude-code-for-everyone) workshop.

## Directory structure

- `sample-files/` - Sample data files for workshop exercises
  - `lab-2/` - Documents, spreadsheets, and data for Lab 2 exercises (Claude Code path)
  - `lab-3/` - Meeting notes, call transcripts, and specs for Lab 3 Skills exercises (Claude Code path)
  - `lab-5/` - Receipts, transcripts, research docs, and usage data for Lab 5 exercises (Claude Cowork path)
- `skills/` - Pre-built Claude Skills to install during Labs 3-4
- `mock-jira-mcp/` - Mock Jira MCP server for workshop exercises

## Usage

**Claude Code path (Labs 1-4):** This repository is automatically cloned into `/workshop/` on your workshop EC2 instance. You do not need to clone it manually.

**Claude Cowork path (Lab 5):** Cowork runs on your own laptop. In the first Lab 5 task, you'll ask Claude Cowork to clone this repo into `~/Documents/claude-for-everyone/` — that's both the setup for every subsequent Lab 5 exercise and your first real Cowork task.

If setting up outside the workshop:

```bash
# For the Code Editor environment (Labs 1-4)
git clone https://github.com/wirjo/sample-claude-code-for-everyone.git /workshop

# For your own laptop (Lab 5 / Cowork)
git clone https://github.com/wirjo/sample-claude-code-for-everyone.git ~/Documents/claude-for-everyone
```

## License

This project is licensed under the MIT-0 License. See the [LICENSE](LICENSE) file.
