import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "../../components/UI/Button";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner";
import { IProps } from "../../types/types";
import Input from "../../components/UI/Input";
interface IContactData {
	ingredients: any;
	totalPrice: number;
	props: any;
}
export default function ContactData({
	ingredients,
	totalPrice,
	props
}: IContactData) {
	const [orderForm, setOrderForm] = useState<any>({
		name: {
			elementType: "input",
			elementConfig: {
				type: "text",
				placehoder: "Your Name"
			},
			value: "",
			label: "Name",
			validation: {
				required: true
			},
			valid: false
		},
		street: {
			elementType: "input",
			elementConfig: {
				type: "text",
				placehoder: "Street"
			},
			value: "",
			label: "Street",
			validation: {
				required: true
			},
			valid: false
		},
		zipCode: {
			elementType: "input",
			elementConfig: {
				type: "text",
				placehoder: "Postal Code"
			},
			value: "",
			label: "Postal Code",
			validation: {
				required: true
			},
			valid: false
		},
		country: {
			elementType: "input",
			elementConfig: {
				type: "text",
				placehoder: "Country"
			},
			value: "",
			label: "Country",
			validation: {
				required: true
			},
			valid: false
		},
		email: {
			elementType: "input",
			elementConfig: {
				type: "email",
				placehoder: "Your email"
			},
			value: "",
			label: "Email",
			validation: {
				required: true
			},
			valid: false
		},
		deliveryMethod: {
			elementType: "select",
			elementConfig: {
				options: [
					{ value: "pidgeonPost", displayValue: "Pidgeon Post" },
					{
						value: "lightSpeed",
						displayValue:
							"Speed of Light (Not responsible for undercooked burgers)"
					}
				]
			},
			value: "",
			label: "Delivery Method"
		}
	});

	const [loading, setLoading] = useState(false);

	const validationCheck = (value: string, rules: any) => {
		let isValid = false;
		if (rules.required) {
			isValid = value.trim() !== "";
		}
	};

	const onOrderSubmitted = (event: FormEvent) => {
		event.preventDefault();
		setLoading(true);
		let formData: any = {};
		for (const uniqueid in orderForm) {
			formData[uniqueid] = orderForm[uniqueid].value;
		}
		const order = {
			ingredients: ingredients,
			price: totalPrice.toFixed(2),
			orderData: formData
		};

		axios
			.post("/orders.json", order)
			.then(response => {
				setLoading(false);
				props.history.push("/");
				return response;
			})
			.catch(error => {
				setLoading(false);

				return error;
			});
	};

	const onInputChanged = (event: any, uid: string) => {
		const updatedOrderForm = { ...orderForm };
		const updatedFormElement = { ...updatedOrderForm[uid] };
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = validationCheck(
			updatedFormElement.value,
			updatedFormElement.validation
		);
		updatedOrderForm[uid] = updatedFormElement;
		setOrderForm(updatedOrderForm);
	};

	const formInputArray = [];
	for (const key in orderForm) {
		formInputArray.push({ id: key, config: orderForm[key] });
	}
	const extractedInputs = formInputArray.map(element => {
		return (
			<Input
				key={element.id}
				elementType={element.config.elementType}
				type={element.config.elementConfig.type}
				placeholder={element.config.elementConfig.placehoder}
				value={element.config.value}
				label={element.config.label}
				options={element.config.elementConfig.options}
				onChange={(event: ChangeEvent) =>
					onInputChanged(event, element.id)
				}
			/>
		);
	});

	let form;
	if (loading) {
		form = <Spinner />;
	} else {
		form = (
			<form onSubmit={onOrderSubmitted}>
				{extractedInputs}
				<Button type="success">ORDER</Button>
			</form>
		);
	}
	return (
		<div className="contact-data">
			<h4>Enter your contact data</h4>
			{form}
		</div>
	);
}
