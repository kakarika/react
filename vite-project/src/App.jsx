import "./App.css";
import SwitchTheme from "./components/SwitchTheme/SwitchTheme";
import Button from "./components/button/Button";
import MainTitle from "./components/mainTitle/MainTitle";
import StudentList from "./components/studentList/StudentList";
import Parent from "./pages/Parent";
import Count from "./pages/count/Count";
import Login from "./pages/login/Login";
import "./scss/styles.css";
import Todo from "./todo/Todo";

function App() {
	return (
		<>
			{/* <Button />
			<Parent />
			<SwitchTheme />
			<StudentList /> */}
			{/* <Login /> */}
			<Todo />
			<Count />
		</>
	);
}

export default App;
