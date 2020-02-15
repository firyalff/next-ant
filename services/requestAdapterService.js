import axios from 'axios';
import cookie from 'js-cookie';

class RequestAdapterService {
	constructor() {
		this.requestHeader = {
			'Content-Type': 'application/json'
		};

		const authToken = cookie.get('authorization');

		this.requestHeader['Authorization'] = `Bearer ${authToken}`;
	}

	async sendGetRequest(URL, parameters, rawRequest = false) {
		if (!rawRequest) {
			URL = process.env.API_ENDPOINT + URL;
		}
		let response = await axios({
			url: URL,
			method: 'GET',
			headers: this.requestHeader,
			params: parameters
		});

		return response;
	}

	async sendPostRequest(URL, requestBody, rawRequest = false) {
		if (!rawRequest) {
			URL = process.env.API_ENDPOINT + URL;
		}

		let response = await axios.post(URL, requestBody, {
			headers: this.requestHeader
		});

		return response;
	}

	async sendPutRequest(URL, requestBody, rawRequest = false) {
		if (!rawRequest) {
			URL = process.env.API_ENDPOINT + URL;
		}
		let response = await axios(URL, {
			method: 'PUT',
			headers: this.requestHeader,
			data: requestBody
		});
		return response;
	}

	static parseQueryString() {
		if (typeof window !== 'undefined') {
			var query = {};
			var pairs = (window.location.search[0] === '?'
				? window.location.search.substr(1)
				: window.location.search
			).split('&');
			for (var i = 0; i < pairs.length; i++) {
				var pair = pairs[i].split('=');
				query[decodeURIComponent(pair[0])] = decodeURIComponent(
					pair[1] || ''
				);
			}
			return query;
		} else {
			console.warn('window object is not available');
			return {};
		}
	}
}

export default RequestAdapterService;
