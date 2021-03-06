import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import ICON from '../images/Logo80.png';

export function Seo(props) {
  const data = useStaticQuery(graphql`
    query getSiteMetadata {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
        }
      }
    }
  `);

  const defaults = data?.site?.siteMetadata;
  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const image = new URL(props.image || defaults.image, defaults.siteUrl);
  const url = new URL(props.path || '/', defaults.siteUrl);

  return (
    <Helmet>
      <title>{title}</title>
      <html lang="en" />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta name="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href={ICON}></link>
    </Helmet>
  );
}
