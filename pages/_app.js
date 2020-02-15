import React from 'react';
import App from 'next/app';
import { Layout, Breadcrumb } from 'antd';
import OrganismSideNav from '../components/organisms/nav/sideNav';

import 'antd/dist/antd.css';
import OrganismTopNav from '../components/organisms/nav/topNav';

class MyApp extends App {
	constructor(props) {
		super(props);
	}
	static async getInitialProps() {
		return {};
	}
	render() {
		const { Component, pageProps } = this.props;

		return (
			<Layout>
				<OrganismTopNav />
				<Layout>
					<OrganismSideNav />
					<Layout style={{ padding: '0 24px 24px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
						</Breadcrumb>
						<Layout.Content
							style={{
								background: '#fff',
								padding: 24,
								margin: 0,
								minHeight: 280
							}}
						>
							<Component {...pageProps} />
						</Layout.Content>
					</Layout>
				</Layout>
			</Layout>
		);
	}
}

export default MyApp;
