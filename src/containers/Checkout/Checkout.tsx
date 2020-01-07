import React, { useState, useEffect } from "react";
import { IProps } from "../../types/types";
import CheckoutSummary from "../../components/Order/CheckoutSummary";
import { Route } from "react-router";
import ContactData from "./ContactData";

interface ICheckout extends IProps {
	history: any;
	match: any;
	location: any;
}

export default function Checkout({ history, match, location }: ICheckout) {
	const props = { history, match, location };
	const [ingredients, setIngredients] = useState<any>();
	const [totalPrice, setTotalPrice] = useState(3.0);
	useEffect(() => {
		if (!ingredients) {
			const query: any = new URLSearchParams(location.search);
			const ingredients: any = {};
			let price = 0;
			for (let param of query.entries()) {
				if (param[0] === "price") {
					price = +param[1];
				} else {
					ingredients[param[0]] = +param[1];
				}
			}
			setTotalPrice(price);
			setIngredients(ingredients);
		}
	}, [location.search, ingredients]);

	const onCheckoutCanceled = () => {
		history.goBack();
	};

	const onCheckoutContinued = () => {
		history.replace("/checkout/contact-data");
	};
	return (
		<div>
			<CheckoutSummary
				ingredients={ingredients}
				onCancel={onCheckoutCanceled}
				onContinue={onCheckoutContinued}
			/>
			<Route
				path={match.path + "/contact-data"}
				render={() => (
					<ContactData
						ingredients={ingredients}
						totalPrice={totalPrice}
						props={props}
					/>
				)}
			/>
		</div>
	);
}
