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
    <FooterStyle>
      <FooterStyleInner>
        <h1>LIGHTHOUSE</h1>
        <h3>RECORD SHOP</h3>
        <p>105 Rue Pierre Corneille</p>
        <p>69003 - Lyon, France</p>
        <FooterSocial>
          <Link href={"/"}>
            <BsFacebook />
          </Link>
          <Link href={"/"}>
            <BsInstagram />
          </Link>
          <Link href={"/"}>
            <BsYoutube />
          </Link>
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
