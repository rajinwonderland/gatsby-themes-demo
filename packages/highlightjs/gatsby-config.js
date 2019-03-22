const path = require('path');
module.exports = (opts = {}) => {
	return {
		plugins: [
			{
				resolve: 'gatsby-mdx',
				options: {
					extensions: ['.mdx', '.md']
				}
			},
			'gatsby-plugin-emotion',
			'gatsby-plugin-react-helmet',
			{
				resolve: 'gatsby-plugin-compile-es6-packages',
				options: {
					modules: ['with-highlightjs']
				}
			},
			{
				resolve: `gatsby-source-filesystem`,
				options: {
					path: path.resolve(__dirname, `./content/assets`),
					name: `assets`
				}
			},
			{
				resolve: `gatsby-plugin-page-creator`,
				options: {
					path: require.resolve(__dirname, `src/pages`)
				}
			}
		],
		siteMetadata: {
			title: 'with-highlightjs',
			description: ''
		}
	};
};
