import Head from "next/head";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import Product from "../components/product";
import { Gallery, GalleryCont } from "../styles/Gallery";
import { useStateContext } from "../lib/context";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Loading from "../public/loading.svg";

export default function Home() {
  const { search, sort, setSort, setSearch } = useStateContext();

  useEffect(() => {
    setSort("createdAt:desc");
    setSearch("");
  }, []);

  //Fetch Graphql data
  const [results] = useQuery({
    query: PRODUCT_QUERY,
    variables: {
      search: search,
      limit: 100,
      start: 0,
      sort: sort,
      //
    },
  });

  const { data, fetching, error } = results;

  //Check for the data coming in

  if (fetching)
    return (
      <div layout className="loading">
        <img src="/loading.svg" alt="" />
      </div>
    );
  if (error) return <p>Oh no... {error.message}</p>;

  const products = data.products.data;

  return (
    <div>
      <Head>
        <title>LightHouse - Record Shop</title>
        <meta
          name="description"
          content="Une sélection faite avec amour exclusivement pour le web !"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GalleryCont layout>
          <Gallery initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {products.map((product) => (
              <motion.div key={product.attributes.slug}>
                <Product product={product} />
              </motion.div>
            ))}
          </Gallery>
        </GalleryCont>
        {/* <Pagination totalEntries={totalEntries} /> */}
      </main>
    </div>
  );
}
