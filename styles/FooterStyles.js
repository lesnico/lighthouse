import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterStyle = styled(motion.div)`
  width: 100%;
  min-height: 25vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--special);
`;
export const FooterStyleInner = styled(motion.div)`
  width: 88%;
  height: 100%;
  padding: 2rem 0rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    padding: 2rem 0rem 4rem 0rem;
  }
  h1 {
    font-size: 3.5rem;
    color: #464646;
    letter-spacing: -3px;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: normal;
    letter-spacing: -1px;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
  }
  div.bar {
    border-bottom: 1px solid #464646;
  }
`;

export const FooterSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 2rem;
  margin: 2rem 0rem;
  color: #464646;
  svg {
    cursor: pointer;
  }
  div {
    gap: 1rem;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const FooterCredits = styled(motion.div)`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  gap: 1rem;
  p {
    font-size: 1.2rem;
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  svg {
    transition: color, 0.2s ease;
  }
  svg:hover {
    color: red;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
