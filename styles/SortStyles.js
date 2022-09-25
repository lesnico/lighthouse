import styled from "styled-components";
import { motion } from "framer-motion";

export const SortStyled = styled(motion.div)`
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0rem;
`;

export const SortStyledInner = styled(motion.div)`
  width: 88%;
  min-height: 10vh;
  background: white;
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  div {
    p {
      letter-spacing: -7%;
      color: #808080;
      font-weight: 700;
      font-size: 1.5rem;
    }
    p:first-child {
      font-size: 2.6rem;
      color: #2d2d2d;
      font-family: "Signika", sans-serif;
      text-transform: uppercase;
    }
  }
  @media (max-width: 660px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const SearchInput = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: -3px;
  select {
    border: none;
    border-radius: 1rem;
    padding: 0.3rem 0rem;
    background: rgb(255, 255, 255);
    color: rgb(83, 83, 83);
    font-size: 1.5rem;
    font-family: DM Sans, sans-serif;
  }
  @media (max-width: 660px) {
    margin: 1rem 0rem;
  }
`;
