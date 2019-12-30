import React from "react";

interface IBuildControl {
	label: string;
	add: (e: string) => void;
}
const BuildControl = ({ label, add }: IBuildControl) => {
	return (
		<div className="build-control">
			<div className="label">{label}</div>
			<button onClick={add.bind(null, label)} className="less">
				Less
			</button>
			<button className="more">More</button>
		</div>
	);
};

export default BuildControl;
