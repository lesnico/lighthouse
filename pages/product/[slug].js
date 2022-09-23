import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  DetailsStyleInner,
  AlbumInfoCont,
  Cover,
  AlbumInfo,
  Quantity,
  Buy,
  ToastStyled,
} from "../../styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../../lib/context";
import Head from "next/head";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useEffect } from "react";
import Tracklist from "../../components/Tracklist";
import MoreProducts from "../../components/MoreProducts";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import Footer from "../../components/Footer";

export default function ProductDetails() {
  //Use state
  const { qty, increaseQty, DecreaseQty, onAdd, setQty, convertDate } =
    useStateContext();

  useEffect(() => {
    setQty(1);
  }, []);

  //Fetch slug
  const { query } = useRouter();

  //Fetch Graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;
  //Check for the data coming in
  if (fetching)
    return (
      <motion.div className="loading">
        <img src="/loading.svg" alt="" />
      </motion.div>
    );
  if (error) return;
  //exctract data
  const {
    title,
    description,
    release,
    format,
    label,
    image,
    artist,
    price,
    slug,
    tracklist,
  } = data.products.data[0].attributes;

  // Toast
  const notify = () => {
    toast.success(
      <ToastStyled>
        <b>{artist.data[0].attributes.artist_name}</b> - <b>{title}</b> ajouté
        au panier !
      </ToastStyled>,
      {
        duration: 1500,
        position: "bottom-center",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        icon: "",
      }
    );
  };

  return (
    <>
      <Head>
        <title>
          LightHouse - Record Shop -{" "}
          {title + " - " + artist.data[0].attributes.artist_name}
        </title>
        <meta name="description" content="Page produit vinyle Lighthouse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DetailsStyle>
        <DetailsStyleInner>
          <AlbumInfoCont>
            <Cover>
              <Carousel
                width="35rem"
                showThumbs={false}
                swipeable={false}
                showStatus={false}
              >
                {image.data.map((imageItem) => (
                  <img
                    src={
                      imageItem.attributes.formats.medium
                        ? imageItem.attributes.formats.medium.url
                        : imageItem.attributes.formats.small.url
                    }
                    alt={title}
                    key={
                      imageItem.attributes.formats.medium
                        ? imageItem.attributes.formats.medium.url
                        : imageItem.attributes.formats.small.url
                    }
                  />
                ))}
              </Carousel>
            </Cover>
            <AlbumInfo>
              <h1>{title}</h1>
              <h2>{artist.data[0].attributes.artist_name}</h2>
              <p>
                {label} | {convertDate(release)} | {format}
              </p>
              <Quantity>
                <span>Quantité : </span>
                <motion.button
                  whileHover={{
                    scale: 0.9,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 1.1, transition: { duration: 0.1 } }}
                >
                  <AiFillMinusCircle onClick={DecreaseQty} />
                </motion.button>
                <p>{qty}</p>
                <motion.button
                  whileHover={{
                    scale: 0.9,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 1.1, transition: { duration: 0.1 } }}
                >
                  <AiFillPlusCircle onClick={increaseQty} />
                </motion.button>
              </Quantity>
              <Buy
                whileHover={{
                  scale: 0.95,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1.1, transition: { duration: 0.1 } }}
                onClick={() => {
                  onAdd(data.products.data[0].attributes, qty);
                  notify();
                }}
              >
                <span>Ajouter au panier</span>
                <span>{price + " €"}</span>
              </Buy>
              <h3>Description : </h3>
              <p>{description}</p>
            </AlbumInfo>
          </AlbumInfoCont>
          {tracklist != "" && (
            <div className="tracklist-flex-cont">
              <Tracklist tracklist={tracklist} />
              <div className="empty"></div>
            </div>
          )}
          {artist.data[0].attributes.products.data.length > 1 && (
            <MoreProducts artist={artist.data[0].attributes} title={title} />
          )}
        </DetailsStyleInner>
      </DetailsStyle>
      <Footer />
    </>
  );
}
