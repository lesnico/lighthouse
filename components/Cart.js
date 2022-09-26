import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  CartCard,
  CartCardInfo,
  EmptyStyle,
  Checkout,
  Cards,
  CartCloseBtn,
} from "../styles/CartStyles";
import { Quantity } from "../styles/ProductDetails";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import getStripe from "../lib/getStripe";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

// Animation Variants
const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const cards = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

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

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    useStateContext();

  //Payment
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <>
      <CartWrapper
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowCart(false)}
      >
        <CartStyle
          animate={{ x: "0%" }}
          initial={{ x: "50%" }}
          exit={{ x: "50%" }}
          transition={{ type: "tween" }}
          onClick={(e) => e.stopPropagation()}
        >
          {cartItems.length < 1 && (
            <EmptyStyle
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1>Votre panier est vide 🫢</h1>
              <FaShoppingCart />
            </EmptyStyle>
          )}
          <Cards layout variants={cards} initial="hidden" animate="show">
            {cartItems.length >= 1 &&
              cartItems.map((item) => {
                return (
                  <CartCard layout variants={card} key={item.slug}>
                    <img
                      src={item.image.data[0].attributes.formats.thumbnail.url}
                      alt={item.title}
                    />
                    <CartCardInfo>
                      <h3>
                        {item.artist.data.length === 1
                          ? item.artist.data[0].attributes.artist_name +
                            " - " +
                            item.title
                          : item.artist.data.map(
                              (artistCollab) =>
                                artistCollab.attributes.artist_name
                            ) +
                            " - " +
                            item.title}
                      </h3>
                      <h3>{item.price} €</h3>
                      <Quantity>
                        <span style={{ fontSize: "1.5rem" }}>Quantité :</span>
                        <motion.button
                          style={{ fontSize: "2rem" }}
                          whileHover={{
                            scale: 0.9,
                            transition: { duration: 0.3 },
                          }}
                          whileTap={{
                            scale: 1.1,
                            transition: { duration: 0.1 },
                          }}
                          onClick={() => onRemove(item)}
                        >
                          <AiFillMinusCircle />
                        </motion.button>
                        <p>{item.quantity}</p>
                        <motion.button
                          style={{ fontSize: "2rem" }}
                          whileHover={{
                            scale: 0.9,
                            transition: { duration: 0.3 },
                          }}
                          whileTap={{
                            scale: 1.1,
                            transition: { duration: 0.1 },
                          }}
                          onClick={() => onAdd(item, 1)}
                        >
                          <AiFillPlusCircle />
                        </motion.button>
                      </Quantity>
                    </CartCardInfo>
                  </CartCard>
                );
              })}
          </Cards>
          {cartItems.length >= 1 && (
            <Checkout
              whileHover={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 1.1, transition: { duration: 0.1 } }}
              onClick={handleCheckout}
              layout
            >
              <span>Valider le panier</span>
              <span>{totalPrice.toFixed(2) + " € "}</span>
            </Checkout>
          )}
          <CartCloseBtn
            onClick={() => setShowCart(false)}
            variants={container}
            whileHover="visible"
          >
            <motion.span variants={Content}>
              <AiOutlineClose />
            </motion.span>
          </CartCloseBtn>
        </CartStyle>
      </CartWrapper>
    </>
  );
}
