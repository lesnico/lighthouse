import Link from "next/link";
import { TracklistStyled } from "../styles/ProductDetails";
import { FaYoutube } from "react-icons/fa";

export default function Tracklist({ tracklist }) {
  return (
    <>
      <TracklistStyled>
        <h3>Tracklist :</h3>

        {tracklist.map((trackItem) => (
          <>
            {trackItem.SIDE && <p>{trackItem.SIDE.replace("_", " ")}</p>}
            {trackItem.tracklist2.map((trackItem2, i) => (
              <ul>
                <li key={i}>
                  <div>
                    <span>
                      {trackItem.SIDE.replace("SIDE_", " ") + (i + 1)}
                    </span>
                    <span>{trackItem2.track}</span>
                  </div>
                  {trackItem2.video && (
                    <Link href={trackItem2.video}>
                      <span>
                        <FaYoutube />
                      </span>
                    </Link>
                  )}
                </li>
              </ul>
            ))}
          </>
        ))}
      </TracklistStyled>
    </>
  );
}
