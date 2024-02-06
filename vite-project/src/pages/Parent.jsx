import React from "react";
import Child1 from "./Child1";

const Parent = () => {
	const loginUser = "MAMA";
	return (
		<div>
			<h1>Parent</h1>
			<h4>{loginUser}</h4>
			<Child1 loginUser={loginUser} />
		</div>
	);
};

export default Parent;
