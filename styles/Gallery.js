import styled from "styled-components";
import { motion } from "framer-motion";

export const GalleryCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  min-height: 100vh;
`;

export const Gallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 2rem;
  position: relative;
  width: 88%;
  min-height: 100vh;
  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
`;
