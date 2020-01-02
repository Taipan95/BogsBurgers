import React from "react";
import Link from "./Link";
interface IProps {}
export default function NavigationItems(props: IProps) {
	return (
		<ul className="navigation-items">
			<Link linkTo="/" active>
				Burger Builder
			</Link>
			<Link linkTo="/">Checkout</Link>
		</ul>
	);
}
