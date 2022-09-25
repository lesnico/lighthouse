import styled from "styled-components";
import { motion } from "framer-motion";

export const SortStyled = styled(motion.div)`
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
      color: var(--secondary);
      font-weight: 700;
      font-size: 1.5rem;
    }
    p:first-child {
      font-size: 2.6rem;
      color: var(--primary);
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

  gap: 1rem;
  font-size: 1.5rem;
  font-family: DM Sans, sans-serif;
  color: rgb(83, 83, 83);
  .show-artists-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    span {
      cursor: pointer;
    }
    p {
      font-size: 1.5rem !important;
      font-family: DM Sans, sans-serif !important;
      text-transform: none !important;
      margin: 0rem 1rem 0rem 0rem;

      color: var(--special);
      &:hover {
        text-decoration: line-through;
        cursor: pointer;
      }
    }
  }
  select {
    border: none;
    border-radius: 1rem;
    /* padding: 0.3rem 0rem; */
    background: rgb(255, 255, 255);
    color: rgb(83, 83, 83);
    font-size: 1.5rem;
    font-family: DM Sans, sans-serif;
  }
  .select-cont {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  @media (max-width: 660px) {
    margin: 1rem 0rem;
  }
  @media (max-width: 780px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const ArtistsList = styled(motion.div)`
  width: 88%;
  padding: 2rem 0rem 0rem 0rem;
  color: var(--primary);
  .active {
    color: var(--special);
    text-decoration: underline;
  }
  ul {
    font-weight: 500;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    flex-wrap: wrap;
    gap: 2rem;
    @media (max-width: 780px) {
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  li {
    cursor: pointer;
    transition: color 0.2s ease;
    &:hover {
      color: var(--special);
    }
  }
`;
