import React from "react";
import { useState } from "react";
import "../styles/eightpointcalc.css";

const EightPointCalc = () => {
	const initialValues = { numInput: "" };

	const [formValue, setFormValue] = useState(initialValues);
	const [answer, setAnswer] = useState(null);
	const [formErrors, setFormErrors] = useState({});
	const [errorMsg, setErrorMsg] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormValue({ ...formValue, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValue));
	};

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
