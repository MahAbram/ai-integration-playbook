# Chapter 4.2: How AI Accesses What It Doesn't Know — RAG and the Knowledge Layer
 
Your company has just deployed an AI assistant for the procurement team. It is connected to a powerful language model and the team is genuinely excited. Within the first week, the enthusiasm fades.
 
The AI cannot tell them what the standard payment terms in your preferred vendor contract template are. It does not know that Vendor C was blacklisted eighteen months ago following a data breach. It cannot find the clause on liability caps from the master services agreement signed last quarter. Every answer it gives is either generic or wrong.
 
The problem is not the model's intelligence. The problem is that the model knows everything on the internet and nothing about your organisation. It was trained on billions of documents written by millions of people — and not one of those documents was your vendor contract template or your internal blacklist.
 
This is the knowledge gap that every enterprise AI deployment eventually hits. Understanding how to close it is one of the most important architectural skills you can develop.
 
## The Frozen Knowledge Problem
 
A large language model is trained on a vast dataset collected up to a specific point in time. After training, the model's knowledge is fixed — frozen. It cannot update itself when your company signs a new contract, revises a policy, or adds a vendor to the approved supplier list. It will confidently answer questions about your organisation using its best statistical guess, which is almost always wrong in the specifics that matter most.
 
There are two symptoms of this problem in practice. The first is hallucination — the model invents organisational details it does not know, presenting fabricated policy numbers, clause references, or vendor names with complete confidence. The second is ignorance — the model simply admits it does not have the information and offers a generic answer that is technically correct but operationally useless.
 
Both symptoms have the same root cause: the model has no access to your organisation's private knowledge base.
 
## What RAG Is: The Retrieve-Then-Generate Pattern
 
Retrieval-Augmented Generation — RAG — is the architectural pattern that solves this. Before the model generates a response, it searches a private knowledge base for relevant source material and injects what it finds directly into the context. The model then generates its response using both its training knowledge and the retrieved content as source material.
 
The extended intern analogy makes this concrete. A new employee asked a question about the standard payment terms in your vendor contracts has two options. They can answer from memory — drawing on whatever general knowledge they brought to the job — which will almost certainly be wrong. Or they can search the company intranet, find the relevant contract template, read the payment terms section, and then answer using the actual document. RAG is the intranet search step.
 
Every RAG system has three components:
 
| Component | What It Is | In Practice |
|---|---|---|
| The knowledge base | Your private document repository | SharePoint, Google Drive, a contract archive, a product manual library |
| The retrieval mechanism | The search engine that finds relevant content | Semantic search against an indexed version of your documents |
| The generation model | The AI that formulates the response | Claude, GPT-4, Gemini — any capable LLM |
 
The key distinction from simply uploading a document to a chat window is scale and persistence. Uploading a document gives the model access to that one document for that one conversation. A RAG system gives the model access to an entire indexed knowledge base — hundreds or thousands of documents — across every conversation, without you uploading anything. The knowledge base is maintained separately and updated independently of any individual conversation.
 
## Why Semantic Search Finds What Keywords Miss
 
The retrieval mechanism in a RAG system does not work like a standard keyword search. Understanding why this matters — without needing to understand the technical implementation — will change how you evaluate and request RAG systems from your IT team.
 
Keyword search finds documents that contain the exact words in your query. If you search for "early termination" and the contract uses the phrase "right of rescission," keyword search returns nothing. If you search for "data breach notification" and the policy uses "security incident disclosure procedure," keyword search fails again.
 
Semantic search — which is what RAG uses — works differently. It organises documents in a space where proximity represents similarity of meaning. Documents that mean similar things end up close together, regardless of whether they share exact vocabulary. Searching for "early termination" returns the clause on "right of rescission" because they occupy neighbouring positions in this meaning space. The search finds intent, not just words.
 
The practical implication: a RAG system built on semantic search will surface the right clause in a 300-page contract even when your search terms do not match the contract's exact language. For legal, compliance, and procurement teams working with dense, formal documents, this is the difference between a useful tool and a useless one.
 
One practical consideration worth understanding before you request a RAG system from IT: how documents are divided before indexing — a process called chunking — determines what the system can retrieve. Documents divided into very large sections preserve more context but may bury the specific relevant passage. Documents divided into very small sections are more precise but may lose the surrounding context that gives a clause its meaning. The right chunking strategy depends on the document type. This is a decision your IT team makes during setup, but knowing it exists allows you to ask the right question: "How are you chunking the documents, and has that been tested against the types of queries we will actually run?"
 
## When to Use RAG and When Not To
 
RAG is a powerful pattern, but it is not the right tool for every workflow.
 
**Use RAG when:**
- The AI needs to answer questions about proprietary documents, internal policies, product knowledge, or historical records that change over time
- The source material is too large to fit in a single context window (thousands of pages of contracts, an entire policy library, a full product documentation set)
- Accuracy against specific internal facts is more important than creative generation
- The same knowledge base will be queried repeatedly by multiple users or workflows
**Do not use RAG when:**
- The task is purely generative — writing copy, brainstorming ideas, drafting communications — where the model's training knowledge is sufficient
- The source material fits comfortably in a single context window and is only needed for one conversation
- Speed and simplicity are the priority and the accuracy requirement does not justify the setup overhead
**Recognising RAG in the tools you already use:**
You have likely been using RAG implementations without knowing it. Microsoft 365 Copilot retrieves content from your SharePoint and OneDrive before generating responses. ChatGPT Enterprise uses your uploaded organisational files as a retrieval layer. NotebookLM — mentioned in the Capstone project — is an explicit RAG tool: you upload source documents and it retrieves from them to answer questions. Claude Projects with uploaded knowledge files operates on the same principle.
 
When these tools answer questions about your specific documents rather than about the world in general, that is RAG at work.
 
**Three questions to ask IT when requesting a RAG system:**
1. What is the knowledge base — which document sources will be indexed, and how will they be kept up to date?
2. How is retrieval quality measured — what tests have been run to confirm the system finds the right content before it is deployed to users?
3. What is the data classification of the documents being indexed — and does the deployment model match that classification under the privacy framework in Chapter 4.6?

**Wrap-up**
RAG closes the knowledge gap between what a model was trained on and what your organisation actually knows. It is the architectural pattern behind every enterprise AI tool that feels genuinely useful rather than generically knowledgeable. Understanding how it works — retrieval before generation, semantic search over keyword search, persistent knowledge bases over single-session uploads — gives you the foundation to evaluate, request, and govern the AI systems that will matter most to your department.
 
