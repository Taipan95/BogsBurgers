import React from "react";
import classNames from "classnames";
interface IProps {
	children?: any;
	type: any;
	onClick: () => void;
}
export default function Button({ children, type, onClick }: IProps) {
	const classes = classNames(
		"button",
		type === "danger" ? "danger" : type === "success" ? "success" : ""
	);
	return (
		<button className={classes} onClick={onClick}>
			{children}
		</button>
	);
}
