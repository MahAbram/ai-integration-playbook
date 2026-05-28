# Chapter 1.2: Expanding the Canvas (Vision, Audio, Video, Research, Code)

Knowing that multi-modal tools exist is only half the battle. To integrate them into your daily workflow, you must understand exactly how to access and operate them. While text models are conversational, non-text models often require specific parameters, syntax, and step-by-step pipelines to yield professional results.

In this chapter, we will explore six specialized, industry-grade categories of AI tools and provide step-by-step, plug-and-play workflows for each, including exactly where to head to sign up.

## 1. Vision: Text-to-Image (Midjourney)

Corporate stock photos are notoriously rigid and expensive. AI image generators allow you to create bespoke visual assets for presentations, marketing materials, and internal newsletters in seconds. For hyper-realistic, agency-quality aesthetics, professionals turn to Midjourney.

* **Where to start:** Go to midjourney.com, sign up, and select a subscription tier. Midjourney historically operated only through a Discord server, but the dedicated web interface is now the primary access point and the recommended starting place for corporate users. (Discord access remains available for power users who prefer it.)
* **The Learning Curve:** Mastering Midjourney requires understanding how to define style, lighting, and aspect ratios using parameters.

**Workflow: The "Presentation B-Roll" Pipeline**
Instead of struggling to describe an image from scratch, use an LLM as your art director.

1. **Ideation (ChatGPT/Claude):** Ask your text model to write a highly detailed image prompt.
* *Prompt:* "I need a background image for a slide about corporate synergy. Write a prompt for an AI image generator describing a sleek, modern glass boardroom table at sunrise, with cinematic lighting and a photorealistic style. Do not include any human faces."


2. **Generation (Midjourney):** In the Midjourney web app, click **Create** and paste the LLM's description into the prompt bar. Append technical parameters to the end of the prompt.
* *Midjourney Prompt:* `A sleek, modern glass boardroom table at sunrise, cinematic lighting, photorealistic, no humans --ar 16:9 --v 6.1` (Note: `--ar 16:9` forces a widescreen presentation format, and `--v 6.1` ensures a current rendering engine. Specific version numbers update over time — check the Midjourney documentation for the latest.)


3. **Iteration:** Review the four generated options, select the best one, and upscale it for high-resolution placement in your slide deck.

## 2. Presentations: AI Slide Generation (Gamma)

If you need to rapidly build a slide deck, standard text tools fall short. Specialized AI presentation makers bridge the gap between text generation and visual layout. Gamma is a leading tool in this space, known for its flexibility and quick changes. It is highly effective for generating documents that you will share asynchronously, such as investor updates or internal reports.

* **Where to start:** Head to gamma.app and create a free account. The free tier is generous, providing 400 credits to test the workflow.

**Workflow: The "Instant Async Update"**

1. **Drafting the Outline:** Do not rely on the presentation tool to invent your business strategy. Write a bulleted list of your core updates in a standard document.
2. **Import & Generate:** Log into Gamma, select "Generate," and paste your outline into the prompt box.
3. **The AI Edit:** Gamma will automatically generate the slides and apply a cohesive theme. Use the built-in AI chat interface to refine specific slides (e.g., "Make the text on slide 3 more concise" or "Change the layout of slide 4 to a two-column comparison").

## 3. Audio: Enterprise Voice Generation (ElevenLabs)

AI audio generation is rapidly advancing, allowing users to create custom voiceovers, localized audio translations, and background music. ElevenLabs is the industry-leading AI voice generator, capable of delivering human-like AI voices in over 30+ languages. For corporate use, it provides an enterprise platform that is SOC2 and GDPR compliant, ensuring end-to-end encryption for sensitive data.

* **Where to start:** Navigate to elevenlabs.io and create an account. They offer distinct platforms for creative audio generation and for deploying intelligent voice agents.

**Workflow: The "Localized Training Voiceover"**

1. **The Script:** Finalize your training script in English using the CRAFT framework.
2. **Voice Selection:** In ElevenLabs, choose from their enormous selection of premium AI voices, or clone a specific executive's voice (with permission).
3. **Generation:** Paste your text, select your target language (e.g., Spanish or Mandarin), and generate. The AI will output a flawless, localized audio file that you can download and layer into your training module.

