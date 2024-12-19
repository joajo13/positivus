import { NewChat } from "@/types/chat";

export const createNewChat = async (newChat: NewChat) => {
  const res = await fetch(`${process.env.API_URL}/chats/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newChat),
  });

  if (!res.ok) {
    throw new Error("Failed to create chat");
  }

  const resJson = await res.json();

  return resJson;
};
