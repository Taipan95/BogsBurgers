import React from "react";
interface IProps {
	onClick: () => void;
}
export default function DrawerToggle({ onClick }: IProps) {
	return (
		<div className="drawer-toggle" onClick={onClick}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
