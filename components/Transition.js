import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Transition = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <AnimatePresence>
      <ContainerStyled layout key={asPath}>
        {children}
      </ContainerStyled>
    </AnimatePresence>
  );
};

export default Transition;
const ContainerStyled = styled(motion.div)`
  overflow: hidden;
`;
