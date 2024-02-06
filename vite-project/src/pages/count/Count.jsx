import React, { useEffect, useState } from "react";

const Count = () => {
	const [myCount, setMyCount] = useState(0);
	const [isSubmitted, setIssubmitted] = useState(false);

	useEffect(() => {
		setMyCount(myCount + 1);
	}, [isSubmitted]);

	return (
		<div>
			<h2>Count {myCount}</h2>
			<button onClick={() => setIssubmitted(!isSubmitted)}>click me</button>
		</div>
	);
};

export default Count;
