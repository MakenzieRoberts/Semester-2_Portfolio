import React from "react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/eightpointcalc.css";

const EightPointCalc = () => {
	const initialValues = { numInput: "" };

	const [formValue, setFormValue] = useState(initialValues);
	const [answer, setAnswer] = useState(null);
	const [formErrors, setFormErrors] = useState({});
	const [errorMsg, setErrorMsg] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log("e.target", e.target);

		setFormValue({ ...formValue, [name]: value });

		console.log(formValue);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValue));
	};

	const validate = (value) => {
		const errorMsg = {};
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

	const roundNum = (value) => {
		const num = value.numInput;
		const rounded = Math.round(num / 8) * 8;
		setAnswer(rounded);
		return answer;
	};

	return (
		<div className="eight-point-calc">
			<div id="calc-container">
				<p>8-Point Grid System Calculator</p>
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
						Submit
					</button>
				</form>
				<div id="output-area">
					<p id="output-text"> {formErrors ? errorMsg : answer}</p>
				</div>
			</div>
		</div>
	);
};

export default EightPointCalc;