import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom"
import "./index.css";

function Header() {
	return (
		<nav className="Menu">
			<a href="/">
				<img src={Logo} className="logo" alt="IotFlix Logo" />
			</a>
		</nav>
	);
}
export default Header;
