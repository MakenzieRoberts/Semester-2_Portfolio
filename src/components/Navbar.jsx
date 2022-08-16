import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	const closeMenu = (e) => {
		setIsNavExpanded(!isNavExpanded);
		e.preventDefault();
	};
	return (
		//!REFERENCE: https://blog.logrocket.com/create-responsive-navbar-react-css/
		<nav className="navigation">
			<div id="nav-container">
				<a href="/" className="brand-name">
					Makenzie Roberts
				</a>
				<button
					className="hamburger"
					onClick={() => {
						setIsNavExpanded(!isNavExpanded);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="white"
					>
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
				<div
					className={
						isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
					}
				>
					<ul onClick={closeMenu}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
