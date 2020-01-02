import axios from "axios";

const instance = axios.create({
	baseURL: "https://bogsburgers.firebaseio.com/"
});

export default instance;
