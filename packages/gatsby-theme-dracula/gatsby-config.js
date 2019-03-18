module.exports = (opts = {}) => {
	const { mdxLayouts = {} } = opts;

	return {
		plugins: [
			{
				resolve: 'gatsby-mdx',
				options: {
					extensions: ['.mdx', '.md'],
					defaultLayouts: {
						default: require.resolve('./src/mdx-layout'),
						...mdxLayouts
					},
					mdxPlugins: [
						{
							resolve: 'gatsby-remark-prismjs',
							options: {
								showLineNumbers: true,
								noInlineHighlight: false
							}
						}
					]
				}
			},
			'gatsby-plugin-emotion',
			'gatsby-plugin-react-helmet',
			{
				resolve: 'gatsby-plugin-compile-es6-packages',
				options: {
					modules: ['gatsby-theme-dracula']
				}
			}
		],
		siteMetadata: {
			title: 'gatsby-theme-dracula',
			description: ''
		}
	};
};
