import { useState } from "react";
import {Loader2} from 'lucide-react'
import "./style.css";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      await response.json();
      alert("Todo Added");

      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
    setLoading(false);
  };

  return (
    <div className="main_div">
      <h2>Manage Todos</h2>
      <div className="container">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />{" "}
        <br />
        {loading ? (
          <Loader2 className="spin-animation"/>
        ) : (
          <button onClick={handleTodos}>Add Todo</button>
        )}
      </div>
    </div>
  );
}

export default CreateTodo;
