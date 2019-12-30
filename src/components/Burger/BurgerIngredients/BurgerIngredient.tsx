import React from "react";

interface IBurgerIngredient {
	type: string;
}
const BurgerIngredient = ({ type }: IBurgerIngredient) => {
	let ingredient = null;
	switch (type) {
		case "bread-bottom":
			ingredient = <div className="bread-bottom"></div>;
			break;
		case "bread-top":
			ingredient = (
				<div className="bread-top">
					<div className="seeds-1"></div>
					<div className="seeds-2"></div>
				</div>
			);
			break;
		case "meat":
			ingredient = <div className="meat"></div>;
			break;
		case "cheese":
			ingredient = <div className="cheese"></div>;
			break;
		case "salad":
			ingredient = <div className="salad"></div>;
			break;
		case "bacon":
			ingredient = <div className="bacon"></div>;
			break;
		default:
			ingredient = null;
	}
	return ingredient;
};
export default BurgerIngredient;
