import React from "react";
import Aux from "../../hoc/Aux";
import classNames from "classnames";
interface ILayoutProps {
	children: any;
}

const layout = ({ children }: ILayoutProps) => {
	const classes = classNames("content");
	return (
		<Aux>
			<div>Toolbar, SideDrawer, Backdrop</div>
			<main className={classes}>{children}</main>
		</Aux>
	);
};

export default layout;
