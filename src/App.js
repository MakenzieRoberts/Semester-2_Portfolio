import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">
					<Router>
						<Navbar />
						<Routes>
							<Route path="/" element={<Home />} />
						</Routes>
					</Router>
				</header>
			</div>
		</div>
	);
}

export default App;
