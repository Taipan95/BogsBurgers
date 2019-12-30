import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import { INGREDIENT_TYPES, IngredientTypes } from "../../../types/types";

interface IBuildControls {
	add: (e: IngredientTypes) => void;
	remove: (e: IngredientTypes) => void;
	disabled: any;
}
const controls = [
	{ label: "Salad", type: INGREDIENT_TYPES.salad },
	{ label: "Bacon", type: INGREDIENT_TYPES.bacon },
	{ label: "Cheese", type: INGREDIENT_TYPES.cheese },
	{ label: "Meat", type: INGREDIENT_TYPES.meat }
];

const BuildControls = ({ add, remove, disabled }: IBuildControls) => {
	return (
		<div className="build-controls">
			{controls.map(control => (
				<BuildControl
					add={add.bind(null, control.type)}
					remove={remove.bind(null, control.type)}
					label={control.label}
					key={control.label}
					disabled={disabled[control.type]}
				/>
			))}
		</div>
	);
};

export default BuildControls;
