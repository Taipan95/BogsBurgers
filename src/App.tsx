import React from "react";
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

export default function App() {
	return (
		<div>
			<Layout>
				<BurgerBuilder />
			</Layout>
		</div>
	);
}
