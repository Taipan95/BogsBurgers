import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

interface IBurger {
	ingredients: any;
}

const Burger = ({ ingredients }: IBurger) => {
	let transformedIngredients = Object.keys(ingredients)
		.map((igKey: string) => {
			return [...Array(ingredients[igKey])].map((_, i) => (
				<BurgerIngredient key={igKey + i} type={igKey} />
			));
		})
		.reduce((previousValue, currentValue) => {
			return previousValue.concat(currentValue);
		}, []);

	if (transformedIngredients.length === 0) {
		transformedIngredients.push(
			<p key={Math.random()}>Start Adding Ingredients</p>
		);
	}
	return (
		<div className="burger">
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};
export default Burger;
