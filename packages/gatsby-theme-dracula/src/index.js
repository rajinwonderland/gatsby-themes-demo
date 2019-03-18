import React from 'react';
import { Helmet } from 'react-helmet';
import { Global } from '@emotion/core';
import { ThemeProvider, withTheme } from 'emotion-theming';
import get from 'lodash.get';
import merge from 'lodash.merge';
import { useSiteMetadata } from './hooks';
// theming
import { ColorScheme, PreBlock } from './components';
import modern from '@styled-system/typography/modern';
import Layout from './layout';
import { MDXProvider } from '@mdx-js/tag';
import { Code } from './code';
import { preToCodeBlock } from 'mdx-utils';

const components = {
	pre: (preProps) => {
		const props = preToCodeBlock(preProps);
		// if there's a codeString and some props, we passed the test
		if (props['react-live']) {
			return <Code {...props} />;
		} else {
			return (
				<PreBlock>
					<pre {...preProps} />
				</PreBlock>
			);
		}
	}
};
export const colors = {
	text: '#f8f8f2',
	background: '#3c4556',
	primary: '#00bcd4',
	secondary: '#50fa7b',
	highlight: '#8be9fd50',
	muted: '#6272a4',
	link: 'rgb(102, 217, 239)',
	black: '#21222c',
	blue: '#bd93f9',
	brightBlack: '#6272a4',
	brightBlue: '#d6acff',
	brightCyan: '#a4ffff',
	brightGreen: '#69ff94',
	brightMagenta: '#ff92df',
	brightRed: '#ff6e6e',
	brightWhite: '#ffffff',
	brightYellow: '#ffffa5',
	cyan: '#8be9fd',
	green: '#50fa7b',
	magenta: '#ff79c6',
	red: '#ff5555',
	white: '#f8f8f2',
	yellow: '#f1fa8c',
	code: {
		background: '#282a36',
		variable: '#fff',
		attribute: '#50fa7b',
		definition: '#50fa7b',
		keyword: '#ff79c6',
		operator: '#ff79c6',
		property: '#66d9ef',
		number: '#bd93f9',
		string: '#f1fa8c',
		comment: '#6272a4',
		meta: '#f8f8f2',
		tag: '#ff79c6'
	}
};

const fonts = {
	body: { fontFamily: 'Inter, system-ui, sans-serif' },
	monospace: 'Fira Code, monospace'
};
const typography = {
	...modern,

	h1: {
		fontWeight: '300'
	},
	h2: {
		fontWeight: '200'
	},
	h3: {
		fontWeight: '300'
	},
	...fonts,
	scoped: true
};

export const theme = (userTheme) =>
	merge(
		{
			fonts,
			colors,
			typography
		},
		userTheme
	);
const styles = (theme) => ({
	'*': { boxSizing: 'border-box' },
	body: {
		margin: 0,
		color: get(theme, 'colors.text', '#f8f8f2'),
		backgroundColor: get(theme, 'colors.background', '#191a21'),
		...(theme.typography.body || {})
	},
	a: {
		color: get(theme, 'colors.link'),
		fontStyle: 'none'
	}
});

const GoogleFonts = withTheme((props) => {
	const { googleFonts } = props.theme.typography || {};
	if (!googleFonts) return false;
	return (
		<Helmet>
			<link rel="stylesheet" href={googleFonts} />
		</Helmet>
	);
});

const Root = (props) => {
	const { title, description } = useSiteMetadata();

	return (
		<Layout {...props}>
			<ThemeProvider theme={theme}>
				<Helmet>
					<title>{title}</title>
					<meta name="description" content={description} />
				</Helmet>
				<GoogleFonts />
				<Global styles={styles} />
				<ColorScheme>{props.children}</ColorScheme>
			</ThemeProvider>
		</Layout>
	);
};

export const wrapPageElement = ({ element, props }) => (
	<Root {...props}>{element}</Root>
);

export const wrapRootElement = ({ element }) => (
	<MDXProvider components={components}>{element}</MDXProvider>
);

export * from './components';
export * from './code';
