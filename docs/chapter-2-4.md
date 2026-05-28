# Chapter 2.4: The Administrative Engine

White-collar professionals spend an agonizing amount of time sitting in chaotic meetings, reading disjointed Slack threads, and trying to manually translate that unstructured chaos into structured project management software. Likewise, hours are lost weekly cleaning up messy system exports just to make them readable. AI excels at format translation and administrative scripting, turning unstructured chaos into rigid operational deliverables.

## Workflow 7: The Project Management Pipeline (Zoom-to-Jira)

*Use Case: Eliminating the administrative burden of post-meeting data entry and task assignment.*

When a cross-functional strategy meeting ends, someone usually has to spend an hour listening to the recording to figure out who is supposed to do what. By using an LLM to parse the auto-transcript, you can instantly generate a structured backlog of tasks.

* **The Tool:** Microsoft Teams or Zoom (for the transcript) and Claude (claude.ai) or ChatGPT (chatgpt.com) for the synthesis.

1. **Step 1: The Ingestion**
Download the raw, unedited auto-transcript (the `.vtt` or `.txt` file) of a project kickoff meeting from Zoom or Microsoft Teams.
2. **Step 2: The Formatting Prompt**
Upload the transcript file to the AI and use this engineered prompt to force structural formatting.
> **[Context]** Attached is a raw, unedited transcript from a recent Q4 product kickoff meeting. The conversation is chaotic and features multiple tangents.
> **[Role]** Act as a Senior Technical Project Manager.
> **[Action]** Read the transcript. Identify every specific task, deliverable, or follow-up item that was explicitly assigned to a person or department. Translate those tasks into structured Jira tickets.
> **[Format]** For each ticket, output: 1) A clear Title, 2) The Assignee, 3) A 'User Story' (Formatted as: "As a [role], I need [feature], so that [benefit]"), and 4) Three bullet points of Acceptance Criteria. Output this strictly as a Markdown table. Do not include tasks that were vaguely discussed but not explicitly assigned.
> **[Target]** The output must be ready to copy-paste directly into our Agile tracking software for the engineering and marketing teams.


3. **Step 3: The Verification Handoff**
Read through the generated table. AI can occasionally misattribute a task if two people were talking over each other. Verify the assignees before pasting the table directly into Jira, Asana, or Monday.com.

## Workflow 8: The Data Janitor (Automated CSV Reformatting)

*Use Case: Using an AI to write and execute a Python script to clean a broken, unreadable file, without you ever touching a line of code.*

This workflow is distinctly different from generating an Excel formula. You are using the AI's isolated coding environment to process data that is too large or too broken for Excel to handle efficiently.

* **The Tool:** ChatGPT or Claude. Both platforms now run Python natively when you upload a spreadsheet — no separate toggle or setting is required.

1. **Step 1: The Problem Framing**
You download a CSV from a legacy HR or CRM system. The dates are formatted differently in every row (e.g., "Jan 4", "01/04/2026"), the names are capitalized incorrectly, and there are hundreds of blank rows breaking your pivot tables. Export this file and ensure no highly sensitive PII (like Social Security Numbers) is included.
2. **Step 2: The Data Janitor Prompt**
Upload the messy CSV to the chat interface.
> **[Context]** The attached CSV contains a massive export of legacy CRM data. The formatting is completely broken.
> **[Role]** Act as a Senior Data Engineer.
> **[Action]** I need you to clean this data. Write and execute a Python script internally to do the following: 1) Standardize all dates in Column B to the YYYY-MM-DD format. 2) Convert all names in Column A to Proper Case (e.g., "John Doe"). 3) Delete any row where Column C (Revenue) is entirely blank.
> **[Format]** Do not just show me the code. Execute the script on the file and provide me with a clean, downloadable CSV file when you are done.


3. **Step 3: The Execution**
The AI will write the script, run it in its own secure background environment, and output a link saying "Download your cleaned file here." You have just executed advanced data engineering in under two minutes.
