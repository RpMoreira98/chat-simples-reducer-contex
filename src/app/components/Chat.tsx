import { useUser } from "../contexts/UserContext";
import { ChatInput } from "./ChatInput";
import { ChatMensagen } from "./ChatMenssagen";
import { NameInput } from "./NameInput";

export const Chat = () => {
  const userCtx = useUser();
  if (!userCtx) return null;
  if (!userCtx.user) return <NameInput />;

  return (
    <div className="border border-white/30 roudend-md">
      <div className="h-96 p-3 overflow-y-scroll">
        {" "}
        <ChatMensagen />
      </div>
      <div className="border-t border-t-white/30 p-3">
        <ChatInput name={userCtx.user} />
      </div>
      <div className="border-t border-t-white/30 p-3">
        <ChatInput name={"bot"} />
      </div>
    </div>
  );
};
