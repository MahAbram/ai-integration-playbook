# Chapter 2.10 Productivity Hacks

Not every AI workflow needs to produce a polished deliverable. Some of the highest-leverage uses of AI are the small, repetitive frictions that quietly drain hours from your week — the inbox that needs sorting before you can start real work, the webpage you need to manually copy data from cell by cell. These tasks are too small to justify dedicated software, but too frequent to ignore.

Master these and you will reclaim 30 to 60 minutes per day — time that compounds across a working year into hundreds of hours redirected toward strategic work.

## Workflow 19: The Inbox Triage Protocol

*Use case: clearing a backlog of 50+ unread emails in 15 minutes instead of an hour.*

Email triage is one of the highest-leverage daily applications of AI, but most professionals never automate it because they assume the AI cannot see their inbox. You do not need a connector — you only need to copy the email bodies into a single document and let the AI sort them.

* **The Tool:** ChatGPT or Claude. Pairs naturally with Workflow 1, since your voice rules will be applied automatically to the draft replies.

1. **Step 1: The Batch Capture**
Open your inbox and copy the subject lines and bodies of every unread email into a single document, separated by a divider like `---`. For Gmail users, you can also forward batches to yourself and paste the combined text. Strip out signature blocks and legal footers to reduce noise.

2. **Step 2: The Triage Prompt**
    > **[Context]** Below are [N] unread emails from my inbox, separated by `---`. I have 15 minutes to clear them.
    > **[Role]** Act as my executive assistant.
    > **[Action]** Categorize each email into exactly one of four buckets: (1) Reply needed today, (2) Reply needed this week, (3) FYI / no reply needed, (4) Delete or archive. For every email in buckets 1 and 2, draft a 2-3 sentence reply in my voice. For bucket 3, write a one-line summary so I know what I read. For bucket 4, state in five words why it is safe to ignore.
    > **[Format]** Output as a Markdown table with columns: Sender, Subject, Bucket, Action / Draft Reply.

3. **Step 3: The Execution**
Work down the table top to bottom. Paste the drafted replies straight into Gmail / Outlook, lightly edit, and send. The whole inbox is cleared in one focused session.


## Workflow 20: The Codeless Web Scrape

*Use case: pulling structured data from a webpage (a competitor's pricing page, a list of conference speakers, a directory) without paying for a scraping tool.*

When you need to compare ten competitor pricing pages or compile a list of every panelist at a conference, manually copying into Excel is brutal. AI tools with browsing can do this in one prompt — provided you tell them exactly which fields to extract.

* **The Tool:** ChatGPT (with browsing enabled) or Claude (with web search enabled).

1. **Step 1: The Target Identification**
Have the URL ready. For pages that load content dynamically (JavaScript-heavy sites), have a backup: copy the page's visible text into a document you can paste instead.

2. **Step 2: The Extraction Prompt**
    > **[Context]** I need to compile a structured dataset from a public web page.
    > **[Role]** Act as a data extraction specialist.
    > **[Action]** Visit this URL: [paste URL]. Extract every [pricing tier / speaker / directory entry] listed on the page along with [associated price / company affiliation / bio summary].
    > **[Format]** Output as a CSV with columns [X, Y, Z]. Use commas as separators. Do not include conversational text or explanations — only the raw CSV block, ready to paste into a spreadsheet.

3. **Step 3: The Repeat Pattern**
Save the CSV to a `.csv` file and open in Excel or Google Sheets. To scrape ten similar pages, simply reuse the same prompt with new URLs in sequence — the AI will keep the column structure consistent across runs.
