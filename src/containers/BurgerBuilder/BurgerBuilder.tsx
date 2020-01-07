import React, { useState, useEffect } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { IngredientTypes, INGREDIENT_PRICES, IProps } from "../../types/types";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler";

const BurgerBuilder = ({ match, history }: IProps) => {
	const [ingredients, setIngredients] = useState<any>(null);
	const [totalPrice, setTotalPrice] = useState(3);
	const [purchaseable, setPurchaseable] = useState(false);
	const [purchasing, setPurchasing] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const disabledInfo = { ...ingredients };

	useEffect(() => {
		axios
			.get("/ingredients.json")
			.then(response => setIngredients(response.data))
			.catch(error => setError(error));
	}, []);

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
		const queryParams = [];
		for (const i in ingredients) {
			queryParams.push(
				encodeURIComponent(i) + "=" + encodeURIComponent(ingredients[i])
			);
		}
		queryParams.push("price=" + totalPrice);
		const queryString = queryParams.join("&");
		history.push({ pathname: "/checkout", search: "?" + queryString });
	};
	for (const key in disabledInfo) {
		disabledInfo[key] = disabledInfo[key] <= 0;
	}
	let orderSummary = (
		<>
			<Spinner />
		</>
	);
	let burger = error ? (
		<>
			<p style={{ textAlign: "center", fontSize: "3em" }}>
				Ingredients can't be loaded... the... monkey... ate them all,
				definitely not me..
				<span role="img" aria-label="sweat-smile">
					😅
				</span>
			</p>
		</>
	) : (
		<>
			<Spinner />
		</>
	);
	if (ingredients) {
		burger = (
			<>
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
		orderSummary = (
			<>
				<OrderSummary
					ingredients={ingredients}
					cancelOrder={modalCloseHandler}
					continueOrder={purchaseContinue}
					price={totalPrice}
				/>
			</>
		);
	}
	if (loading) {
		orderSummary = (
			<>
				<Spinner />
			</>
		);
	}
	return (
		<>
			<Modal isVisible={purchasing} modalClosed={modalCloseHandler}>
				{orderSummary}
			</Modal>
			{burger}
		</>
	);
};

export default withErrorHandler(BurgerBuilder, axios);
