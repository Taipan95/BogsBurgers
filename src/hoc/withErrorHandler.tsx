import React, { Component } from "react";
import Modal from "../components/UI/Modal";
import { AxiosInstance } from "axios";

export default function WithErrorHandler(
	WrappedComponent: any,
	axios: AxiosInstance
) {
	return class extends Component {
		state = {
			error: null
		};
		reqInterceptor: number | undefined;
		resInterceptor: number | undefined;
		// reqInterceptor = null;
		componentWillMount() {
			this.reqInterceptor = axios.interceptors.request.use(req => {
				this.setState({ error: null });
				return req;
			});
			this.resInterceptor = axios.interceptors.response.use(
				res => res,
				error => {
					this.setState({ error: error });
				}
			);
		}

		componentWillUnmount() {
			if (this.reqInterceptor) {
				axios.interceptors.request.eject(this.reqInterceptor);
			}
			if (this.resInterceptor) {
				axios.interceptors.response.eject(this.resInterceptor);
			}
		}
		errorConfirmed = () => {
			this.setState({ error: null });
		};
		render() {
			return (
				<>
					<Modal
						isVisible={this.state.error}
						modalClosed={this.errorConfirmed}
					>
						A monkey stuck its finger in an outlet and burned the
						whole place down RIP Monkers... PepeHands
					</Modal>
					<WrappedComponent {...this.props} />
				</>
			);
		}
	};
}
