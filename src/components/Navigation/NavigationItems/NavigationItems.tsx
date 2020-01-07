import React from "react";
import Link from "./Link";
interface IProps {}
export default function NavigationItems(props: IProps) {
	return (
		<ul className="navigation-items">
			<Link isExactEnabled linkTo="/">
				Burger Builder
			</Link>
			<Link linkTo="/orders">Orders</Link>
		</ul>
	);
}
