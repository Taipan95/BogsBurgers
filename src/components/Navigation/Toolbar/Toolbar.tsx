import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Button from "../../UI/Button";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
interface IProps {
	menuClick: () => void;
}

export default function Toolbar({ menuClick }: IProps) {
	return (
		<header className="toolbar">
			{/* <Button type="" onClick={menuClick}>
				MENU
			</Button> */}
			<DrawerToggle onClick={menuClick} />
			<div className="logo">
				<Logo />
			</div>
			<nav className="desktop-only">
				<NavigationItems />
			</nav>
		</header>
	);
}
