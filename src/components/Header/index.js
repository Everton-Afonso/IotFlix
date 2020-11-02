import React from "react";
import Logo from "../../assets/logo.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./index.css";

function Header() {
	return (
		<nav className="Menu">
			<a href="/">
				<img src={Logo} className="logo" alt="IotFlix Logo" />
			</a>
			<Button variant="danger">
				<Link to="/Categorias" className="link">Login</Link>
			</Button>
		</nav>
	);
}
export default Header;
