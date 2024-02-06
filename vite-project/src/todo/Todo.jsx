import React, { useState } from "react";
import "./Todo.scss";

const Todo = () => {
	const [inputText, setInputText] = useState("");
	const [todoItems, setTodoItems] = useState([]);

	const inputHandler = (e) => {
		setInputText(e.target.value);
	};

	const addHandler = (e) => {
		e.preventDefault();
		if (inputText !== "") {
			setTodoItems([...todoItems, inputText]);
			setInputText("");
		}
	};

	const editHandler = (id) => {
		const editItem = todoItems.filter((item, index) => index === id);
		const newText = window.prompt("Edit text ", editItem);
		if (newText) {
			const updateItem = todoItems.map((item, index) =>
				index === id ? newText : item
			);

			setTodoItems(updateItem);
		}
	};

	const deleteHandler = (id) => {
		setTodoItems((oldItems) => oldItems.filter((item, index) => index !== id));
	};

	return (
		<div>
			<h1>TODO LIST</h1>
			<hr />
			<form className="addList" onSubmit={addHandler}>
				<input
					type="text"
					className="addList__textbox"
					placeholder="add item...."
					onChange={inputHandler}
					value={inputText}
				/>
				<button type="submit" className="addList__btn">
					Add
				</button>
			</form>
			<div className="listItems">
				{todoItems.map((item, index) => (
					<div className="listItems__item" key={index}>
						<div className="text-box">
							<h3>{item}</h3>
						</div>
						<div className="tools">
							<button
								className="btn btn--edit"
								onClick={() => editHandler(index)}
							>
								Edit
							</button>
							<button
								className="btn btn--delete"
								onClick={() => deleteHandler(index)}
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Todo;
