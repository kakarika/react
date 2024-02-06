import React, { useState } from "react";
import "./Button.css";

const MyBtn = ({ change, btnLabel, onbtnClick }) => {
	return (
		<>
			<button className={`btn ${change}`} onClick={onbtnClick}>
				{btnLabel}
			</button>
		</>
	);
};

const Button = () => {
	const [count, setCount] = useState(0);

	const increaseHandler = () => setCount(count + 1);
	const decreaseHandler = () => {
		if (count > 0) {
			setCount(count - 1);
		} else {
			setCount(0);
		}
	};
	return (
		<div>
			<p>My Count {count}</p>
			<MyBtn
				change="increase"
				btnLabel="Increment"
				onbtnClick={increaseHandler}
			/>
			<MyBtn
				change="decrease"
				btnLabel="Decrement"
				onbtnClick={decreaseHandler}
			/>
		</div>
	);
};

export default Button;
