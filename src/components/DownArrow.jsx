import React from "react";
import { Link } from "react-scroll";
import downArrow from "../images/down-arrow.png";
import "../styles/downarrow.css";

const DownArrow = (props) => {
	const section = props.sectionId;
	return (
		<div className="arrow">
			<Link
				activeClass="active"
				to={section}
				spy={true}
				smooth={true}
				offset={-100}
				duration={2000}
			>
				<img height="100" src={downArrow} alt="Down Arrow" />
			</Link>
		</div>
	);
};

export default DownArrow;
