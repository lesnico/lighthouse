import { ProductStyles } from "../styles/ProductStyle";
import Link from "next/link";
import { motion } from "framer-motion";
import { useStateContext } from "../lib/context";

export default function Product({ product }) {
  const { title, price, image, artist, slug } = product.attributes;

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
    <Link scroll={false} href={`/product/${slug}`}>
      <ProductStyles whileHover="visible" variants={container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          variants={Content}
        >
          {image.data[0] && (
            <img src={image.data[0].attributes.formats.small.url} alt="" />
          )}
          <h2>
            {artist.data.length === 1
              ? artist.data[0].attributes.artist_name + " - " + title
              : artist.data.map(
                  (artistCollab) => artistCollab.attributes.artist_name
                ) +
                " - " +
                title}
          </h2>
          <h3>{price} €</h3>
        </motion.div>
      </ProductStyles>
    </Link>
  );
}
