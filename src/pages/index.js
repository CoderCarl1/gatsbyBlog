import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout, Image, ImageHeader, CtaLink } from '../components';

export const query = graphql`
  query CarlImageQuery {
    allImageSharp {
      edges {
        node {
          gatsbyImageData
          fluid {
            originalName
          }
        }
      }
    }
  }
`;

export default function IndexPage(props) {
  const { data } = props;
  const carlImage = data.allImageSharp.edges.filter(
    (image) => image.node.fluid.originalName === 'carl_pic.jpg',
  )[0].node.gatsbyImageData;
  // const bannerImage = data.allImageSharp.edges.filter(
  //   (image) => image.node.fluid.originalName === 'doSomethingGreat.jpg',
  // )[0].node.gatsbyImageData;
  return (
    <Layout>
      {console.log('props in Index file', props)}
      <article>
        {/* <ImageHeader headerImageSrc={bannerImage} /> */}
        {/* <CtaLink /> */}
        <h1 className="page-title text-center uppercase">Welcome!</h1>
        <div className="grid-container">
          <section className="written-content">
            <p>
              <Image
                ImageSrc={carlImage}
                className="text-w-image-aside-r"
                height={150}
              />
              I am a junior fullstack developer who has spent the last 2 years
              finding his feet amidst a career change, moving states, and COVID
              (Blergh!).
            </p>
            <p>
              Outside of work I have been active in - improving my understanding
              of Aria and best practices for accessibility &amp; CSS. This is
              the main reason for creating this site. I want to share what I
              learn and help everyone grow.
            </p>
            <p>
              Over the last 6 months I have learnt and worked commercially with:
              <ul className="styled-list">
                <li>PHP + WordPress</li>
                <li>Liquid + Shopify 2.0</li>
                <li>React + nextJS</li>
                <li>(with a spattering of JQuery mixed in)</li>
              </ul>
            </p>
            <p>
              Reach out if you want to discuss anything more
              <br />
              <div className="mt-8 mb-8">
                <span className="font-heavy">phone:</span>{' '}
                <a className="link-growing-border" href="tel:0431631749">
                  0431 631 749
                </a>{' '}
                📲
                <br />
                <span className="font-heavy">email:</span>{' '}
                <a
                  className="link-growing-border"
                  href="mailto:carl.davidson@hotmail.com"
                >
                  carl.davidson@hotmail.com
                </a>{' '}
                📧
                <br />
                <span className="font-heavy">Linkedin:</span>{' '}
                <a
                  className="link-growing-border"
                  href="https://www.linkedin.com/in/carl-davidson/"
                  target="_blank"
                >
                  https://www.linkedin.com/in/carl-davidson/
                </a>
              </div>
            </p>
          </section>

          <aside className="tech-stack aside-resources">
            <h2 className="uppercase text-center">Current Tech Stack</h2>
            <ul className="styled-list">
              <li className="tech-stack__section">
                <p>
                  <span className="main-point title">Languages</span>
                  <ul className="tech-stack__columns">
                    <li>JavaScript</li>
                    <li>Ruby</li>
                    <li>Typescript</li>
                    <li>Bash</li>
                    <li>HTML</li>
                    <li>CSS, SCSS</li>
                    <li>PHP</li>
                    <li>Liquid</li>
                  </ul>
                </p>
              </li>
              <li className="tech-stack__section">
                <span className="main-point title">Databases</span>
                <ul className="tech-stack__columns">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>GraphQL</li>
                </ul>
              </li>
              <li className="tech-stack__section">
                <span className="main-point title">Frameworks/Libraries</span>
                <ul className="tech-stack__columns">
                  <li>Express</li>
                  <li>React</li>
                  <li>Node</li>
                  <li>Rails</li>
                  <li>Wordpress</li>
                  <li>Shopify</li>
                  <li>JQuery</li>
                  <li>Gatsby</li>
                </ul>
              </li>
              <li className="tech-stack__section">
                <span className="main-point title">Developer Tools</span>
                <ul className="tech-stack__columns">
                  <li>Accessibility (A11y)</li>
                  <li>Git | Github</li>
                  <li>Figma</li>
                  <li>AWS S3</li>
                  <li>Agile</li>
                  <li>Linux</li>
                  <li>TDD</li>
                </ul>
              </li>
              <li className="tech-stack__section">
                <span className="main-point title">Testing</span>
                <ul className="tech-stack__columns">
                  <li>Jest</li>
                  <li>Mocha</li>
                  <li>Storybook</li>
                </ul>
              </li>
            </ul>
          </aside>
        </div>
      </article>
    </Layout>
  );
}