## 4. Video: AI Avatars for Corporate Training (Synthesia & HeyGen)

Creating video assets has traditionally been the most expensive corporate bottleneck. Today, AI video platforms allow you to type a script and have a photorealistic AI avatar present it. The two industry standards are HeyGen and Synthesia, and choosing between them depends on your workflow. HeyGen excels at avatar realism and voice cloning, making it ideal for personalized sales prospecting. Synthesia dominates enterprise training and localization workflows due to its template consistency and support for 140+ languages.

* **Where to start:** Visit synthesia.io (for structured enterprise training) or heygen.com (for personalized, highly expressive marketing videos) to initiate a trial.

**Workflow: The "Scalable Onboarding Video" (Synthesia)**

1. **Template Selection:** Log into Synthesia and select an enterprise training template.
2. **The Avatar:** Select an avatar that fits your corporate brand identity. Synthesia offers a large library of avatars across 140+ languages, utilizing a slide-based editor that feels familiar to PowerPoint users.
3. **The Script:** Paste your written onboarding script into the text box in the language you want the avatar to speak. Synthesia does not automatically translate an English script into other languages within a single workflow — if you need a multilingual training rollout, either provide the script pre-translated in each target language, or use Synthesia's dedicated translation feature to clone the video into additional languages after the master English version is finalized. Synthesia will then generate the lip-synced video in the target language.

## 5. Research: Search-Grounded AI (Perplexity)

When your workflow requires absolute factual accuracy, market research, or competitor analysis, you must shift from a standard LLM to an AI-powered answer engine like Perplexity. Perplexity executes live web searches and synthesizes the results, heavily prioritizing inline citations.

* **Where to start:** Go to perplexity.ai. You can use the basic search for free, or upgrade to Perplexity Pro for access to advanced reasoning models.

**Workflow: The "Fact-Checked Executive Brief"**

1. **Querying Perplexity:** Ask a highly specific, time-bound question.
* *Prompt:* "Identify the top three supply chain software acquisitions that occurred in Q1 2026. Provide the acquisition price and the core capability of the acquired company."


2. **Source Verification:** Before reading the generated text, click the numbered citation links provided by Perplexity to verify the underlying news articles.
3. **Synthesis:** Copy the verified facts and paste them into Claude or ChatGPT to format the data into your company's standard executive brief template.

## 6. Code: Coding Companions for Non-Coders (GitHub Copilot)

The final frontier for the non-technical professional is automation via code. While traditionally an AI pair programmer for developers, Copilot and code-capable LLMs allow business operators to generate scripts that automate their own daily tasks.

* **Where to start:** chatgpt.com or claude.ai — both offer code execution on their paid tiers, and either is sufficient for the workflows below. Choose based on which platform you already pay for.

**Workflow: The "Excel Macro Automator"**

1. **State the Logic:** Explain your manual Excel process in plain English to the LLM.
* *Prompt:* "I have an Excel sheet where column A has messy dates (e.g., 'Jan 4th 26', '01-04-2026'). Write a VBA macro that standardizes all dates in column A to the 'YYYY-MM-DD' format. Provide step-by-step instructions on how I can paste this macro into Excel."


2. **Implementation:** Copy the generated code, follow the AI's step-by-step instructions to open the Excel Developer tab, and run the script. A tedious 30-minute manual task becomes a one-click automation.
3. **Bonus — Direct Execution:** For one-off transformations on a single file, skip the macro entirely. Upload your spreadsheet directly to ChatGPT or Claude, describe what you want done, and let the AI run the transformation in its own Python environment. Download the cleaned file when it is finished. This route is faster for ad-hoc cleanup; the macro route is better when you need to repeat the same task weekly.

**Wrap-up**
True integration is about orchestration. By mastering these specific, industry-grade tools for generating images, presentations, localized audio, corporate video, verifiable research, and automation scripts, you transition from a consumer of AI text to an architect of comprehensive corporate deliverables.
