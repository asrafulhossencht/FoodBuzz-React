import { useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";

function App() {
	const [count, setCount] = useState(0);

	return <div className="App">
    <Header></Header>
    <Container></Container>
  </div>;
}

export default App;
