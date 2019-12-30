import React from "react";
import BuildControl from "./BuildControl/BuildControl";

interface IBuildControls {
	add: (e: string) => void;
	remove?: (e: string) => void;
}
const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" }
];

const BuildControls = ({ add, remove }: IBuildControls) => {
	return (
		<div className="build-controls">
			{controls.map(control => (
				<BuildControl
					add={add}
					label={control.label}
					key={control.label}
				/>
			))}
		</div>
	);
};

export default BuildControls;
