import React from "react";
import { CSSProperties } from "react";
import "../styles/home.css";
const Home = () => {
	const typeStyle = { "--n": 53 };
	const bold = { fontWeight: "900" };
	// const glow = {
	// 	fontSize: "80px;",
	// 	color: "#fff",
	// 	textAlign: "center",
	// 	textShadow:
	// 		"0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff",
	// };

	return (
		<div>
			{/* <article>
				<h1>What is Lorem Ipsum? </h1>
				Hello this is home
			</article> */}
			<div className="home">
				<div className="typewriter">
					{/* 
                    Typewriter effect by Temani Afif
					https://codepen.io/t_afif/pen/ExXyXpB  
                    */}
					<span className="type" style={typeStyle}>
						Hi, I'm Makenzie!
						<br />
						<br />I have a passion for<span style={bold}> ART </span>&
						<span style={bold}> TECHNOLOGY </span>
					</span>
				</div>
			</div>
			{/* <div>
				content
				<br />
			</div>
			<div>
				content
				<br />
			</div>
			<div>
				content
				<br />
			</div>
			<div>
				content
				<br />
			</div> */}
		</div>
	);
};

export default Home;
