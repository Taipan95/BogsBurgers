import React from "react";

interface IProps {
	isVisible?: any;
	onClick?: () => void;
}
export default function Backdrop({ isVisible, onClick }: IProps) {
	return isVisible ? (
		<div className="backdrop" onClick={onClick}></div>
	) : null;
}
