import React from "react";
import Button from "../../UI/Button";

interface IProps {
	ingredients: any;
	cancelOrder: () => void;
	continueOrder: () => void;
	price: number;
}
export default function OrderSummary({
	ingredients,
	cancelOrder,
	continueOrder,
	price
}: IProps) {
	const summary = Object.keys(ingredients).map(igKey => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
				{ingredients[igKey]}
			</li>
		);
	});
	return (
		<>
			<h3>Your Order</h3>
			<p>
				Young Burger Patty, AKA nobody wants beef nothing but vegans
				here!
			</p>
			<ul>{summary}</ul>
			<p>
				<strong>Total Price: {price.toFixed(2)}€</strong>
			</p>
			<p>Checkout =></p>
			<Button type="danger" onClick={cancelOrder}>
				CANCEL
			</Button>
			<Button type="success" onClick={continueOrder}>
				CONTINUE
			</Button>
		</>
	);
}
