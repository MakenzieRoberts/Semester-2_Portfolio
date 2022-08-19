import React from "react";
import DownArrow from "./DownArrow";
import "../styles/splash.css";

/* ********************** Splash Screen / Introduction ********************** */

const Splash = () => {
	const bold = { fontWeight: "900" };
	return (
		<div className="splash">
			<div className="fade">
				<div id="main-text">
					<h2>Hi! I'm Makenzie.</h2>
					<p>
						I have a passion for<span style={bold}> ART </span>
						{"&"}
						<span style={bold}> TECHNOLOGY. </span>
					</p>
				</div>
				<DownArrow sectionId="section1" />
			</div>
		</div>
	);
};

export default Splash;
