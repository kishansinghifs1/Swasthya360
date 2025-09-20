import { prisma } from "../config/prisma.config.js";

// ✅ Add Chat Message
export const addChatMessageController = async (req, res) => {
  try {
    const { userId, message, sender } = req.body;

    if (!userId || !message || !sender) {
      return res.status(400).json({ error: "userId, message, and sender are required" });
    }

    // Check if user exists
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create chat message
    const chat = await prisma.chatHistory.create({
      data: {
        userId,
        message,
        sender, // must be either "USER" or "AGENT"
      },
    });

    return res.status(201).json({
      message: "Chat message added successfully",
      chat,
    });
  } catch (error) {
    console.error("Error adding chat message:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Get all chat messages for a user
export const getChatHistoryController = async (req, res) => {
  try {
    const { userId } = req.params;

    const chats = await prisma.chatHistory.findMany({
      where: { userId },
      orderBy: { timestamp: "asc" }, // oldest first
    });

    return res.status(200).json({ chats });
  } catch (error) {
    console.error("Error fetching chat history:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
