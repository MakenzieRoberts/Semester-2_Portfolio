// 		Project by: 	Makenzie Roberts
//		Date Written: 	August 15-19, 2022

import React from "react";
import { useState } from "react";
import "../styles/eightpointcalc.css";

/* ******************** Section 3 (<CODING>) - Calculator ******************* */

const EightPointCalc = () => {
	const initialValues = { numInput: "" };

	const [formValue, setFormValue] = useState(initialValues);
	const [answer, setAnswer] = useState(null);
	const [formErrors, setFormErrors] = useState({});
	const [errorMsg, setErrorMsg] = useState("");

	//		This function is called whenever a change is detected in the input.
	//		When it does, it sets the form value to the current input.
	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormValue({ ...formValue, [name]: value });
	};

	//		When form is submitted, this function calls setFormErrors to validate the input.
	const handleSubmit = (e) => {
		e.preventDefault();
		//		Receives a boolean
		setFormErrors(validate(formValue));
	};

	//		Empty Input Validation
	const validate = (value) => {
		let error = false;

		if (!value.numInput) {
			error = true;
			setErrorMsg("There's no input to round! 😉");
		} else if (isNaN(value.numInput)) {
			error = true;
			setErrorMsg("Numbers only, please! 😅");
		} else {
			roundNum(value);
		}

		return error;
	};

	// Main program: Round input to nearest factor of 8.
	const roundNum = (value) => {
		const num = value.numInput;
		const rounded = Math.round(num / 8) * 8;
		setAnswer(rounded);
		return answer;
	};

	return (
		<div className="eight-point-calc">
			<div id="calc-container">
				<p style={{ fontWeight: "bold" }}>
					8-Point Grid System
					<br /> Calculator
				</p>
				<form id="eight-point-form" onSubmit={handleSubmit}>
					<input
						id="num-input"
						name="numInput"
						type="text"
						placeholder="Enter number to round..."
						value={formValue.numInput}
						onChange={handleChange}
					/>
					<button id="submit-button" type="submit">
						SUBMIT
					</button>
				</form>
				<div id="output-area">
					<p id="output-text"> {formErrors ? errorMsg : answer} </p>
				</div>
			</div>
		</div>
	);
};

export default EightPointCalc;
