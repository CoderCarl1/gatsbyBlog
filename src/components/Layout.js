import * as React from 'react';
import { Seo, Navbar, BlogPostList } from './';

import '../styles/global.scss';

export const Layout = ({
  title = false,
  description = false,
  image = false,
  path = false,
  children,
}) => {
  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <div className="container">
        <Navbar />
        <main>{children}</main>
        <BlogPostList />
      </div>
    </>
  );
};

export default Layout;
