import React, { useState } from "react";

const SwitchTheme = () => {
	const [isDark, setIsDark] = useState(true);

	const changeThemeHandler = () => {
		if (isDark) {
			setIsDark(false);
			document.body.style.backgroundColor = "white";
			document.body.style.color = "#242424";
		} else {
			setIsDark(true);
			document.body.style.backgroundColor = "#242424";
			document.body.style.color = "white";
		}
	};

	return (
		<div>
			<button onClick={changeThemeHandler} id="theme">
				Change {isDark ? "white" : "dark"}
			</button>
			{isDark && <p>Theme is white</p>}
		</div>
	);
};

export default SwitchTheme;
