import { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../styles/navbar.css";
import { Link as ScrollLink } from "react-scroll";

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
				<a href="/" className="name">
					<h1>Makenzie Roberts</h1>
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
					<ul>
						<li>
							<Link to="/">
								<ScrollLink
									onClick={closeMenu}
									activeClass="active"
									to="section1"
									spy={true}
									smooth={true}
									offset={-100}
									duration={900}
								>
									Digital Art
								</ScrollLink>
							</Link>
						</li>
						<li>
							<Link to="/">
								<ScrollLink
									onClick={closeMenu}
									activeClass="active"
									to="section2"
									spy={true}
									smooth={true}
									offset={-100}
									duration={900}
								>
									UI/UX Design
								</ScrollLink>
							</Link>
						</li>
						<li>
							<Link to="/">
								<ScrollLink
									activeClass="active"
									to="section3"
									spy={true}
									smooth={true}
									offset={-100}
									duration={900}
								>
									{"< "}Coding{" >"}
								</ScrollLink>
							</Link>
						</li>
						<li>
							<Link to="/">
								<ScrollLink
									activeClass="active"
									to="splash"
									spy={true}
									smooth={true}
									offset={-100}
									duration={900}
								>
									Top ^
								</ScrollLink>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
