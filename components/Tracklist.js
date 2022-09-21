import Link from "next/link";
import { TracklistStyled } from "../styles/ProductDetails";
import { FaYoutube } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
export default function Tracklist({ tracklist }) {
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
                    <Link key={uuidv4()} href={trackItem2.video}>
                      <span key={uuidv4()}>
                        <FaYoutube />
                      </span>
                    </Link>
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
