import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<nav className="header">
			<h1>Food Buzz</h1>
			<div className="menu">
				<a href="#">Home</a>
				<a href="#">Order</a>
				<a href="#">Services</a>
				<a href="#">About</a>
			</div>
		</nav>
	);
};

export default Header;
