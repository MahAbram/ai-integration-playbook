# Chapter 2.7: The Documentation & Legal Copilot

Business operators spend hours reviewing standard contracts, drafting legal templates, and building internal Standard Operating Procedures (SOPs) for new hires. These tasks require processing heavy, rule-based text where precision is paramount. AI excels at structured extraction and translation, allowing you to bypass the "blank page" syndrome of documentation.

## Workflow 13: First-Pass Legal Review & Template Builder

*Disclaimer: AI is not a lawyer and cannot provide legal advice. This workflow is strictly for internal, non-counsel business reviews of standard operational agreements (like NDAs or basic vendor SLAs) to catch glaring business risks before escalating them to your actual legal team.*

When a vendor sends a 30-page contract, finding the trapdoors is tedious. You can use an LLM with a massive context window to act as your first-pass filter.

* **The Tool:** Claude (claude.ai) is highly recommended here due to its 200,000-token context window and strong factual recall.

1. **Step 1: The Ingestion**
Download the vendor agreement as a PDF or Word document. Ensure you are utilizing an enterprise-secured version of the AI tool if the document contains non-public corporate data. Upload the file to the chat interface.
2. **Step 2: The Review Prompt**
> **[Context]** Attached is a standard Service Level Agreement (SLA) provided by a prospective software vendor.
> **[Role]** Act as a meticulous Corporate Paralegal and Procurement Specialist.
> **[Action]** Review this entire document. Identify any non-standard clauses regarding auto-renewal, liability caps, data ownership, or hidden termination fees. Flag any clauses that heavily favor the vendor or deviate from standard B2B SaaS norms.
> **[Format]** Format your findings in a Markdown table with three columns: 'Clause Name', 'Exact Quote from Text', and 'Plain-English Explanation of Business Risk'.


3. **Step 3: The Template Builder (Redrafting)**
Once you identify a risky clause, use the AI to draft a counter-proposal based on your company's internal playbook.
> **[Action]** Based on our internal company requirement that all financial liability must be capped at 12 months of contract value, redraft Section 4.2 of this agreement to reflect our standard terms. Use precise, professional legal terminology.


4. **Step 4: The Verification Handoff**
Take the AI's analysis and the redrafted clause, package it into an email, and send it to your actual legal department. You have just saved them an hour of reading and drastically accelerated the procurement cycle.

## Workflow 14: The "Video-to-SOP" Pipeline

The hardest part of scaling a team is getting veteran employees to document their processes. Instead of asking them to type a 10-page manual, have them record a video and let the AI do the administrative heavy lifting.

* **The Tools:** Screen recording software (Loom, Zoom, or Microsoft Teams) and ChatGPT or Claude.

1. **Step 1: The Recording**
Ask an employee to record their screen while they perform a complex digital task (e.g., "How to process a high-value refund in Stripe"). Have them narrate exactly what they are clicking and why.
2. **Step 2: The Transcript Extraction**
Download the raw, messy auto-transcript from the video platform (usually a `.vtt` or `.txt` file). Do not edit the text; leave all the "umms," "ahhs," and conversational tangents.
3. **Step 3: The SOP Prompt**
Upload the transcript file to your text model.
> **[Context]** Attached is a raw, messy transcript of an employee demonstrating a software process.
> **[Role]** Act as a Senior Technical Writer.
> **[Action]** Strip out all conversational tangents, filler words, and irrelevant chatter. Transform the core actions into a highly structured Standard Operating Procedure (SOP).
> **[Format]** Use numbered steps. Bold the names of any buttons or navigation tabs the user must click. Add a 'Troubleshooting' section at the bottom for any errors or edge-cases they mentioned. Output as clean Markdown.


4. **Step 4: The Verification**
Open the generated SOP and walk through the software steps yourself to ensure the AI did not hallucinate a button or skip a critical security check. Once verified, publish the document to your company wiki.
