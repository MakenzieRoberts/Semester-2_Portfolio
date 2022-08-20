// 		Project by: 	Makenzie Roberts
//		Date Written: 	August 15-19, 2022

import React, { useState } from "react";
import "../styles/modal.css";

/* ***************** Section 1 (Digital Art) - Modal Effect ***************** */

//		!REFERENCE: https://dev.to/ziratsu/create-a-modal-with-react-176e
export default function Modal(props) {
	//		This function receives the following props that specify the dimensions of the modal image
	//		at thumbnail and full size.
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

	//		Toggles className appropriately depending on whether or not the modal is open.
	if (modal) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

	return (
		<>
			{/* Thumbnail Image */}
			<img
				width={thumbWidth}
				height={thumbHeight}
				src={image}
				alt={alt}
				onClick={toggleModal}
				className="thumb-img"
			/>
			{/* Shows modal onClick */}
			{modal && (
				<div className="modal">
					<div onClick={toggleModal} className="overlay"></div>
					<div className="modal-content">
						{/* Full-Size Modal Image */}
						<img
							width={fullWidth}
							height={fullHeight}
							src={image}
							alt="Modal"
						/>
						{/* Back/Close Button (Depending on desktop or mobile view) */}
						<button className="close-modal" onClick={toggleModal}>
							<span className="close-text" aria-label="Back Button">
								<span>X</span>
							</span>
						</button>
					</div>
				</div>
			)}
		</>
	);
}

//		Default props
Modal.defaultProps = {
	thumbWidth: "400px",
	thumbHeight: "auto",
	fullWidth: "800px",
	fullHeight: "auto",
};
