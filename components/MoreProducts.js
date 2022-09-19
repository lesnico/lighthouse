import {
  MoreProductsStyled,
  MoreProductsInner,
  MoreProductTitle,
  GalleryArtist,
} from "../styles/ProductDetails";
import { ProductStyles } from "../styles/ProductStyle";
import { BsVinylFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MoreProducts({ artist, title }) {
  // Variants
  const container = {
    visible: {
      scale: 0.96,
      transition: {
        delayChildren: 0.01,
        duration: 0.01,
        type: "tween",
      },
    },
    hidden: { scale: 1 },
  };

  const Content = {
    visible: {
      scale: 0.96,
    },
  };

  return (
    <MoreProductsStyled>
      <MoreProductsInner>
        <MoreProductTitle>
          <h3>
            <BsVinylFill /> Autres produits par {artist.artist_name}:
          </h3>
        </MoreProductTitle>
        <GalleryArtist>
          {artist.products.data.map((otherWork) => {
            if (otherWork.attributes.title != title) {
              return (
                <Link
                  key={otherWork.attributes.slug}
                  scroll={false}
                  href={`/product/${otherWork.attributes.slug}`}
                >
                  <ProductStyles
                    initial="hidden"
                    whileHover="visible"
                    variants={container}
                  >
                    <motion.div variants={Content}>
                      <div>
                        <img
                          src={
                            otherWork.attributes.image.data[0].attributes
                              .formats.small.url
                          }
                          alt=""
                        />
                      </div>

                      <h2>{otherWork.attributes.title}</h2>
                      <h3>{otherWork.attributes.price} €</h3>
                    </motion.div>
                  </ProductStyles>
                </Link>
              );
            }
          })}
        </GalleryArtist>
      </MoreProductsInner>
    </MoreProductsStyled>
  );
}
