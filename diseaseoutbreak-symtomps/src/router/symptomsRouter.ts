import { Hono } from "hono";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { symptoms_prompt } from "./SymtomPrompt"

export const symptomsRouter = new Hono<{
  Bindings: {
    API_KEY: string;
  };
}>();

symptomsRouter.get("/ping", (c) => {
  return c.json({ message: "Welcome to the Symptoms API PONG" });
});

symptomsRouter.post("/symptoms", async (c) => {
  try {
    const body = await c.req.json<{ message?: string }>();
    const userMessage = body.message;

    if (!userMessage) {
      return c.json({ error: "Message body is required" }, 400);
    }

    const genAI = new GoogleGenerativeAI(c.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const structuredPrompt = symptoms_prompt + userMessage;
    const result = await model.generateContent(structuredPrompt);
    const response = result.response.text();

    return c.json({ assessment: response });
  } catch (error) {
    console.error("Symptoms API error:", error);
    return c.json(
      {
        assessment: "I'm experiencing technical difficulties right now.",
        mainAnswer:
          "I apologize, but I'm unable to process your request at the moment. Please reach out to a doctor if this is a severe emergency.",
        nextSteps:
          "Please try again later. If the issue continues, it should resolve shortly. I'm here to help once the technical issue is fixed! 🤖",
      },
      500
    );
  }
});

