import Link from "next/link";
import { TracklistStyled, VideoIframe } from "../styles/ProductDetails";
import { FaYoutube } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";

import { useStateContext } from "../lib/context";

export default function Tracklist({ tracklist }) {
  const { showVideo, setShowVideo, ytVideoGen, currentVideo, setCurrentVideo } =
    useStateContext();

  const videoHandling = (videoItem) => {
    console.log(videoItem);
    setShowVideo(true);
    const currentVideoItem = videoItem.replace("watch?v=", "embed/");
    setCurrentVideo(currentVideoItem);
  };
  return (
    <>
      <TracklistStyled>
        <h3>Tracklist :</h3>

        {tracklist.map((trackItem) => (
          <div key={uuidv4()}>
            <p key={uuidv4()}>{trackItem.SIDE.replace("_", " ")}</p>

            <ul key={uuidv4()}>
              {trackItem.tracklist2.map((trackItem2, i) => (
                <li key={uuidv4()}>
                  <div key={uuidv4()}>
                    <span key={uuidv4()}>
                      {trackItem.SIDE.replace("SIDE_", " ") + (i + 1)}
                    </span>
                    <span key={uuidv4()}>{trackItem2.track}</span>
                  </div>
                  {trackItem2.video && (
                    <span key={uuidv4()}>
                      <FaYoutube
                        onClick={() => videoHandling(trackItem2.video)}
                      />
                      <Modal
                        isOpen={showVideo}
                        // onAfterOpen={afterOpenModal}
                        onRequestClose={() => setShowVideo(false)}
                        // style={customStyles}
                        contentLabel="Example Modal"
                      >
                        <VideoIframe>
                          <iframe
                            width="560"
                            height="315"
                            src={currentVideo}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </VideoIframe>
                      </Modal>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </TracklistStyled>
    </>
  );
}
