const byPassCors = process.env.REACT_APP_BY_PASS_CORS || "";
const API = "https://asia-southeast2-sejutacita-app.cloudfunctions.net";

interface FetchProps {
	path: string;
	options: any;
}

class BaseService {
	async fetch({ path, options }: FetchProps) {
		const url = byPassCors + API + path;

		options.headers = {
			"Content-Type": "application/json",
			origin: "x-requested-with",
		};

		const response = await fetch(url, options);

		return await response.json();
	}
}

export default BaseService;
