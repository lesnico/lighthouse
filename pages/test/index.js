import { motion, useScroll, useSpring } from "framer-motion";
import styled from "styled-components";

export default function Test() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <>
      <TEST>
        <motion.div style={{ scaleX: scaleX }}></motion.div>
      </TEST>
      <motion.div
        style={{ backgroundColor: "red", width: "100%", height: "100vh" }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        fallback={true}
      ></motion.div>
    </>
  );
}

const TEST = styled.div`
  width: 100%;
  height: 300vh;

  div {
    width: 100%;
    height: 1vh;
    background-color: blue;
    position: fixed;
    top: 0;
    transform-origin: left;
  }
`;
