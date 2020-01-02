import React, { useState } from "react";
import classNames from "classnames";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
interface IProps {
	children: any;
}

const Layout = ({ children }: IProps) => {
	const [drawerVisible, setDrawerVisible] = useState(false);
	const closeSideDrawer = () => {
		setDrawerVisible(false);
	};

	const toggleSideDrawer = () => {
		setDrawerVisible(!drawerVisible);
	};
	const classes = classNames("content");
	return (
		<>
			<Toolbar menuClick={toggleSideDrawer} />
			<SideDrawer open={drawerVisible} closeDrawer={closeSideDrawer} />
			<main className={classes}>{children}</main>
		</>
	);
};

export default Layout;
