import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import { INGREDIENT_TYPES, IngredientTypes } from "../../../types/types";

interface IProps {
	add: (e: IngredientTypes) => void;
	remove: (e: IngredientTypes) => void;
	ordered: () => void;
	disabled?: any;
	price: number;
	order: boolean;
}
const controls = [
	{ label: "Salad", type: INGREDIENT_TYPES.salad },
	{ label: "Bacon", type: INGREDIENT_TYPES.bacon },
	{ label: "Cheese", type: INGREDIENT_TYPES.cheese },
	{ label: "Meat", type: INGREDIENT_TYPES.meat }
];

const BuildControls = ({
	add,
	remove,
	disabled,
	ordered,
	price,
	order
}: IProps) => {
	return (
		<div className="build-controls">
			<p>
				Total: <strong>{price.toFixed(2)}€</strong>
			</p>
			{controls.map(control => (
				<BuildControl
					add={add.bind(null, control.type)}
					remove={remove.bind(null, control.type)}
					label={control.label}
					key={control.label}
					disabled={disabled[control.type]}
				/>
			))}
			<button
				className="order-button"
				disabled={!order}
				onClick={ordered}
			>
				ORDER NEVER
			</button>
		</div>
	);
};

export default BuildControls;
