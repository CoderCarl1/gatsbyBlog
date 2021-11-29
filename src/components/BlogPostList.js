import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import '../styles/blogPostList.scss';
import { dateProcessor } from '../utils/dateProcessor';

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
            tag
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;

  return (
    <footer className="footer">
      <article className="latest-blogs">
        <h3 className="footer__title">Latest Blog Posts</h3>
        <ul className="latest-blogs__list">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                className="latest-blogs__list__item link-growing-border"
                to={`/${post.slug}`}
              >
                {post.frontmatter.title}
              </Link>
              <span className="mob-hidden">
                {' - '}
                <small>posted {dateProcessor(post.frontmatter.date)}</small>
              </span>
            </li>
          ))}
        </ul>
      </article>
    </footer>
  );
};
