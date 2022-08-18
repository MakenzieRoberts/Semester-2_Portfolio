import React, { useState } from "react";
import "../styles/modal.css";
import expand from "../images/expand.png";
import banana from "../images/banana.png";

import penguin from "../images/penguin.png";

import tv from "../images/tv.png";
export default function Modal(props) {
	const image = props.image;
	const thumbWidth = props.thumbWidth;
	const thumbHeight = props.thumbHeight;
	const fullWidth = props.fullWidth;
	const fullHeight = props.fullHeight;
	const alt = props.alt;
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	if (modal) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

	return (
		<>
			<img
				width={thumbWidth}
				height={thumbHeight}
				src={image}
				alt={alt}
				onClick={toggleModal}
				className="thumb-img"
			/>

			{modal && (
				<div className="modal">
					<div onClick={toggleModal} className="overlay"></div>
					<div className="modal-content">
						<img width={fullWidth} height={fullHeight} src={image} alt="" />

						<button className="close-modal" onClick={toggleModal}>
							<span className="close-text" aria-label="Back Button">
								<span>X</span>
								{/*⇦ */}
							</span>
						</button>
					</div>
				</div>
			)}
		</>
	);
}

Modal.defaultProps = {
	thumbWidth: "400px",
	thumbHeight: "auto",
	fullWidth: "800px",
	fullHeight: "auto",
};
