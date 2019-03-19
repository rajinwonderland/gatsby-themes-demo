import { graphql, useStaticQuery } from 'gatsby';
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
