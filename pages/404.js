import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <h1>404 - Page introuvale</h1>
      <Link href="/">
        <a>Retourner à l&apos;accueil</a>
      </Link>
    </>
  );
}
