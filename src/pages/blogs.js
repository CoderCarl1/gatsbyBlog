import * as React from 'react';
const { useEffect, useState } = React;
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Layout, BlogLink } from '../components';
import '../styles/blogsPage.scss';

export default function blogs(props) {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    setPosts(
      Object.entries(props.pageResources.staticQueryResults)
        .filter((arr) => arr[1].data.allMdx !== undefined)[0][1]
        .data.allMdx.nodes.reduce(function (r, currNode) {
          r[currNode.frontmatter.tag] = r[currNode.frontmatter.tag] || [];
          r[currNode.frontmatter.tag].push(currNode);
          return r;
        }, Object.create(null)),
    );
  }, []);
  return (
    <Layout title="My Blogs" description="A list and Links to each of my blogs">
      <article className="blog-link__page">
        <p className="page-title text-center uppercase">WORK IN PROGRESS </p>
        <h1 className="page-title text-center uppercase">Blogs / Articles</h1>
        <p>
          This is a placeholder page while I write up some blogs properly and
          was a way to test the MDX processing{' '}
        </p>
        {Object.keys(posts)
          .sort()
          .map((subject) => {
            return (
              <section className="blogs__topic">
                <h2 className="blogs__topic__title text-center uppercase">
                  {subject}
                </h2>
                <div className="blog-link__page__list">
                  {posts[subject].map((post) => (
                    <BlogLink href={`/${post.slug}`}>
                      {post.frontmatter.title}
                    </BlogLink>
                  ))}
                </div>
              </section>
            );
          })}
      </article>
    </Layout>
  );
}
