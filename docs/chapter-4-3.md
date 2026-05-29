# Chapter 4.3: How AI Systems Remember — Memory Architectures
 
You have spent three weeks building a Zapier pipeline that scores inbound vendor proposals. It works well. The AI scores each proposal against your evaluation criteria, flags high-risk clauses, and routes the results to the procurement team automatically.
 
Then a vendor submits a follow-up to a proposal they sent two months ago. The pipeline scores it as if it has never seen this vendor before — no context from the previous submission, no awareness that the original proposal had a flagged liability clause, no institutional knowledge of the conversation your legal team had with them in between.
 
The pipeline is not broken. It is doing exactly what it was designed to do. The problem is that it was designed without a memory layer — and nobody noticed until the gap became a problem.
 
Understanding how AI systems remember, and how to design for memory intentionally, is what separates a pipeline that works on a single transaction from a system that accumulates value over time.
 
## Why AI Systems Forget by Default
 
Every large language model processes each conversation in isolation. When you open a new chat session, the model has no recollection of anything you discussed previously — not last week, not yesterday, not five minutes ago in a different tab. This is not a limitation of the model's intelligence; it is an intentional architectural choice made for privacy and scalability. A model that remembered every conversation with every user would create enormous data retention and privacy liabilities.
 
The practical consequence for workflow design is significant. Any AI pipeline that needs to reference previous interactions, accumulate knowledge about a specific vendor or client over time, or maintain consistent behaviour across multiple users must explicitly engineer a memory layer. The model will not provide one by default.
 
## The Three Types of Memory
 
AI systems can be designed with three distinct types of memory, each suited to different purposes.
 
**In-context memory** is what you have been using throughout this playbook. It is everything within the active session — your instructions, the source data you have provided, the conversation history so far. It is temporary and session-bound: when the conversation ends, the context is cleared. Its capacity is limited by the context window. Its primary failure mode is forgetting early instructions when a long conversation pushes them out of the window — the "lost in the middle" problem discussed in the Prompt Engineering playbook.
 
**External memory** is a database the system queries between sessions — a separate store of information that persists independently of any individual conversation. This is what RAG uses to retrieve document content. It is also what allows an agent to remember that a specific vendor submitted a proposal in Q2, that a particular client prefers formal communication, or that a specific employee has completed their mandatory compliance training — even when that information was recorded in a completely separate session months earlier. External memory requires deliberate engineering: you must decide what to store, where to store it, and when to retrieve it.
 
**Procedural memory** is encoded in the system prompt or agent instructions — the standing rules, persona, and constraints that apply to every session without needing to be restated. This is what Custom GPTs and Claude Projects implement. When you save your CRAFT Role, Format constraints, and negative constraints into a persistent system prompt, you are engineering procedural memory. The model does not remember your previous conversations, but it always starts from the same configured baseline.
 
| Memory Type | Where It Lives | How Long It Lasts | Best Used For |
|---|---|---|---|
| In-context | The active session | Until the session ends | Single-conversation tasks with all required context provided upfront |
| External | A separate database or document store | As long as you maintain it | Multi-session workflows, team-shared agents, anything that needs to learn over time |
| Procedural | The system prompt or agent configuration | Until you change the configuration | Persistent personas, standing constraints, team-wide behavioural standards |
 
## Designing for Memory Intentionally
 
Before building any workflow that will run repeatedly or serve multiple users, answer two questions: what does this system need to remember, and for how long?
 
If the answer is "nothing beyond the current session," in-context memory is sufficient and no additional engineering is required. This covers the majority of single-use workflows — drafting a document, analysing a report, formatting a dataset.
 
If the answer is "information from previous sessions," you need external memory. For non-technical professionals, the most accessible form of external memory is a structured log in a tool you already use. A simple Airtable table, a Google Sheet, or a CRM record can serve as the external memory layer for a Zapier pipeline without requiring any technical infrastructure. The pipeline reads from the log at the start of each run, uses that context to inform the AI's processing, and writes back to the log at the end.
 
**The vendor proposal example, redesigned with external memory:**
 
Instead of scoring each proposal in isolation, the pipeline:
1. Reads the vendor's entry from the procurement log (external memory) before calling the AI
2. Injects the relevant history — previous submission date, flagged clauses, legal team notes — into the AI prompt as context
3. Scores the new proposal with full awareness of the prior interaction
4. Updates the procurement log with the new assessment
The AI model itself has not changed. The prompt has not changed. What changed is that the pipeline now provides the context the model needs to reason about the vendor as a continuing relationship rather than a first encounter.
 
**When memory creates risk**
 
Persistent memory is not always an advantage. A system that remembers too much, or stores the wrong type of data, creates privacy and compliance liabilities that can be more damaging than the operational problem memory was meant to solve.
 
Before engineering external memory into a pipeline, run the data through the classification framework in Chapter 4.6. Information stored in an external memory layer — vendor names, client communication preferences, employee performance notes — has a classification tier, a retention limit, and an access control requirement. A procurement log storing vendor negotiation history is Tier 2 data at minimum. A log storing employee performance context is Tier 3. The storage solution and access controls must match the classification.
 
**Wrap-up**
Memory architecture is what separates a transaction from a relationship. In-context memory serves individual conversations. External memory allows systems to accumulate institutional knowledge over time. Procedural memory ensures consistent behaviour across users and sessions. Deciding which type of memory a workflow requires — before building it — is an architectural decision that determines whether your pipeline adds value once or compounds in value over time.
 
