import React, { ChangeEvent } from "react";
interface IInputProps {
	elementType: string;
	value: any;
	type: string;
	label: string;
	placeholder: string;
	options?: any[];
	onChange: (e: ChangeEvent) => void;
}
export default function Input({
	type,
	elementType,
	value,
	placeholder,
	label,
	options,
	onChange
}: IInputProps) {
	let inputElement = null;
	switch (elementType) {
		case "input":
			inputElement = (
				<input
					className="input-element"
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			);
			break;
		case "textarea":
			inputElement = (
				<textarea
					className="input-element"
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			);
			break;
		case "select": {
			inputElement = (
				<select
					className="input-element"
					value={value}
					onChange={onChange}
				>
					{options
						? options.map(option => (
								<option key={option.value} value={option.value}>
									{option.displayValue}
								</option>
						  ))
						: null}
				</select>
			);
			break;
		}
		default:
			inputElement = (
				<input
					className="input-element"
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			);
	}
	return (
		<div className="input">
			<label>{label}</label>
			{inputElement}
		</div>
	);
}
