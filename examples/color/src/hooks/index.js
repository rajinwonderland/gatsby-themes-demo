import { graphql, useStaticQuery } from 'gatsby';
export const useSiteLinks = () => {
	const data = useStaticQuery(graphql`
		{
			allSitePage {
				edges {
					node {
						internalComponentName
						path
					}
				}
			}
		}
	`);
	return data.allSitePage.edges.map((l) => l.node);
};
