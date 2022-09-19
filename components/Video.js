import { FaYoutube } from "react-icons/fa";
import { useStateContext } from "../lib/context";
import { ProductVideo } from "../styles/ProductDetails";
import YouTube from "react-youtube";
import { motion } from "framer-motion";

export default function Video({ video }) {
  const { currentVideo, ytVideoGen, showVideo, setShowVideo } =
    useStateContext();
  const opts = {
    height: "",
    width: "",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  console.log(video);
  return (
    <>
      <FaYoutube onClick={() => setShowVideo(true)} />
      {showVideo && video && (
        <ProductVideo>
          <YouTube
            iframeClassName="iframe"
            opts={opts}
            videoId={ytVideoGen(video)}
          />
        </ProductVideo>
      )}
    </>
  );
}
