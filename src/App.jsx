import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.module.css";

import MainTitle from "./components/MainTitle";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";

function App() {
	const [todos, setTodos] = useState([]);

	async function getAllTodos() {
		const res = await axios.get("http://localhost:4000/todos");
		res.status === 200 && setTodos(res.data);
	}

	async function createTodo(title) {
		const res = await axios.post("http://localhost:4000/todos", {
			title: title,
		});
		res.status === 201 && getAllTodos();
	}

	async function toggleTodo(id) {
		const todo = todos.find((todo) => todo.id === id);
		const res = await axios.patch(`http://localhost:4000/todos/${id}`, {
			isCompleted: !todo.isCompleted,
		});
		res.status === 200 && getAllTodos();
	}

	async function removeTodo(id) {
		const res = await axios.delete(`http://localhost:4000/todos/${id}`);
		res.status === 200 && getAllTodos();
	}

	useEffect(() => getAllTodos(), []);

	return (
		<div className={styles.app}>
			<MainTitle text="TO-DO LIST" />
			<InputBox createTodo={createTodo} />
			{todos.length > 0 ? (
				<TodoList
					todos={todos}
					toggleTodo={toggleTodo}
					removeTodo={removeTodo}
				/>
			) : null}
		</div>
	);
}

export default App;
