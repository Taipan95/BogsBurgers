import React, { useState } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

import BuildControls from "../../components/Burger/BuildControls/BuildControls";
interface IBurgerBuilder {
	props?: any;
}
const BurgerBuilder = ({ props }: IBurgerBuilder) => {
	const [ingredients, setIngredients] = useState<any>({ cheese: 3 });

	const addIngredient = (type: string) => {
		const oldCount = ingredients[type];
		const updatedCount = oldCount + 1;
		setIngredients((prevState: any) => {
			console.log(prevState);
		});
	};
	const removeIngredient = (type: string) => {};
	return (
		<Aux>
			<Burger ingredients={ingredients} />
			<BuildControls add={addIngredient} />
		</Aux>
	);
};
export default BurgerBuilder;
