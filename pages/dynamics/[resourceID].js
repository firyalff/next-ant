import React from 'react';
import { withRouter } from 'next/router';
import Router from 'next/router';

class DynamicRoute extends React.Component {
	constructor(props) {
		super(props);
		this.state = { resourceID: null };
	}
	async componentDidMount() {
		const resourceID = Router.query.resourceID;
		this.setState({
			resourceID: resourceID
		});
		return { resourceID };
	}

	render() {
		return (
			'Page with dynamic routing for ' + this.state.resourceID + ' ID.'
		);
	}
}

export default withRouter(DynamicRoute);
