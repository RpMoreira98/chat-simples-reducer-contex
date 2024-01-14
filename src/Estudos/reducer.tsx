"use client";

import { listReducer } from "@/reducers/listReducer";
import { useReducer, useState } from "react";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [addList, setAddList] = useState("");

  const handleClick = () => {
    if (addList.trim() === "") return false;

    dispatch({
      type: "add",
      payload: {
        text: addList.trim(),
      },
    });

    setAddList("");
  };

  const handleDoneChecked = (id: number) => {
    dispatch({
      type: "toggleDone",
      payload: { id },
    });
  };

  const handleClickEdit = (id: number) => {
    const item = list.find((it) => it.id == id);
    if (!item) return false;

    const newText = window.prompt("Editar Tarefa", item.text);
    if (!newText || newText.trim() === "") return false;

    dispatch({
      type: "editText",
      payload: { id, newText },
    });
  };

  const handleClickRemove = (id: number) => {
    if (!window.confirm("Você realmente deseja excluir?")) return false;

    dispatch({
      type: "remove",
      payload: { id },
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-4">Lista de tarefas</h1>
      <div className="max-w-2xl mx-auto flex rounded-md border border-gray-400 p-4">
        <input
          type="text"
          placeholder="Adicione um item na lista"
          onChange={(e) => setAddList(e.target.value)}
          value={addList}
          className="
          flex-1
        border border-white bg-transparent text-white p-3 rounded-md outline-none"
        />
        <button onClick={handleClick} className="p-3 bg-blue-300 mx-3 rounded">
          Adicionar
        </button>
      </div>
      <ul className="max-w-2xl mx-auto py-4">
        {list.map((item) => (
          <li
            key={item.id}
            className="flex items-center border-b border-gray-500"
          >
            <input
              type="checkbox"
              className="w-5 h-5 mr-4"
              defaultChecked={item.done}
              onClick={() => handleDoneChecked(item.id)}
            />
            <p className="flex-1 text-lg">{item.text}</p>
            <button
              onClick={() => handleClickEdit(item.id)}
              className="bg-green-500 p-3 rounded-md m-3 hover:bg-green-300"
            >
              Editar
            </button>
            <button
              onClick={() => handleClickRemove(item.id)}
              className="bg-red-500 p-3 rounded-md hover:bg-red-300"
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
