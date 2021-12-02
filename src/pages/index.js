import * as React from 'react';
// const { useEffect } = React;
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout, Image } from '../components';
// import '../styles/global.css';

export const query = graphql`
  query CarlImageQuery {
    file(name: { eq: "carl_pic" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function IndexPage({ data }) {
  // useEffect(() => {
  // setActive(props.location.pathname);
  // }, [location]);
  // console.log('props', JSON.stringify(props.location, null, 2));
  // }, []);
  return (
    <Layout>
      <div className="body-bground-wrapper">
        <h1 className="page-title uppercase"></h1>
      </div>
      <article></article>
      <Image ImageSrc={data.file} />
    </Layout>
  );
}
