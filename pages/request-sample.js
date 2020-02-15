import React from 'react';
import { message, Typography } from 'antd';
import MockService from './../services/mockService';

class AntSample extends React.Component {
	constructor(props) {
		super(props);

		this.mockService = new MockService();
		this.state = {
			messageFromMock: 'Please wait while fetching data...'
		};
	}
	fetchMockData = async () => {
		try {
			const mockData = this.mockService.getMockData();
			return mockData;
		} catch (error) {
			message(error);
		}
	};

	async componentDidMount() {
		const mockData = await this.fetchMockData();
		await this.setState({
			messageFromMock: mockData.message
		});
	}

	render() {
		return (
			<div>
				This is the message from backend service :<br />
				<Typography.Text code>
					{this.state.messageFromMock}
				</Typography.Text>
			</div>
		);
	}
}

export default AntSample;
