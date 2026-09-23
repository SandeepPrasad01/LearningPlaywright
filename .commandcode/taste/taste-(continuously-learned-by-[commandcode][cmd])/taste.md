# Taste (Continuously Learned by [CommandCode][cmd])
- Wants the AI agent to handle `git commit` and `git push` to their remote repository after code changes. Confidence: 1.0
- Wants routine git operations (commit + push) wrapped in a dedicated custom command they can type (e.g., a `/commit-push` slash command/mod) so the automation is deterministic and reusable, rather than issuing ad-hoc instructions each time. Confidence: 0.8
- Wants the README.md to be updated to reflect new/changed content whenever code is modified and committed (explicitly requested alongside "commit and push"). Confidence: 0.95
- Prefers the agent to proceed with recommended defaults rather than pause to answer multi-question setup prompts (declined the clarifying questions for the /commit-push skill and let defaults stand). Confidence: 0.7
- Works on Windows (cmd.exe shell): heredocs are not supported for multi-line git commit messages — use a temp message file with `git commit -F` instead. Confidence: 0.9
- Uses conventional-commit style messages for git commits (e.g., `feat: add 11_Functions module and update array examples`) with a short body listing changes. Confidence: 0.6
- Keeps study/class notes as structured markdown files in a dedicated folder (e.g., `IQ_Notes`) with numbered, descriptive filenames; pasted lecture/class content should be converted into that existing format — organized with tables, code blocks, checklists, and a TL;DR summary — rather than left as a raw text dump. Confidence: 0.8
- When asked to convert a file (e.g., markdown notes to PDF), expects the output to be saved in the same folder as the source (e.g., `IQ_Notes`) and to keep the original filename (e.g., `Playwright notes.pdf`), without needing the location spelled out. Confidence: 0.6
