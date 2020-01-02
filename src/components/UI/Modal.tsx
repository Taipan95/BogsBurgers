import React from "react";
import Backdrop from "./Backdrop";

interface IProps {
	children: any;
	isVisible: any;
	modalClosed: any;
}
export default function Modal({ children, isVisible, modalClosed }: IProps) {
	return (
		<>
			<Backdrop isVisible={isVisible} onClick={modalClosed} />
			<div
				className="modal"
				style={{
					transform: isVisible
						? "translateY(0)"
						: "translateY(-100vh)",
					opacity: isVisible ? "1" : "0"
				}}
			>
				{children}
			</div>
		</>
	);
}
