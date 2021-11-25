import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

export const BlogPostList = () => {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            description
            title
            date(fromNow: false)
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;

  return (
    <>
      <h3>Latest Blog Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/${post.slug}`}>{post.frontmatter.title}</Link>
            {' - '}
            <small>posted {post.frontmatter.date}</small>
          </li>
        ))}
      </ul>
    </>
  );
};
