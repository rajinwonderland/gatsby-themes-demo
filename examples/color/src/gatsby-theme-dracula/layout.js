import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Header, Box, Layout, Main, Footer, theme } from 'gatsby-theme-dracula';
import { Link } from 'gatsby';

export default (props) => {
	return (
		<ThemeProvider theme={theme}>
			<Layout px={3} py={3} mx="auto" maxWidth={1024}>
				<Header>
					<Box as="h1" fontSize={2} style={{ fontWeight: '300' }}>
						Gatsby Theme Dracula
					</Box>
					<Box mx="auto" />
					<Box as={Link} to="/" color="inherit">
						Home
					</Box>
					<Box mx={1} />
					<Box as={Link} to="/getting-started" color="inherit">
						Demo
					</Box>
					<Box mx={1} />
					<Box as={Link} to="/freeform" color="inherit">
						Test
					</Box>
					<Box mx={1} />
				</Header>
				<Main>{props.children}</Main>
				<Footer py={4} fontSize={1}>
					<a href="https://github.com/rajinwonderland/starter-to-theme">
						GitHub
					</a>
					<Box mx={1} />
					<a href="https://github.com/rajinwonderland">
						Made by @rajinwonderland
					</a>
					<Box mx="auto" />
					<Box>© 2019 Rajinwonderland</Box>
				</Footer>
			</Layout>
		</ThemeProvider>
	);
};
