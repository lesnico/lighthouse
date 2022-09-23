import {
  FooterStyle,
  FooterStyleInner,
  FooterSocial,
  FooterCredits,
} from "../styles/FooterStyles";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsHeartFill,
} from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterStyle
      style={{ opacity: "0" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <FooterStyleInner>
        <div className="logo">
          <p>LIGHTHOUSE</p>
          <p>RECORD SHOP</p>
        </div>
        <p>105 Rue Pierre Corneille</p>
        <p>69003 - Lyon, France</p>
        <FooterSocial>
          <div>
            <BsFacebook />

            <BsInstagram />

            <BsYoutube />
          </div>
          <div>
            <span onClick={() => window.scrollTo(0, 0)}>
              Retourner en haut.
            </span>
          </div>
        </FooterSocial>
        <div className="bar"></div>
        <FooterCredits>
          <p>
            Crafted with <BsHeartFill /> by Nicolas Baucheron - © 2022
          </p>
          <div>
            <Link href={"/"}>Conditions de vente générales</Link>
            <span> | </span>
            <Link href={"/"}>Politique de confidentialité</Link>
          </div>
        </FooterCredits>
      </FooterStyleInner>
    </FooterStyle>
  );
}
