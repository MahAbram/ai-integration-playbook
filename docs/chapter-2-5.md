# Chapter 2.5: The Presentation & Visual Storyteller

Creating a compelling slide deck requires synthesizing text, establishing a narrative arc, and designing supporting visuals. This is a highly multi-modal task. Relying on a single AI tool to generate an entire presentation usually results in disjointed, generic slides. To build an industry-grade presentation, you must integrate specialized tools into a cohesive pipeline.

## Workflow 9: The "Async Pitch Deck" Pipeline

This workflow strings together three distinct AI categories: a large-context LLM for the narrative, an AI slide generator for the layout, and an image generator for bespoke visual assets.

* **The Tools:** Claude (claude.ai), Gamma (gamma.app), and an image generator — Midjourney (midjourney.com), ChatGPT's built-in image generation, or Adobe Firefly. Use whichever you have access to; Midjourney produces the most polished results but requires a subscription. Note: Midjourney now runs in a web app at midjourney.com — Discord is no longer required.

1. **Step 1: Narrative Architecture (Claude)**
Never ask a presentation tool to invent your business strategy. Build the scaffolding first in a text model.
    > **[Context/Role]** I need to build a 10-slide presentation pitching a new internal software tool to the executive board. Act as a top-tier Management Consultant.
    > **[Action]** Draft the outline for this deck. Provide a slide-by-slide breakdown.
    > **[Format]** For each slide, provide the main headline, three concise bullet points, speaker notes (2-3 sentences), and a highly descriptive suggestion for what visual or image should accompany the slide.

2. **Step 2: Rapid Layout Generation (Gamma.app)**
Log into Gamma → click **"+ New"** → select **"Generate"** → choose **"Presentation"** → paste Claude's slide-by

## Workflow 10: The Talk Track & Q&A Defense Grid

A presentation is more than just slides; it is the speaker's delivery. Once your deck is finished, use AI to prepare you for the live delivery and the inevitable executive pushback.

* **The Tool:** ChatGPT or Claude.

1. **Step 1: The Talk Track Prompt**
Upload the final text of your presentation.
> **[Context]** Here is the final text outline of my 10-slide presentation pitching a new software tool.
> **[Role]** Act as an executive speechwriter.
> **[Action]** Generate a conversational, highly engaging talk track for each slide.
> **[Constraint]** Do not just read the bullet points; provide the narrative connective tissue and transitions between the slides to keep the audience engaged. Ensure the tone is confident and persuasive.


2. **Step 2: The Defense Grid Prompt**
Use conversational memory to pivot the AI into an adversarial role.
> **[Role/Action]** Now, shift your role. Act as the highly skeptical executives in the audience. Review my presentation and generate a 'Q&A Defense Grid.'
> **[Format]** Give me the 5 most difficult, aggressive questions they will likely ask regarding budget constraints, implementation timelines, and ROI. For each question, provide a structured, data-backed response I can use to defend the pitch.
