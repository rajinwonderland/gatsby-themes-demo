import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Header, Box, Layout, Main, Footer, theme } from 'gatsby-theme-dracula';
import { Link } from 'gatsby';

export default (props) => {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Header>
					<Box my="1rem" />
					<Box mx="auto">
						<img
							src="https://draculatheme.com/assets/img/icons/dracula.svg"
							width="168px"
							height="176px"
						/>
					</Box>
				</Header>
				<Main px={3} py={3} mx="auto" maxWidth={1024}>
					{props.children}
				</Main>
				<Footer py={4} fontSize={1}>
					<Box mx="auto" mx="auto">
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
								href="http://zenorocha.mit-license.org/"
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
