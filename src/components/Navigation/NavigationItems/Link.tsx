import React from "react";
import { NavLink } from "react-router-dom";

interface IProps {
	linkTo: string;
	children?: any;
	isExactEnabled?: boolean;
}
export default function Link({ linkTo, children, isExactEnabled }: IProps) {
	return (
		<li className="link">
			<NavLink exact={isExactEnabled} to={linkTo}>
				{children}
			</NavLink>
		</li>
	);
}
