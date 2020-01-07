import React from "react";
import Layout from "./hoc/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Route, Switch } from "react-router";
import Orders from "./containers/Orders/Orders";

export default function App() {
	return (
		<div>
			<Layout>
				<Switch>
					<Route component={Checkout} path="/checkout" />
					<Route component={Orders} path="/orders" />
					<Route component={BurgerBuilder} path="/" exact />
				</Switch>
			</Layout>
		</div>
	);
}
