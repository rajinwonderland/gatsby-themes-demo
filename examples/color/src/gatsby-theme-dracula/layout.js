import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import {
	Col,
	Row,
	Box,
	Layout,
	Main,
	Footer,
	theme
} from 'gatsby-theme-dracula';
import { Link } from 'gatsby';
import { useSiteLinks } from '../hooks';

export default (props) => {
	const links = useSiteLinks();
	console.log(links);
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Col width={1} bg={'#3c4556'}>
					<Box mx="auto" my="1rem">
						<img
							src="https://draculatheme.com/assets/img/icons/dracula.svg"
							width="168px"
							height="176px"
							alt="dracula-logo"
						/>
					</Box>
					<Box as="h1" mx="auto" fontSize="3rem" color="#50fa7b">
						Gatsby Theme Dracula
					</Box>
					<Row width={1}>
						{links.map((l) => (
							<Box as={Link} key={l.path} to={l.path} mx="auto" my="1rem">
								{l.internalComponentName}
							</Box>
						))}
					</Row>
				</Col>
				<Main px={3} py={3} mx="auto" maxWidth={1024}>
					{props.children}
				</Main>
				<Footer py={4} fontSize={1}>
					<Box mx="auto">
						<p className="credits">
							Made with <span className="love">♥</span> by{' '}
							<a
								className="green"
								href="https://github.com/rajinwonderland"
								target="blank">
								rajinwonderland
							</a>
							<br />
							under{' '}
							<a
								className="orange"
								href="http://rajinwonderland.mit-license.org/"
								target="blank">
								MIT license
							</a>
						</p>
					</Box>
				</Footer>
			</Layout>
		</ThemeProvider>
	);
};
