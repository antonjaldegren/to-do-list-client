import React from "react";
import styles from "./Todo.module.css";

function Todo(props) {
	const {
		data: { id, title, isCompleted },
		toggleTodo,
		removeTodo,
	} = props;

	return (
		<section className={styles.section}>
			<div className={styles["title-container"]}>
				<input
					className={styles.check}
					type="checkbox"
					checked={isCompleted}
					onChange={() => toggleTodo(id)}
				/>
				<h2
					className={`${styles.title} ${
						isCompleted ? styles.completed : null
					}`}
				>
					{title}
				</h2>
			</div>
			<div
				className={styles["remove-button"]}
				onClick={() => removeTodo(id)}
			></div>
		</section>
	);
}

export default Todo;
