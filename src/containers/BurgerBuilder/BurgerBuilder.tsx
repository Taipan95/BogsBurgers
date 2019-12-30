import React, { useState, useEffect } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { INGREDIENT_PRICES, IngredientTypes } from "../../types/types";
interface IBurgerBuilder {
	props?: any;
}

const BurgerBuilder = ({ props }: IBurgerBuilder) => {
	const [ingredients, setIngredients] = useState<any>({});
	const [disabledInfo, setDisabledInfo] = useState<boolean | any>({
		...ingredients
	});
	const [totalPrice, setTotalPrice] = useState(4);

	useEffect(() => {
		for (const key in ingredients) {
			if (!ingredients[key]) {
				setIngredients((ingredients[key] = 0));
				setDisabledInfo((disabledInfo[key] = true));
			}
			if (ingredients[key] === 0) {
				setDisabledInfo((disabledInfo[key] = true));
			} else setDisabledInfo((disabledInfo[key] = false));
		}
	}, [disabledInfo]);

	const addIngredient = (type: IngredientTypes) => {
		let oldCount = ingredients[type];
		if (!oldCount) {
			oldCount = 0;
			setDisabledInfo((disabledInfo[type] = true));
		} else {
			setDisabledInfo((disabledInfo[type] = false));
		}
		const updatedCount = oldCount + 1;
		const updatedIngredients = { ...ingredients };
		updatedIngredients[type] = updatedCount;
		setIngredients(updatedIngredients);

		setTotalPrice(totalPrice + INGREDIENT_PRICES[type]);
	};
	const removeIngredient = (type: IngredientTypes) => {
		const oldCount = ingredients[type];

		if (!oldCount) {
			const updatedIngredients = { ...ingredients };
			updatedIngredients[type] = 0;
			setIngredients(updatedIngredients);
			return;
		} else {
			setDisabledInfo((disabledInfo[type] = false));
		}
		const updatedCount = oldCount - 1;

		const updatedIngredients = { ...ingredients };
		updatedIngredients[type] = updatedCount;
		setIngredients(updatedIngredients);

		setTotalPrice(totalPrice - INGREDIENT_PRICES[type]);
	};

	return (
		<Aux>
			<Burger ingredients={ingredients} />
			<BuildControls
				add={addIngredient}
				remove={removeIngredient}
				disabled={disabledInfo}
			/>
		</Aux>
	);
};
export default BurgerBuilder;
