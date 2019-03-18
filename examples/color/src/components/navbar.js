import React from 'react';
import { Header, Box } from 'gatsby-theme-dracula';
import { Link } from 'gatsby';

const Navbar = () => (
	<Header bg={'#282a36'} fontWeight={'300'}>
		<Box as="h1" color={'#50fa7b'} fontSize={2}>
			Gatsby Theme Dracula
		</Box>
		<Box mx="auto" />
		<Box as={Link} to="/" color="inherit">
			Home
		</Box>
		<Box mx={1} />
		<Box as={Link} to="/freeform" color="inherit">
			Demo
		</Box>
		<Box mx={1} />
	</Header>
);

export default Navbar;
