import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Layout, Image, ImageHeader } from '../components';
// import {} from '../components';

export const query = graphql`
  query HeaderImageQuery {
    file(name: { eq: "writingHand" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR, height: 300)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <Layout
      title="About this Site"
      description="more information about this site"
    >
      <article>
        <ImageHeader headerImageSrc={data.file} />

        <h1 className="page-title text-center uppercase">What this Site is</h1>
        <div className="grid-container">
          <section className="">
            {/* <StaticImage
              src="../images/carl_pic.jpg"
              alt=""
              height={300}
              width={300}
            /> */}
            <h2>This site is:</h2>
            <ul className="styled-list">
              <li>A Dumping Ground for my thoughts</li>
              <li>
                A Place for me to expand on my css and Accesisbility knowledge
              </li>
              <li>
                knowledge that I can share with others because <em>anyone</em>{' '}
                on the web development journey needs any and all help they can
                get
              </li>
            </ul>
          </section>
          <section>
            <h2 className="page-subtitle uppercase font-light">
              Tech used in making this site
            </h2>
            <div>
              <p>This is a site is created with</p>
              <ul className="styled-list">
                <li>
                  <span className="main-point">Framework - </span>
                  <a
                    href="https://www.gatsbyjs.com/docs/"
                    className="external-link link-growing-border"
                    target="_blank"
                  >
                    <span className="italic">Gatsby</span>
                  </a>
                </li>
                <li>
                  <span className="main-point">Library - </span>
                  <a
                    href="https://reactjs.org/"
                    className="external-link link-growing-border"
                    target="_blank"
                  >
                    <span className="italic">React</span>
                  </a>
                </li>
                <li>
                  <span className="main-point">Blogging Resources - </span>
                  <span className="italic">
                    MDX plugins through Gatsby magic.
                  </span>
                </li>
                <li>
                  <span className="main-point">Styling - </span>{' '}
                  <span className="italic">SCSS</span>
                </li>
                <li>
                  <span className="main-point">Initial Designs - </span>{' '}
                  <a
                    href="https://www.figma.com/"
                    className="external-link link-growing-border"
                    target="_blank"
                  >
                    <span className="italic"> Figma </span>
                  </a>
                </li>
                <li>
                  <span className="main-point">Accessibility in mind.</span>
                  <aside className="aside-resources">
                    <small>More info on various A11y topics at:</small>
                    <ul className="styled-list">
                      <li className="dot-points">
                        <a href="https://www.a11yproject.com/" target="_blank">
                          https://www.a11yproject.com/
                        </a>
                      </li>
                      <li className="dot-points">
                        <a href="https://www.w3.org/WAI/" target="_blank">
                          The Web Accessibility Initiative (WAI)
                        </a>
                      </li>
                    </ul>
                  </aside>
                </li>
              </ul>
              For more specifics, feel free to refer to the{' '}
              <a
                href="https://github.com/CoderCarl1/gatsbyBlog"
                target="_blank"
              >
                github Repo
              </a>
              .
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
