import styled from "styled-components";
import { motion } from "framer-motion";

export const NavStyles = styled(motion.nav)`
  background: white;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  z-index: 200;
  position: relative;
  a {
    font-size: 1.2rem;
  }
`;

export const NavStylesInner = styled.div`
  width: 88%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > * {
    flex: 1;
  }
  span {
    display: flex;
    justify-content: flex-start;
    font-weight: bold;
    font-size: 2.5rem;
    cursor: pointer;
    transition: color 0.3s ease;
    &:hover {
      color: var(--special);
    }
  }
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  div {
    /* margin-left: 3rem; */
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    font-size: 1.5rem;
    padding: 0.25rem;
  }
  svg {
    font-size: 2.5rem;
  }
  span {
    background-color: var(--special);
    color: white;
    width: 2.3rem;
    height: 2.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 1.4rem;
    position: absolute;
    right: 0%;
    top: -25%;
    pointer-events: none;
    cursor: pointer;
  }
  @media (max-width: 750px) {
    svg {
      font-size: 2rem;
    }
    span {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const NavBottom = styled.div`
  background-color: #f1f1f1;
  width: 100%;
  height: 5vh;
`;

export const Logo = styled(motion.div)`
  font-family: "Signika", sans-serif;
  z-index: 100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transform-origin: center center;
  gap: 1rem;
  cursor: pointer;
  div {
    pointer-events: none;
  }
  h1 {
    font-size: 3.5rem;
    color: var(--primary);
    letter-spacing: -3px;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: normal;
    letter-spacing: -1px;
    color: var(--special);
  }
  img {
    height: 10vh;
  }
  @media (max-width: 1160px) {
    img {
      height: 10vh;
    }
  }
  @media (max-width: 750px) {
    h1 {
      font-size: 3rem;
      color: var(--primary);
      letter-spacing: -3px;
    }
    h3 {
      font-size: 1.3rem;
      font-weight: normal;
      letter-spacing: -1px;
    }
  }
`;
