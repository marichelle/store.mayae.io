exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const albumTemplate = require.resolve(
    `./src/templates/AlbumTemplate/index.js`
  )
  const result = await graphql(`
    {
      allContentfulAlbum {
        totalCount
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const albums = result.data.allContentfulAlbum.edges

  albums.forEach(({ node: album }) => {
    createPage({
      path: `/albums/${album.slug}`,
      component: albumTemplate,
      context: {
        id: album.id,
      },
    })
  })
}
