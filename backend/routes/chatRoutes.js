import express from "express";
import axios from "axios";

const router = express.Router();

// POST /api/chat — forwards a message to OpenRouter and returns the AI reply.
// Public route (no auth) so any visitor can try the assistant — add requireAuth
// here later if you want to restrict it to logged-in users.
router.post("/", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ message: "message is required" });

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini", // swap for any model OpenRouter supports
        messages: [
          {
            role: "system",
            content:
              "You are a helpful shopping assistant for an e-commerce site. Keep answers short and practical.",
          },
          { role: "user", content: message },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error("OpenRouter error:", err.response?.data || err.message);
    res.status(500).json({ message: "Chat request failed" });
  }
});

export default router;
