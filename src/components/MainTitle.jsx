import React from "react";
import styles from "./MainTitle.module.css";

function MainTitle(props) {
	return (
		<div style={props}>
			<h1 className={styles["main-title"]}>{props.text}</h1>
		</div>
	);
}

export default MainTitle;
