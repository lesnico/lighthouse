import {
  SortStyled,
  SortStyledInner,
  SearchInput,
  ArtistsList,
} from "../styles/SortStyles";
import { useStateContext } from "../lib/context";
import { useQuery } from "urql";
import { GET_LIST_ARTISTS_QUERY } from "../lib/query";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function SortArea() {
  const {
    search,
    setSearch,
    handleSearch,
    handleSort,
    viewArtists,
    setViewArtists,
  } = useStateContext();

  //Fetch Graphql data
  const [results] = useQuery({
    query: GET_LIST_ARTISTS_QUERY,
  });

  const { data, fetching, error } = results;

  //Check for the data coming in
  if (fetching) return;
  if (error) return;

  const listArtists = data.artists.data;

  // Variants
  const container = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.01,
        duration: 0.01,
        type: "tween",
      },
    },
    hidden: { opacity: 0 },
  };

  const Content = {
    visible: {
      opacity: 1,
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <SortStyled
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.75 }}
        >
          <SortStyledInner>
            <div>
              <p>La Boutique</p>
              <p>Une sélection préparée avec amour en exclusivité web ! </p>
            </div>

            <SearchInput>
              <div className="show-artists-btn">
                <span onClick={() => setViewArtists(!viewArtists)}>
                  {viewArtists ? "Masquer les artistes" : "Voir les artistes"}
                </span>
                <p onClick={() => handleSearch("")}>{search}</p>
              </div>
              {handleSearch === "" && (
                <select
                  name="filter-sort"
                  id="filter-sort"
                  onChange={handleSort}
                >
                  <option value="createdAt:desc">Dernières nouveautés</option>
                  <option value="price:asc">Prix : par ordre croissant</option>
                  <option value="price:desc">
                    Prix : par ordre décroissant
                  </option>
                </select>
              )}
            </SearchInput>
          </SortStyledInner>

          {viewArtists && (
            <AnimatePresence>
              <ArtistsList
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.ul
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.li
                    className={search === "" ? "active" : ""}
                    initial="hidden"
                    variants={Content}
                    onClick={() => handleSearch("")}
                  >
                    Tous
                  </motion.li>
                  {listArtists.map((artistItem) => (
                    <>
                      {artistItem.attributes.products.data.length > 0 && (
                        <motion.li
                          className={
                            search === artistItem.attributes.artist_name
                              ? "active"
                              : ""
                          }
                          initial="hidden"
                          variants={Content}
                          key={artistItem.attributes.artist_name}
                          onClick={() =>
                            handleSearch(artistItem.attributes.artist_name)
                          }
                        >
                          {`${artistItem.attributes.artist_name} (${artistItem.attributes.products.data.length})`}
                        </motion.li>
                      )}
                    </>
                  ))}
                </motion.ul>
              </ArtistsList>
            </AnimatePresence>
          )}
        </SortStyled>
      </AnimatePresence>
    </>
  );
}
