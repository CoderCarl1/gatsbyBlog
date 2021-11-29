import * as React from 'react';
import { Link } from 'gatsby';

export const BlogLink = ({ href, children }) => {
  return (
    <Link className="blog-link text-center" to={href}>
      {children}
    </Link>
  );
};

export default BlogLink;
