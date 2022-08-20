// 		Project by: 	Makenzie Roberts
//		Date Written: 	August 15-19, 2022

import React from "react";
import { Link } from "react-scroll";
import downArrow from "../images/down-arrow.png";
import "../styles/downarrow.css";

/* ******************************* Down Arrow ******************************* */

//		* This component uses react-scroll to navigate to different sections (https://www.npmjs.com/package/react-scroll)
const DownArrow = (props) => {
	//		This component accepts a prop 'sectionId', which tells react-scroll which component to scroll to.
	const section = props.sectionId;
	return (
		<div className="arrow">
			<Link
				activeClass="active"
				to={section}
				spy={true}
				smooth={true}
				offset={-100}
				duration={1500}
			>
				{/* Down-Arrow Image */}
				<img height="100" src={downArrow} alt="Down Arrow" />
			</Link>
		</div>
	);
};

export default DownArrow;
