import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop";
import classNames from "classnames";

interface IProps {
	closeDrawer: () => void;
	open: boolean;
}

export default function SideDrawer({ closeDrawer, open }: IProps) {
	const classes = classNames("side-drawer", open ? "open" : "close");
	return (
		<>
			<Backdrop isVisible={open} onClick={closeDrawer} />
			<div className={classes}>
				<div className="logo">
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</>
	);
}
