import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavStyles, NavStylesInner, NavItems, Logo } from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  // Variants
  const LogoCont = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
        duration: 0.01,
        type: "tween",
      },
    },
    hidden: { x: -100, opacity: 0 },
  };

  const LogoItem = {
    hidden: {
      x: -30,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const LogoItem2 = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <NavStyles
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "10px 0px 10px 0px" }}
    >
      <NavStylesInner layout>
        <Link href={"/"}>
          <Logo
            whileHover={{ scale: 0.99 }}
            initial="hidden"
            animate="visible"
            variants={LogoCont}
          >
            <motion.img src="/logo.svg" variants={LogoItem} />
            <div>
              <motion.h1 variants={LogoItem}>LIGHTHOUSE</motion.h1>
              <motion.h3 variants={LogoItem2}>RECORD SHOP</motion.h3>
            </div>
          </Logo>
        </Link>
        <NavItems>
          <div onClick={() => setShowCart(true)}>
            {totalQuantities > 0 && (
              <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
                {totalQuantities}
              </motion.span>
            )}
            <FiShoppingBag />
            <h3>Panier</h3>
          </div>
        </NavItems>
        <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
      </NavStylesInner>
    </NavStyles>
  );
}
