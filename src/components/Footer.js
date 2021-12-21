import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import '../styles/footer.scss';
import { dateProcessor } from '../utils/dateProcessor';

export const Footer = () => {
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
      file(name: { eq: "TreeWPersonRainbow" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, height: 350)
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;

  return (
    <footer className="footer">
      <div className="content-wrapper">
        <article className="latest-blogs">
          <h2 className="footer__title">Latest Blog Posts</h2>
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
        <nav className="footer__nav">
          <Link to="/" className="footer__nav__link link-nav">
            Home
          </Link>
          <Link to="/about" className="footer__nav__link link-nav">
            About
          </Link>
          <Link to="/blogs" className="footer__nav__link link-nav">
            Blogs
          </Link>
        </nav>
      </div>

      <div className="footer__image-wrapper">
        <GatsbyImage
          image={getImage(data.file)}
          alt="a silhouette of a person sitting on the ground while leaning on a tree. The person is wearing a rainbow coloured cap and jacket, along with blue pants."
        />
      </div>
    </footer>
  );
};

export default Footer;
