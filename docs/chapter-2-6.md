# Chapter 2.6: The Design & UX Partner

The democratization of design tools allows non-designers to draft professional marketing collateral and rapid product wireframes without waiting weeks for an internal design agency. AI accelerates this by generating layouts and allowing for granular, generative image editing.

## Workflow 11: Generative Image Editing (Inpainting & Outpainting)

Sometimes you have the perfect photo for a marketing poster, a LinkedIn post, or a corporate newsletter, but an unwanted object is in the background, or the image is cut off and does not fit your banner dimensions. Generative editing solves this without requiring traditional Photoshop skills.

* **The Tools:** Canva (Magic Studio) or Adobe Firefly.

1. **Step 1: The Base Asset Upload**
Upload your existing corporate photo into Canva and select the image.
2. **Step 2: Generative Erase/Fill (Inpainting)**
Select the "Magic Edit" or "Generative Fill" tool. Use your brush to highlight the unwanted object (e.g., a distracting coffee cup on a conference table). Type a prompt into the text box to replace it: *"Replace with a sleek silver laptop,"* or simply *"Remove object and fill background."* The AI will contextually repaint the pixels to match the lighting, shadows, and depth of field perfectly.
3. **Step 3: Magic Expand (Outpainting)**
If you have a vertical portrait photo but need it to fit a horizontal website banner (16:9 ratio), use the "Magic Expand" tool. Select your desired aspect ratio. The AI will "hallucinate" the rest of the room beyond the borders of the original image, perfectly extending the background to fit your required dimensions without stretching or distorting the original subject.

## Workflow 12: Rapid UX Wireframing

If you are pitching a new internal app to the IT department or a client-facing portal to leadership, do not describe it with bullet points—show it. Visual prototypes secure stakeholder buy-in significantly faster than written specs.

* **The Tool:** Uizard (uizard.io) or Claude (using the Artifacts feature).

1. **Step 1: The Concept Prompt (Uizard)**
Go to an AI design tool like Uizard and use their "Autodesigner" feature, which turns text prompts into multi-screen mockups.
> **[Prompt]** "I need a mobile app for employees to log their daily travel expenses. It needs a main dashboard showing total monthly spend with a pie chart, a large camera button to scan physical receipts, and a user settings page. Use a clean, modern, minimalist style with our corporate colors: navy blue and white."


2. **Step 2: The Execution & Iteration**
The AI will generate a multi-screen, clickable prototype in minutes. You can click between screens to demonstrate the user journey.
3. **Alternative Step (Code-Based Wireframing with Claude)**
If you need a desktop dashboard rather than a mobile app, you can ask Claude to generate the interactive UI directly in the chat.
> **[Action]** "Write a React component using Tailwind CSS to create a modern dashboard UI for an employee expense tracker. Include a sidebar navigation menu, a summary metrics row at the top, and a table of recent transactions. Render the Artifact."
> Claude will immediately generate a functional front-end mockup you can interact with, allowing you to prioritize the user experience before you ever consult an engineering team.
