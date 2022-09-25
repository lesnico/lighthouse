import { SortStyled, SortStyledInner, SearchInput } from "../styles/SortStyles";
import { useStateContext } from "../lib/context";
import { useQuery } from "urql";
import { GET_LIST_ARTISTS_QUERY } from "../lib/query";
import { AnimatePresence } from "framer-motion";

export default function SortArea() {
  const { search, handleSearch, handleSort } = useStateContext();

  //Fetch Graphql data
  const [results] = useQuery({
    query: GET_LIST_ARTISTS_QUERY,
  });

  const { data, fetching, error } = results;

  //Check for the data coming in
  if (fetching) return;
  if (error) return;

  const listArtists = data.artists.data;

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
              <select name="filter-sort" id="filter-sort" onChange={handleSort}>
                <option value="createdAt:desc">Dernières nouveautés</option>
                {/* <option value="createdAt:desc">Les moins récents</option> */
                /* <option value="artist.artist_name:asc">Artistes &uarr;</option>
                <option value="artist.artist_name:desc">
                  Artistes &#8595;
                </option>
                <option value="title:asc">Albums &uarr;</option>
                <option value="title:desc">Albums &#8595;</option> */}
                <option value="price:asc">Prix : par ordre croissant</option>
                <option value="price:desc">Prix : par ordre décroissant</option>
              </select>
            </SearchInput>
          </SortStyledInner>
        </SortStyled>
      </AnimatePresence>
    </>
  );
}
