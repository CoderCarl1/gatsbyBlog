import * as React from 'react';
const { useEffect } = React;
import { StaticImage } from 'gatsby-plugin-image';
import { Layout } from '../components';
// import '../styles/global.css';

export default function IndexPage({ location }) {
  // useEffect(() => {
  // setActive(props.location.pathname);
  // }, [location]);
  // console.log('props', JSON.stringify(props.location, null, 2));
  // }, []);
  return (
    <Layout>
      <h1 className="page-title text-center uppercase">
        This is the IndexPage
      </h1>
    </Layout>
  );
}
