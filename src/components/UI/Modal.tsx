import React, { useRef, useEffect } from "react";
import Backdrop from "./Backdrop";

interface IProps {
	children: any;
	isVisible?: any;
	modalClosed?: any;
}
const Modal = ({ children, isVisible, modalClosed }: IProps) => {
	const didMountRef = useRef(false);
	useEffect(() => {
		if (didMountRef.current) {
		} else didMountRef.current = true;
	}, [children]);
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
};
export default React.memo(Modal);
