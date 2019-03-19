import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
				}
			}
		}
	`);
	return data.site.siteMetadata;
};

export const useSiteLinks = () => {
	const data = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					links {
						name
						path
					}
				}
			}
		}
	`);
	return data.site.siteMetadata.links;
};
