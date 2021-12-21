import * as React from 'react';
import { Link } from 'gatsby';
import { Layout } from '.';
import { MDXProvider } from '@mdx-js/react';
import { StaticImage } from 'gatsby-plugin-image';

export const LayoutPosts = ({ children, pageContext }) => {
  const { title, description } = pageContext.frontmatter;
  const shortcodes = { StaticImage };
  return (
    <Layout title={title} description={description}>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
      <Link to="/blogs" style={{ padding: '0 2em' }}>
        {' '}
        &larr; All Blogs
      </Link>
    </Layout>
  );
};

export default LayoutPosts;
