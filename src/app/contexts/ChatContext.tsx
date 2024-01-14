import { chatReducer } from "@/reducers/ChatReducer";
import { Menssage } from "@/types/Menssage";
import { ReactNode, createContext, useContext, useReducer } from "react";

type ChatContext = {
  chat: Menssage[];
  addMenssage: (user: string, text: string) => void;
};

export const ChatContext = createContext<ChatContext | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chat, dispacth] = useReducer(chatReducer, []);
  const addMenssage = (user: string, text: string) => {
    dispacth({
      type: "add",
      payload: { user, text },
    });
  };

  return (
    <ChatContext.Provider value={{ chat, addMenssage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
