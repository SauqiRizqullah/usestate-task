"use client";

import { useState } from "react";

import AddTodo from "./AddTodo";

let nextId = 3;
const initialTodos = [
  { id: 0, need: "Gaji Fantastis", done: false },
  { id: 1, need: "Badan Bugar", done: true },
  { id: 2, need: "Kebutuhan Cukup", done: false },
];

export default function Home() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(need) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        need: need, // that will be filled in AddTodo's input
        done: false,
      },
    ]);
  }

  return (
    <div>
      <div className="justify-self-center flex flex-col gap-3 mt-40">
        <div>
          <AddTodo onAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
}
