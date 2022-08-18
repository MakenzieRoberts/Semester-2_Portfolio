import "../styles/home.css";

import React from "react";
import { Link } from "react-scroll";
import { useRef } from "react";

import Modal from "./Modal";
import Splash from "./Splash";
import EightPointCalc from "./EightPointCalc";
import DownArrow from "./DownArrow";

import banana from "../images/banana.png";
import penguin from "../images/penguin.png";
import tv from "../images/tv.png";
import github from "../images/github.png";

const Home = () => {
	const section1 = useRef();
	const section2 = useRef();
	const section3 = useRef();
	const bold = { fontWeight: "900" };

	return (
		<div>
			<div className="home">
				{/* ********************************* Splash ********************************* */}
				<Splash />
				{/* ***************************** Section 1 - Art **************************** */}
				<div id="section1" ref={section1} className="section">
					<h2>Here's some of my digital art.</h2>
					<p>(Click to expand)</p>
					<div id="image-grid-container">
						<div id="image-grid">
							<Modal
								id="banana"
								image={banana}
								alt="Artist's rendering of a banana"
							/>
							<Modal
								id="tv"
								image={tv}
								thumbWidth="auto"
								thumbHeight="400px"
								fullHeight="800px"
								fullWidth="auto"
								alt="Artist's rendering of an old tv set"
							/>
							<Modal
								id="penguin"
								image={penguin}
								fullHeight="800px"
								fullWidth="auto"
								alt="Stylized image of a penguin"
							/>
						</div>
					</div>
					<DownArrow sectionId="section2" />
				</div>
				{/* **************************** Section 2 - UI/UX *************************** */}
				<div id="section2" ref={section2} className="section">
					<div id="section2-content">
						<div className="figma">
							<h2>I like to design UI/UX.</h2>
							{/* <h2>I enjoy UI/UX design.</h2><h2>(I bring them to life, too)</h2> */}

							<iframe
								style={{ borderRadius: "10px" }}
								width="100%"
								height="500"
								src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfZ6fME9WaTC5DzcI5xpQVx%2FFinal_Sprint_Social_App%3Fpage-id%3D0%253A1%26node-id%3D9%253A3%26viewport%3D32%252C441%252C0.34%26scaling%3Dscale-down%26starting-point-node-id%3D9%253A3"
							></iframe>
						</div>
						<div className="figma-text">
							<h2>({"&"} bring it to life, too!)</h2>

							<iframe
								style={{ borderRadius: "10px" }}
								width="100%"
								height="500"
								src="https://codesandbox.io/embed/safespace-mockup-0lwyob?fontsize=14&theme=dark&view=preview&hidedevtools=1&hidenavigation=1&editorsize=0"
							></iframe>
						</div>
					</div>
					<DownArrow sectionId="section3" />
				</div>
				{/* *************************** Section 3 - Coding *************************** */}
				<div id="section3" ref={section3} className="section">
					<h2>{"&"} Of course, I love to code. </h2>
					<h3>
						<br /> Sometimes I take on large projects, or contribute to
						open-source.
					</h3>
					<a href="https://github.com/MakenzieRoberts">
						<img id="github-logo" src={github} alt="GitHub logo" />
					</a>
					<h3>
						<br /> Sometimes I just create little tools to make my life easier.
					</h3>
					<div id="section3-content">
						<EightPointCalc />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
