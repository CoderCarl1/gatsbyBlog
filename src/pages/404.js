import * as React from 'react';
import { Link } from 'gatsby';
import { Layout, BlogLink } from '../components';
import '../styles/pageNotFound.scss';

export default function PageNotFound(props) {
  const query = graphql`
    query {
      file(relativePath: { eq: "images/pageNotFound.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    # query PageNotFoundImage {
    #   file(name: { eq: "pageNotFound" }) {
    #     childImageSharp {
    #       gatsbyImageData(placeholder: DOMINANT_COLOR)
    #     }
    #   }
    # }
  `;
  return (
    <Layout title="404 Page Not Found" description="The page was not found">
      <div className="bground-wrapper">
        <article className="not-found-page">
          <h1 className="page-title text-center uppercase">
            404 Page Not Found
          </h1>
          <p>
            Woops! The page you are looking for has been removed or relocated
          </p>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </article>
      </div>
    </Layout>
  );
}
