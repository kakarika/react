import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Login = () => {
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const passwordHandler = (b) => {
		// console.log(b.target.value);
		setPassword(b.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setSubmitted(true);
		// console.log(`username : ${username} password : ${password}`);
	};

	return (
		<div id="root">
			<h2>login form</h2>
			<form action="" onSubmit={submitHandler}>
				<label htmlFor="">username</label>
				<input
					type="text"
					placeholder="username"
					value={username}
					onChange={(e) => {
						// console.log(e.target.value);
						setUserName(e.target.value);
					}}
				/>
				<br />
				<label htmlFor="">password</label>
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={passwordHandler}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
			{/* <p>username : {username}</p> */}
			{submitted ? (
				<p>
					username : {username} <br /> password : {password}
				</p>
			) : (
				<p>submit first</p>
			)}
		</div>
	);
};

export default Login;
