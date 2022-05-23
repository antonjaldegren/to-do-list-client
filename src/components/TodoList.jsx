import React from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, toggleTodo, removeTodo }) {
	return (
		<main className={styles.main}>
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					data={todo}
					toggleTodo={toggleTodo}
					removeTodo={removeTodo}
				/>
			))}
		</main>
	);
}

export default TodoList;
