import "../styles/home.css";
import React from "react";
import { useRef } from "react";
import Modal from "./Modal";
import Splash from "./Splash";
import EightPointCalc from "./EightPointCalc";
import DownArrow from "./DownArrow";
import Contact from "./Contact";
import banana from "../images/banana.png";
import penguin from "../images/penguin.png";
import tv from "../images/tv.png";
import github from "../images/github.png";

const Home = () => {
	const section1 = useRef();
	const section2 = useRef();
	const section3 = useRef();
	const section4 = useRef();
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

							{/* THESE EMBEDS THROW ERRORS IN THE CONSOLE. IT'S NOT ME, IT'S THEM. */}
							<iframe
								title="figma"
								style={{ borderRadius: "10px" }}
								width="100%"
								height="500"
								src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfZ6fME9WaTC5DzcI5xpQVx%2FFinal_Sprint_Social_App%3Fpage-id%3D0%253A1%26node-id%3D9%253A3%26viewport%3D32%252C441%252C0.34%26scaling%3Dscale-down%26starting-point-node-id%3D9%253A3"
							></iframe>
						</div>
						<div></div>
						<div className="figma-text">
							<h2>({"&"} bring it to life, too!)</h2>
							{/* THESE EMBEDS THROW ERRORS IN THE CONSOLE. IT'S NOT ME, IT'S THEM. */}
							<iframe
								title="codesandbox"
								style={{ borderRadius: "10px" }}
								width="100%"
								height="500"
								src="https://codesandbox.io/embed/safespace-mockup-0lwyob?fontsize=14&theme=dark&view=preview&hidedevtools=1&hidenavigation=1&editorsize=0&codemirror=1"
							></iframe>
						</div>
					</div>
					<DownArrow sectionId="section3" />
				</div>

				{/* ************************* Section 3 - < Coding > ************************* */}

				<div id="section3" ref={section3} className="section">
					<h2 style={{ margin: "0" }}>{"&"} Of course, I love to code. </h2>
					<p>(I coded this website, after all!)</p>
					<div id="section3-content">
						<div id="github">
							<h3>I enjoy contributing to open-source.</h3>
							<h3>⇦ </h3>
							<a
								href="https://github.com/MakenzieRoberts"
								target="_blank"
								rel="noreferrer"
							>
								<img
									height="76px"
									id="github-logo"
									src={github}
									alt="GitHub logo"
								/>
							</a>
						</div>

						<div id="calc">
							<h3>{"&"} Creating tools that make my life easier.</h3>
							<p>
								Below is a little program that helps me follow the <br />
								<a
									href="https://material.io/design/layout/spacing-methods.html#baseline-grid"
									target="_blank"
									rel="noreferrer"
								>
									8-Point Grid Design System.
								</a>
							</p>
							<p>
								You can enter a number, and it will round that number to the
								nearest factor of 8. <span style={bold}>Give it a try!</span>
							</p>

							<EightPointCalc />
						</div>
					</div>
					<DownArrow sectionId="section4" />
				</div>

				{/* *************************** Section 4 - Contact ************************** */}

				<div id="section4" ref={section4} className="section">
					<h2>Want to get in touch?</h2>
					<div id="section4-content">
						<Contact />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
