import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Layout } from '../components';

// export const query = graphql`
//   query cocktailQuery {
//     file(name: { eq: "cocktail" }) {
//       childImageSharp {
//         gatsbyImageData(placeholder: DOMINANT_COLOR)
//       }
//     }
//   }
// `;

export default function AboutPage({ data }) {
  return (
    <Layout
      title="About this Site"
      description="more information about this site"
    >
      {/* <GatsbyImage
        image={getImage(data.file)}
        alt="a cocktail set inside an elaborate floral arrangement with dry ice mist curling around it"
      /> */}
      <h1 className="page-title text-center uppercase">
        This is the About Page
      </h1>
    </Layout>
  );
}
