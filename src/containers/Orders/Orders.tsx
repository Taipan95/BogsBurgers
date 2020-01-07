import React, { useEffect, useState } from "react";
import OrderListing from "./OrderListing";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler";

function Orders() {
	const [orders, setOrders] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (!orders) {
			axios
				.get("/orders.json")
				.then(resp => {
					const fetched = [];

					for (let key in resp.data) {
						fetched.push({ ...resp.data[key], id: key });
					}
					setLoading(false);
					setOrders(fetched);
				})
				.catch(err => {
					setLoading(false);
				});
		}
	}, [orders]);

	return (
		<div className="orders">
			{orders
				? orders.map((order: any) => {
						return (
							<OrderListing
								key={order.id}
								ingredients={order.ingredients}
								price={Number.parseFloat(order.price)}
							/>
						);
				  })
				: null}
		</div>
	);
}
export default withErrorHandler(Orders, axios);
