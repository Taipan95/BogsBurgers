import React from "react";

interface IBuildControl {
	label: string;
	add: () => void;
	remove: () => void;
	disabled?: boolean;
}
const BuildControl = ({ label, add, remove, disabled }: IBuildControl) => {
	return (
		<div className="build-control">
			<div className="label">{label}</div>
			<button className="less" onClick={remove} disabled={disabled}>
				Less
			</button>
			<button className="more" onClick={add}>
				More
			</button>
		</div>
	);
};

export default BuildControl;
