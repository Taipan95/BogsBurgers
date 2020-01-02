import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { IngredientTypes, INGREDIENT_PRICES } from "../../types/types";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

interface IProps {
	props?: any;
}

const BurgerBuilder = ({ props }: IProps) => {
	const [ingredients, setIngredients] = useState<any>({
		salad: 0,
		cheese: 0,
		meat: 0,
		bacon: 0
	});
	const [totalPrice, setTotalPrice] = useState(3);
	const [purchaseable, setPurchaseable] = useState(false);
	const [purchasing, setPurchasing] = useState(false);
	const disabledInfo = { ...ingredients };

	const updatePurchaseState = (ingredients: any) => {
		const sum: number = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey];
			})
			.reduce((s, el) => {
				return s + el;
			}, 0);

		const purchase = sum > 0;
		setPurchaseable(purchase);
	};

	const addIngredient = (type: IngredientTypes) => {
		const updatedState = { ...ingredients };

		updatedState[type] = ingredients[type] + 1;
		setIngredients(updatedState);

		setTotalPrice(totalPrice + INGREDIENT_PRICES[type]);
		updatePurchaseState(updatedState);
	};
	const removeIngredient = (type: IngredientTypes) => {
		const updatedState = { ...ingredients };
		const oldAmount = ingredients[type];
		if (oldAmount <= 0) {
			return;
		}

		updatedState[type] = oldAmount - 1;

		setIngredients(updatedState);
		setTotalPrice(totalPrice - INGREDIENT_PRICES[type]);
		updatePurchaseState(updatedState);
	};

	const purchaseHandler = () => {
		setPurchasing(true);
	};
	const modalCloseHandler = () => {
		setPurchasing(false);
	};

	const purchaseContinue = () => {
		alert("Bogdanoff, he did it.");
	};
	for (const key in disabledInfo) {
		disabledInfo[key] = disabledInfo[key] <= 0;
	}
	return (
		<>
			<Modal isVisible={purchasing} modalClosed={modalCloseHandler}>
				<OrderSummary
					ingredients={ingredients}
					cancelOrder={modalCloseHandler}
					continueOrder={purchaseContinue}
					price={totalPrice}
				/>
			</Modal>

			<Burger ingredients={ingredients} />
			<BuildControls
				add={addIngredient}
				remove={removeIngredient}
				disabled={disabledInfo}
				price={totalPrice}
				order={purchaseable}
				ordered={purchaseHandler}
			/>
		</>
	);
};

export default BurgerBuilder;
