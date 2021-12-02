import * as React from 'react';
import { Seo, Navbar, Footer } from './';

import '../styles/global.scss';

export const Layout = ({
  // location,
  title = false,
  description = false,
  image = false,
  path = false,
  children,
}) => {
  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <div className="page-container">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
