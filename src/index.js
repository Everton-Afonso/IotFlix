import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import Videos from "./pages/Videos";
import { Redirect , Switch, Route, BrowserRouter } from 'react-router-dom';
import "./index.css";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Home} exact/>
			<Route path="/categorias" component={Categorias}/>
			<Route path="/videos" component={Videos}/>
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
