import styled from "styled-components";
import { motion } from "framer-motion";

export const SuccessStyle = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0rem;
`;

export const SuccessStyleInner = styled(motion.div)`
  width: 88%;
  height: 100%;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SuccessHeader = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary);
    padding: 0 0 2rem 0;
  }
  p {
    font-size: 1.5rem;
    font-weight: normal;
    color: #808080;
    padding: 0 0 2rem 0;
    span {
      display: flex;
      font-weight: bold;
      margin-top: 1rem;
    }
  }
`;

export const SuccessInfos = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--secondary);
    line-height: 2rem;
  }
`;

export const SuccessAdress = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
export const SuccessProducts = styled(motion.div)`
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export const KeepShopping = styled(motion.div)`
  width: 30%;
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
