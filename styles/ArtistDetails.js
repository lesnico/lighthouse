import styled from "styled-components";
import { motion } from "framer-motion";

export const ArtistStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ArtistProfil = styled(motion.div)`
  width: 100%;
  height: 30vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .bg-picture-artist {
    width: 100%;
    object-fit: cover;
    filter: blur(3px);
  }
  .profil-picture-artist {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: 6px solid white;
    object-fit: cover;
    margin: 0 0 2rem 0;
  }
  h1 {
    position: absolute;
    bottom: 1rem;
    color: white;
  }
`;

export const ArtistStyleInner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  width: 88%;
  height: 100%;
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

export const ProductStyles = styled(motion.div)`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  transition: transform 0.3s ease;
  border-radius: 1rem;
  cursor: pointer;
  z-index: 100;
  img {
    width: 100%;
    height: 100%;
  }
  h2 {
    padding: 0.5rem 0rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
