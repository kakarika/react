import React from "react";
import Child3 from "./Child3";

const Child2 = ({ loginUser }) => {
	return (
		<div>
			Child2 {loginUser}
			<Child3 loginUser={loginUser} />
		</div>
	);
};

export default Child2;
