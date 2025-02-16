import "./App.css";
import Background from "./components/background";
import Form from "./components/form";
import Title from "./components/title";

function App() {
	return (
		<>
			<Background />
			<div className="content">
				<Title />
				<Form />
			</div>
		</>
	);
}

export default App;
