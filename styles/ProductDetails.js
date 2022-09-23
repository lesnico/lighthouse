import styled from "styled-components";
import { motion } from "framer-motion";

export const DetailsStyle = styled(motion.div)`
  margin-top: 2rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const DetailsStyleInner = styled(motion.div)`
  width: 88%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 780px) {
    width: 100%;
  }
  h1 {
    font-family: "Signika", sans-serif;
    font-size: 2.6rem;
    letter-spacing: 2%;
    font-weight: 700;
    color: #2d2d2d;
    text-transform: capitalize;
  }
  h2 {
    font-family: "Signika", sans-serif;
    font-size: 2rem;
    letter-spacing: 2%;
    font-weight: 400;
    color: #808080;
    padding: 0 0 1rem 0;
  }
  h3 {
    font-family: "Signika", sans-serif;
    font-size: 2rem;
    letter-spacing: 2%;
    font-weight: 700;
    color: #2d2d2d;
    padding: 0 0 1rem 0;
  }
  p {
    font-size: 1.5rem;
    letter-spacing: 2%;
    font-weight: 400;
    color: #808080;
    text-align: justify;
  }
  .tracklist-flex-cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 4rem;
    @media (max-width: 1120px) {
      padding: 0rem;
    }
    .empty {
      flex: 0.5;
      width: 40%;
      min-height: 10vh;
      @media (max-width: 1120px) {
        display: none;
      }
    }
  }
`;

export const AlbumInfoCont = styled(motion.div)`
  width: 100%;
  min-height: 20vh;
  background-color: #e1eff7;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  padding: 4rem;
  margin-bottom: 2rem;
  @media (max-width: 1120px) {
    flex-direction: column;
  }
  @media (max-width: 780px) {
    padding: 0rem;
    background-color: transparent;
  }
  @media (max-width: 500px) {
    padding: 0rem;
  }
`;

export const Cover = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  img {
    width: 35rem;
    height: 35rem;

    @media (max-width: 1120px) {
      /* width: 60%;
      height: 60%; */
      /* margin: 4rem 0rem;
      box-shadow: none; */
    }
  }
  .carousel-root {
    @media (max-width: 780px) {
      padding: 2rem;
    }
    border-radius: 0.8rem;
  }
  .carousel {
    margin: 2rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 0.8rem;
    @media (max-width: 780px) {
      margin: 2rem 0rem;
      width: 100% !important ;
      box-shadow: none;

      img {
        width: 100% !important ;
        height: 100% !important;
      }
    }
  }
`;

export const AlbumInfo = styled(motion.div)`
  flex: 0.5;
  background-color: white;
  border-radius: 0.8rem;
  min-height: 10rem;
  padding: 2rem;
  @media (max-width: 1400px) {
    flex: 1;
  }
`;

export const Quantity = styled.div`
  padding: 2rem 0rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-family: "Signika", sans-serif;
  span {
    color: #2d2d2d;
    font-weight: 700;
  }
  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 3rem;
    padding: 0rem 1rem;
    cursor: pointer;
  }
  p {
    width: 1rem;
    font-size: 2rem;
    text-align: center;
    color: #2d2d2d;
  }

  svg {
    color: var(--special);
  }
`;

export const Buy = styled(motion.div)`
  width: 50%;
  background: var(--action);
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 0rem 2rem 0rem;
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border-radius: 0.8rem;
  @media (max-width: 1760px) {
    width: 70%;
  }
  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const TracklistStyled = styled(motion.div)`
  padding: 0rem 0rem 2rem 0rem;
  flex: 1;
  font-size: 1.5rem;
  position: relative;
  p {
    padding: 1rem 0rem;
  }
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
    align-items: center;
    div {
      display: flex;
      gap: 1rem;
    }
    svg {
      color: #2d2d2d;
      font-size: 2rem;
      cursor: pointer;
      transition: color, 0.2s ease;
      &:hover {
        color: var(--special);
      }
    }
  }
  span:nth-child(1) {
    font-weight: bold;
  }
  @media (max-width: 780px) {
    padding: 0rem 2rem 2rem 2rem;
  }
  .video-exit-btn {
    width: 250px;
    padding: 2rem 1.5rem;
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
    position: fixed;
    top: 1%;
    right: 1%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const VideoIframe = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

export const MoreProductsStyled = styled(motion.div)`
  /* width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center; */
`;

export const MoreProductsInner = styled(motion.div)`
  /* width: 88%;
  height: 100%; */
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  h2,
  h3 {
    font-weight: 400 !important;
    font-size: 1.5rem;
    padding: 0;
  }
  @media (max-width: 1120px) {
    padding: 0rem;
  }
  @media (max-width: 780px) {
    padding: 0rem 2rem;
  }
`;

export const MoreProductTitle = styled(motion.div)`
  h3 {
    font-family: "Signika", sans-serif;
    font-size: 2rem;
    letter-spacing: 2%;
    font-weight: 700 !important;
    color: #2d2d2d;
    padding: 0 0 1rem 0;
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
