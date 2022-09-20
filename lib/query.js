export const PRODUCT_QUERY = `
query results($limit: Int, $start: Int, $sort: [String], $search: String! ){
 products (pagination: { limit: $limit , start: $start}, sort: $sort, filters: { title: { containsi: "" }, or: { artist: {artist_name:{ contains: $search }}}}){ 
    data {
      attributes {
        createdAt
        title
        description
        slug
        price
        artist {
          data {
            attributes {
              artist_name
            }
          }
        }
        release
        image {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
    meta {
      pagination {
        page
        pageSize
        pageCount
        total
      }
    }
  }
}
`;

export const GET_PRODUCT_QUERY = `
  query getProduct($slug: String!) {
  products( filters: { slug: { eq: $slug } }) {
    data {
      attributes {
        createdAt
        title
        description
        slug
        price
        release
        format
        label
        image {
          data {
            attributes {
              formats
            }
          }
        }
        artist {
          data {
            attributes {
              artist_name
              products {
                data {
                  attributes {
                    slug
                    title
                    price
                    image {
                      data {
                        attributes {
                          formats
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        tracklist(pagination: { limit: 100 }) {
          
          track
          video
        }
      }
    }
  }
}

`;

export const GET_ARTIST_QUERY = `
  query getArtist($artist: String){
  artists(filters: {artist_name: {eq: $artist}}, sort: "products.release"){
    data {
      attributes {
        artist_name
        artist_picture {
          data {
            attributes {
              formats
            }
          }
        }
        products {
          data {
            attributes {
              title
              description
              image {
                data {
                  attributes {
                    formats
                  }
                }
              }
              slug
              price
              release
              format
              label
            }
          }
        }
      }
    }
  }
}
`;

export const GET_LIST_ARTISTS_QUERY = `
query getListArtists {
  artists(pagination: { limit: 100 }, sort: "artist_name:asc") {
    data {
      attributes {
        artist_name
      }
    }
  }
}
`;

// CAROUSEL QUERY
// export const GET_CAROUSEL_QUERY = `
// query {
//   carousels {
//     data {
//       attributes {
//         content
//         title
//         link
//         slug
//         carousel_pictures {
//           data {
//             attributes {
//               formats
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `;
