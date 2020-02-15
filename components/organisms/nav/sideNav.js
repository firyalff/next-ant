import React from 'react';
import Link from 'next/link';

import { Layout, Menu, Icon } from 'antd';

class OrganismSideNav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Layout.Sider width={200} style={{ background: '#fff' }}>
				<Menu
					mode="inline"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					style={{ height: '100%', borderRight: 0 }}
				>
					<Menu.SubMenu
						key="sub1"
						title={
							<span>
								<Icon type="user" />
								Dynamic routing
							</span>
						}
					>
						<Menu.Item key="1">
							<Link href="/dynamics/something">
								<a>Something as ID</a>
							</Link>
						</Menu.Item>
						<Menu.Item key="2">
							<Link href="/dynamics/somewhat">
								<a>Somewhat as ID</a>
							</Link>
						</Menu.Item>
						<Menu.Item key="3">
							<Link href="/dynamics/sometimes">
								<a>Sometimes as ID</a>
							</Link>
						</Menu.Item>
					</Menu.SubMenu>
					<Menu.Item key="4">
						<Link href="/request-sample">
							<a>Request Sample Page</a>
						</Link>
					</Menu.Item>
				</Menu>
			</Layout.Sider>
		);
	}
}

export default OrganismSideNav;
