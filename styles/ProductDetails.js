import styled from "styled-components";
import { motion } from "framer-motion";

export const DetailsStyle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0rem;
  width: 100%;
  min-height: 65vh;
  a {
    transition: color 0.3s ease;
    text-decoration: underline;
    font-weight: 500;
  }
  a:hover {
    color: var(--special);
  }
`;

export const DetailsStyleInner = styled(motion.div)`
  width: 88%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  @media (max-width: 1085px) {
    flex-direction: column;
  }
`;

export const ProductMedias = styled(motion.div)`
  flex: 0.5;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  img,
  li > img {
    width: 100% !important;
    height: 100%;
    object-fit: cover;
  }
  .carousel .thumbs-wrapper {
    margin: 1rem 0rem;
    cursor: pointer;
  }

  .carousel .control-next.control-arrow:before {
    border-left: 8px solid #535353;
  }
  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid #535353;
  }
  @media (max-width: 1085px) {
    .carousel .thumbs {
      display: none;
    }
    .carousel .control-next.control-arrow:before {
      display: none;
    }
    .carousel .control-prev.control-arrow:before {
      display: none;
    }
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  height: 100%;
  color: #535353;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    letter-spacing: 0.2rem;
    font-weight: normal;
    font-size: 2.6rem;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    span:first-child {
      color: #808080;
    }
  }
  h3 {
    font-weight: normal;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: var(--primary);
    letter-spacing: 0.2rem;
    margin: 2rem 0rem;
  }
  ul.product-infos-list {
    padding: 1rem 0rem 2rem 0rem;
    list-style: none;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    color: #808080;
    li {
      font-size: 1.2rem;

      text-transform: uppercase;
    }
  }
  p {
    font-size: 1.4rem;
    font-weight: 300;
    text-align: justify;
  }
  @media (max-width: 1085px) {
    width: 100%;
  }
`;

export const Buy = styled(motion.div)`
  width: 30%;
  background: var(--special);
  color: var(--primary);
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0rem 0rem 0rem;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  cursor: pointer;
  @media (max-width: 1550px) {
    width: 50%;
  }
  @media (max-width: 1180px) {
    width: 70%;
  }
  @media (max-width: 1015px) {
    width: 100%;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 2rem;
    padding: 0rem 0.5rem;
    cursor: pointer;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }
  svg {
    color: var(--special);
  }
`;

export const ProductVideo = styled(motion.div)`
  .iframe {
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;
    width: 100%;
    height: 85vh;
  }
`;

export const MoreProductsStyled = styled(motion.div)`
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoreProductsInner = styled(motion.div)`
  width: 88%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MoreProductTitle = styled(motion.div)`
  h3 {
    font-weight: normal;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: var(--primary);
    letter-spacing: 0.2rem;

    background-color: white;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
      color: var(--special);
      margin-right: 0.5rem;
    }
  }
`;

export const GalleryArtist = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 2rem;
  position: relative;
  width: 88%;
  padding: 2rem 0rem;

  @media (max-width: 1085px) {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`;

export const ToastStyled = styled.span`
  font-size: 1.4rem;
`;

export const TracklistStyled = styled(motion.div)`
  font-size: 1.5rem;
  ul {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #cecece;
    list-style: none;
  }
  li {
    border-top: 1px solid #cecece;
    padding: 1rem 0rem;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      gap: 1rem;
    }
    svg {
      font-size: 2rem;
      cursor: pointer;
      &:hover {
        color: var(--special);
      }
    }
  }
  span:nth-child(1) {
    font-weight: bold;
  }
`;
