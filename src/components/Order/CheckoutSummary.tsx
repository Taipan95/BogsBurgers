// import { IProps } from "../../types/types";
import React from "react";
import Burger from "../Burger/Burger";
import Button from "../UI/Button";

interface ICheckoutSummary {
	ingredients?: any;
	onCancel: () => void;
	onContinue: () => void;
}

export default function CheckoutSummary({
	ingredients,
	onCancel,
	onContinue
}: ICheckoutSummary) {
	return (
		<>
			<div className="checkout-summary">
				<h1>
					We hope to never see you again! <br /> GO VEGAN!
				</h1>
				<div style={{ width: "100%", margin: "auto" }}>
					<Burger ingredients={ingredients} />
				</div>
				<Button type={"danger"} onClick={onCancel}>
					CANCEL
				</Button>
				<Button type={"success"} onClick={onContinue}>
					CONTINUE
				</Button>
			</div>
		</>
	);
}
