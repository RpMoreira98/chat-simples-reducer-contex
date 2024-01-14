import { KeyboardEvent, useState } from "react";
import { useUser } from "../contexts/UserContext";

export const NameInput = () => {
  const [nameInput, setNameInput] = useState("");
  const nameCtx = useUser();

  const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === "enter") {
      if (nameInput.trim() !== "" && nameInput !== "bot") {
        nameCtx?.setUser(nameInput.trim());
        console.log(nameInput);
      }
    }
  };

  return (
    <div className="mt-14">
      <p className="text-xl mb-4">Qual é o seu nome?</p>
      <div className="flex gap-3 items-center text-lg">
        <input
          type="text"
          className="flex-1 border border-white/30 rounded-md px-4 py-3 text-white bg-white/10 outline-none"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          onKeyUp={handleKeyUpAction}
        />
      </div>
    </div>
  );
};
