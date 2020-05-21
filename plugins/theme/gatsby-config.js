module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blocksData`,
        path: './src/templates/blocksData'
      }
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`
      }
    },{
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "yml",
      },
    },
    `gatsby-transformer-remark`
  ]
}