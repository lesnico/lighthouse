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
            <SearchInput>
              <div>
                <select
                  name="filter-artist-name"
                  id="filter-artist-name"
                  onChange={handleSearch}
                >
                  <option value={""}>Tous les artistes</option>
                  {listArtists.map((artist) => (
                    <option
                      value={artist.attributes.artist_name}
                      key={artist.attributes.artist_name}
                    >
                      {artist.attributes.artist_name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                {search === "" && (
                  <select
                    name="filter-sort"
                    id="filter-sort"
                    onChange={handleSort}
                  >
                    <option value="createdAt:desc">Derniers ajouts</option>
                    {/* <option value="createdAt:desc">Les moins récents</option> */}
                    <option value="artist.artist_name:asc">
                      Artistes &uarr;
                    </option>
                    <option value="artist.artist_name:desc">
                      Artistes &#8595;
                    </option>
                    <option value="title:asc">Albums &uarr;</option>
                    <option value="title:desc">Albums &#8595;</option>
                    <option value="price:asc">Prix &uarr;</option>
                    <option value="price:desc">Prix &#8595;</option>
                  </select>
                )}
              </div>
            </SearchInput>
          </SortStyledInner>
        </SortStyled>
      </AnimatePresence>
    </>
  );
}
