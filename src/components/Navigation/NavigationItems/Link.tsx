import React from "react";

interface IProps {
	linkTo: string;
	children?: any;
	active?: boolean;
}
export default function Link({ linkTo, children, active }: IProps) {
	return (
		<li className="link">
			<a href={linkTo} className={active ? "active" : ""}>
				{children}
			</a>
		</li>
	);
}
