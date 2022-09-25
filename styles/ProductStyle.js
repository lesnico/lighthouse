import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductStyles = styled(motion.div)`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  transition: transform 0.3s ease;
  border-radius: 0.8rem;
  cursor: pointer;
  z-index: 100;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
  }
  h2 {
    font-family: "Signika", sans-serif;
    padding: 0.5rem 0rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1.5rem;
    font-weight: 700;
  }
  h3 {
    font-size: 1.4rem;
  }
`;
