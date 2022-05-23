import React, { useState, useEffect, useRef } from "react";
import styles from "./InputBox.module.css";

function InputBox({ createTodo }) {
	const [input, setInput] = useState("");

	const inputRef = useRef();
	useEffect(() => inputRef.current.focus(), []);

	function handleChange(e) {
		setInput(e.target.value);
	}

	function handleKeyPress(e) {
		if (e.key === "Enter" && input) {
			submitActivity();
		}
	}

	function submitActivity() {
		createTodo(input);
		setInput("");
	}

	return (
		<section className={styles.section}>
			<div className={styles["input-container"]}>
				<input
					className={styles.input}
					type="text"
					onChange={handleChange}
					onKeyPress={handleKeyPress}
					value={input}
					ref={inputRef}
				/>
				<button
					className={styles.submit}
					onClick={submitActivity}
					disabled={!input}
				>
					Add task
				</button>
			</div>
		</section>
	);
}

export default InputBox;
