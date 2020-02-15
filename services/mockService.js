import RequestAdapterService from './requestAdapterService';

class AddressService extends RequestAdapterService {
	async getMockData() {
		try {
			const mockData = await super.sendGetRequest(
				`http://www.mocky.io/v2/5e475038330000aa7a026788`,
				{},
				true
			);
			return mockData.data;
		} catch (error) {
			const errMessage =
				error.response.data.message || 'Internal server error';
			throw new Error(errMessage);
		}
	}
}

export default AddressService;
