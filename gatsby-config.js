module.exports = {
  siteMetadata: {
    siteUrl: "https://www.codercarl.xyz",
    title: "Coder Carl - Portfolio",
    description:
      "A Blog and Portfolio site covering an assortment of webdevelopment topics and learnings",
    image: "src/images/carl_pic.jpg",
  },
  plugins: [
    `gatsby-plugin-sass`,
    // BEGIN header stuff
    "gatsby-plugin-react-helmet",
    // END header stuff
    // BEGIN mdx file processing
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    // This lets us reference their current filepaths
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
          },
        ],
        defaultLayouts: {
          posts: require.resolve("./src/components/LayoutPosts.js"),
        },
      },
    },
    // END mdx file processing
    // START images
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
