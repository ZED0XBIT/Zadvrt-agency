import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

// Enable JSON body parsing
app.use(express.json());

// Initialize Gemini API Client
let ai: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!ai) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("GEMINI_API_KEY is not defined. The AI features will fall back to mock generation.");
    }
    ai = new GoogleGenAI({
      apiKey: key || "MOCK_KEY",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return ai;
}

// API endpoint for AI Campaign Copy Generation
app.post("/api/generate-campaign", async (req, res) => {
  try {
    const { industry, brandName, brandGoal, targetPlatform } = req.body;

    if (!industry || !brandName || !brandGoal || !targetPlatform) {
      return res.status(400).json({ error: "Missing required fields: industry, brandName, brandGoal, targetPlatform" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Return high-quality simulated ad campaign copy if key is missing
      console.log("No API key found. Serving high-quality simulated campaign copy.");
      const platformName = targetPlatform.charAt(0).toUpperCase() + targetPlatform.slice(1);
      return res.json({
        visualConcept: `A premium, high-contrast visual styled specifically for ${platformName}. The visual centers around "${brandName}" inside a hyper-modern minimalist grid. Deep charcoal tones contrast with electric indigo glassmorphism UI widgets to emphasize cutting-edge ${industry} capabilities.`,
        headlines: [
          `The Future of ${industry} is Already Here.`,
          `Stop Guessing, Start Growing: Meet ${brandName}.`,
          `Ready to ${brandGoal}? Let's construct it.`
        ],
        bodyCopy: `In the crowded space of ${industry}, standing out isn't just about shouting louder—it's about speaking smarter. At ${brandName}, we design experiences that don't just capture attention, they command action. Let our team of visionaries and creative technologists engineer your brand's next giant leap. Let's achieve your goal of: ${brandGoal}. Click below to consult with our campaign planners.`,
        targetingTips: [
          `Demographics: Professionals aged 25-45 who value high-end creative execution and digital efficiency.`,
          `Interests: Premium branding, modern design, disruptive startups, and strategic growth marketing.`,
          `Behaviors: Early technology adopters and decision makers browsing high-intent creative publications.`
        ],
        isSimulated: true
      });
    }

    const client = getGeminiClient();
    const prompt = `Create a high-converting advertisement copy campaign concept for a client with these parameters:
- Brand Name: "${brandName}"
- Industry: "${industry}"
- Core Marketing Goal: "${brandGoal}"
- Primary Social/Ad Platform: "${targetPlatform}"

Please act as an elite Creative Director and deliver:
1. A descriptive 'visualConcept' detailing high-end visual direction, color story, and graphic mood.
2. Three 'headlines' optimized for high CTR on ${targetPlatform} (Benefit-driven, Curiosity-driven, and Direct-action).
3. A compelling 'bodyCopy' that builds tension, offers ${brandName} as the primary solution, and drives a powerful action to achieve the goal: "${brandGoal}".
4. Three actionable 'targetingTips' based on interests, behaviors, and demographic filters on ${targetPlatform}.`;

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are an elite, award-winning Creative Director and head of copy at Aura Creative, a premium, technology-forward modern advertising agency. You speak with high-end, elegant authority. Your copy is scroll-stopping, sophisticated, and deeply persuasive.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            visualConcept: {
              type: Type.STRING,
              description: "Art direction, styling, color palette, and visual storytelling mood description."
            },
            headlines: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Exactly three high-converting headlines optimized for the selected channel."
            },
            bodyCopy: {
              type: Type.STRING,
              description: "Compelling main body copy with hook, story/benefits, and explicit call-to-action."
            },
            targetingTips: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Three highly effective audience filters (demographics, interests, digital behaviors)."
            }
          },
          required: ["visualConcept", "headlines", "bodyCopy", "targetingTips"]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Empty response received from Gemini.");
    }

    const resultJson = JSON.parse(resultText.trim());
    return res.json({
      ...resultJson,
      isSimulated: false
    });

  } catch (error: any) {
    console.error("Gemini Ad Generation Error:", error);
    return res.status(500).json({
      error: "Failed to generate ad campaign.",
      details: error.message
    });
  }
});

// API endpoint for AI Campaign Roadmap / Contact Submission Planner
app.post("/api/submit-lead", async (req, res) => {
  try {
    const { name, email, company, budget, details } = req.body;

    if (!name || !email || !company || !details) {
      return res.status(400).json({ error: "Missing required contact details." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({
        success: true,
        roadmap: `Thank you, ${name}! Here is a high-level creative roadmap for ${company}:

Phase 1: Creative Discovery & Strategy Audit (Weeks 1-2)
- Aura Creative conducts competitor positioning analysis and designs a custom brand mood board.
- Align messaging pillars based on your goals and estimated budget of ${budget || "TBD"}.

Phase 2: High-Fidelity Creative & Copy Asset Production (Weeks 3-5)
- Scriptwriting, visual art direction, and digital ad copy variations.
- Setting up performance attribution and high-intent landing experiences.

Phase 3: Hyper-Targeted Pilot Launch & Iteration (Weeks 6+)
- Campaign launch on high-impact channels.
- Real-time multivariate testing to scale winning creatives.`,
        isSimulated: true
      });
    }

    const client = getGeminiClient();
    const prompt = `Draft a personalized, elite, and inspiring creative campaign roadmap outline for a prospective client who just submitted our contact form:
- Prospect Name: ${name}
- Email: ${email}
- Company: ${company}
- Budget Range: ${budget || "Flexible / Not disclosed"}
- Client's Challenge/Objective: "${details}"

Draft a high-end, professionally formatted roadmap of exactly 3 concise phases (Discovery, Creative Execution, and Pilot Testing) that makes them extremely excited to partner with Aura Creative. Keep it elegant, bespoke, and under 250 words total. Do not use markdown headers, just return a beautiful plain text with clear headings.`;

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are the Managing Director at Aura Creative. You speak with premium creative warmth, incredible precision, and high-level client focus."
      }
    });

    return res.json({
      success: true,
      roadmap: response.text || "Our strategy team is reviewing your profile and will issue your custom roadmap shortly.",
      isSimulated: false
    });

  } catch (error: any) {
    console.error("Roadmap Generation Error:", error);
    return res.json({
      success: true,
      roadmap: "Thank you for reaching out! Our strategy team will review your project details and contact you within 24 hours with a custom blueprint.",
      isSimulated: true
    });
  }
});

async function startServer() {
  // Serve Vite Assets and SPAs
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
