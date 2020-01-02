import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
interface IProps {}
export default function Logo(params: IProps) {
	return (
		<div className="logo">
			<img src={burgerLogo} alt="F" />
		</div>
	);
}
