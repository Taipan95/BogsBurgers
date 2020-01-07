import React from "react";
interface IOrderListing {
	ingredients: any;
	price: number;
}
export default function OrderListing({ ingredients, price }: IOrderListing) {
	const extractedIngredients = [];
	for (const ingredientName in ingredients) {
		extractedIngredients.push({
			name: ingredientName,
			amount: ingredients[ingredientName]
		});
	}
	return (
		<div className="order-listing">
			<p>
				Ingredients:
				{extractedIngredients.map(ingred => {
					return (
						<span
							style={{
								textTransform: "capitalize",
								display: "inline-block",
								margin: "0 8px",
								border: "1px solid #ccc",
								padding: "5px"
							}}
							key={ingred.name}
						>
							{ingred.name} ({ingred.amount})
						</span>
					);
				})}
			</p>
			<p>
				Price: <strong>{price.toFixed(2)} €</strong>
			</p>
		</div>
	);
}
