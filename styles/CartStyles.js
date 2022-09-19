import styled from "styled-components";
import { motion } from "framer-motion";

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 300;
  display: flex;
  justify-content: flex-end;
`;

export const CartStyle = styled(motion.div)`
  width: 30%;
  background-color: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;
  @media (max-width: 1660px) {
    padding: 2rem 3rem;
    width: 40%;
  }
  @media (max-width: 1160px) {
    padding: 2rem 5rem;
    width: 100%;
  }
  @media (max-width: 530px) {
    padding: 2rem 1rem;
    width: 100%;
  }
`;

export const CartCard = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background-color: white;
  padding: 2rem;
  gap: 2rem;
  margin: 2rem 0rem;
  img {
    width: 10rem;
  }
`;

export const CartCardInfo = styled(motion.div)`
  width: 100%;
  div {
    display: flex;
    flex-direction: space-between;
  }
  span {
    font-size: 1.5rem;
    font-weight: normal;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: normal;
  }
`;

export const EmptyStyle = styled(motion.div)`
  /* position: absolute;
  top: 0; */

  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  h1 {
    font-size: 2rem;
    padding: 2rem;
  }
  svg {
    font-size: 10rem;
    color: var(--special);
  }
`;

export const Checkout = styled(motion.div)`
  width: 100%;
  background: var(--special);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0rem 0rem 0rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  border: none;
  span {
    color: var(--primary);
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: normal;
    gap: 0.5rem;
    &:hover {
      color: var(--primary);
    }
  }
`;

export const Cards = styled(motion.div)``;
export const CartCloseBtn = styled(motion.div)`
  position: absolute;
  top: 2%;
  right: 2%;
  background: var(--primary);
  width: 5rem;
  height: 5rem;
  z-index: 200;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  display: none;
  span,
  svg {
    pointer-events: none;
  }
  svg:hover {
    color: white;
  }
  @media (max-width: 1160px) {
    display: flex;
  }
`;
