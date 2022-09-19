import Link from "next/link";
import { TracklistStyled } from "../styles/ProductDetails";
import { FaYoutube } from "react-icons/fa";

export default function Tracklist({ tracklist }) {
  return (
    <>
      <h3>TRACKLISTING</h3>
      <TracklistStyled>
        <ul>
          {tracklist.map((trackItem, i) => (
            <li key={i}>
              <div>
                <span>{i + 1}</span>
                <span>{trackItem.track}</span>
              </div>
              {trackItem.video && (
                <Link href={trackItem.video}>
                  <span>
                    <FaYoutube />
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </TracklistStyled>
    </>
  );
}
