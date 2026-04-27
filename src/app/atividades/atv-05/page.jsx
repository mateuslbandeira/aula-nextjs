"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Page() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Aprender Vite.js" },
    { id: 2, text: "Estudar CRUD" },
  ]);

  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);

  function handleAddOrEdit() {
    if (!input.trim()) return;

    if (editingId) {
      // editar
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingId ? { ...task, text: input } : task
        )
      );
      setEditingId(null);
    } else {
      // adicionar
      const newTask = {
        id: Date.now(),
        text: input,
      };
      setTasks((prev) => [...prev, newTask]);
    }

    setInput("");
  }

  function handleDelete(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function handleEdit(task) {
    setInput(task.text);
    setEditingId(task.id);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CRUD Next.js</h1>

      <div className={styles.form}>
        <input
          type="text"
          placeholder="Digite algo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleAddOrEdit}>
          {editingId ? "Salvar" : "+ Adicionar"}
        </button>
      </div>

      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.item}>
            <span>{task.text}</span>

            <div className={styles.actions}>
              <button
                className={styles.edit}
                onClick={() => handleEdit(task)}
              >
                ✏️
              </button>

              <button
                className={styles.delete}
                onClick={() => handleDelete(task.id)}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
