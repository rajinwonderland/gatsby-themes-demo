import styled from '@emotion/styled';
import { space, width, fontSize, color } from 'styled-system';
import get from 'lodash.get';

export const Box = styled('div')(space, fontSize, width, color);

export const Layout = styled(Box)({
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column'
});

export const Header = styled(Box)({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center'
});

Header.defaultProps = {
	as: 'header',
	px: 4,
	py: 3,
	color: 'white',
	bg: '#282a36'
};

export const Footer = styled(Header)({});

Footer.defaultProps = {
	as: 'footer',
	px: 4,
	py: 3,
	color: 'white',
	bg: '#282a36'
};

export const Main = styled(Box)({
	flex: '1 1 auto'
});

// color abstraction
//  high-level:
//    - text
//    - background
//    - primary
//    - secondary
//    - highlight
//  mid-level:
//    - link
//    - hover
//    - button
//      - text
//      - background
//      - hover
//        - text
//        - background
//    - pre
//      - text
//      - background
//    - code
//      - text
//      - background
//    - border
export const getColor = (theme, value, fallback) =>
	get(theme.colors, value, get(theme.colors, fallback, fallback));

export const ColorScheme = styled('div')(({ theme }) => ({
	color: getColor(theme, 'text', 'black'),
	backgroundColor: getColor(theme, 'background', 'white'),
	a: {
		color: getColor(theme, 'link', 'primary'),
		fontStyle: 'none',
		'&:hover': {
			color: getColor(theme, 'hover', 'secondary')
		}
	},
	hr: {
		borderColor: getColor(theme, 'border', 'muted')
	},
	code: {
		color: getColor(theme, 'code.text', 'secondary'),
		backgroundColor: getColor(theme, 'code.background', 'highlight'),
		padding: `4px 7px`,
		borderRadius: '0.3em',
		whiteSpace: 'normal',
		lineHeight: '1.5'
	}
	// blockquote
	// heading
}));

export const PreBlock = styled.div`
	background-color: #282a36 !important;
	padding: 20px;
	margin: 0 0 2em 0;
	border-radius: 5px;
	white-space: pre-line;
	word-wrap: break-word;
	overflow-wrap: break-word;
	react-highlight: {
		white-space: pre-line !important;
	}
`;
