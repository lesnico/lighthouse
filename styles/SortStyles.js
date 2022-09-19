import styled from "styled-components";
import { motion } from "framer-motion";

export const SortStyled = styled(motion.div)`
  width: 100%;
  height: 5vh;
  background: var(--special);
  gap: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  /* margin: 0 0 2rem 0; */
  margin-bottom: 2rem;
  z-index: 100;
  position: relative;
  @media (max-width: 700px) {
    height: 10vh;
  }
`;

export const SortStyledInner = styled(motion.div)`
  width: 88%;
`;

export const SearchInput = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  select {
    border: none;
    border-radius: 1rem;
    padding: 0.3rem 0.5rem;
    background: #ffffff;
    color: #535353;
  }
  button {
    border: none;
    background: #535353;
    color: #f1f1f1;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    position: absolute;
    left: 85%;
    top: -2px;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1085px) {
    justify-content: space-between;
  }
  @media (max-width: 750px) {
    select {
      border-radius: 2rem;
      font-size: 1.5rem;
    }
  }
`;
