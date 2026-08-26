import Link from "next/link";
import Image from "next/image";
import logo from "../public/irwLogo.png";
export default function Header() {
  return (
    <header id="headerContainer">
      <Link href="/" id="logo">
        <Image 
        src={logo}
        alt="Home"
        width={170}
        height={50}
        priority />
      </Link>

      <nav id="menu" aria-label="Navegação principal">
        <Link href="/">Próxima corrida</Link>
        <Link href="/temporada">Temporada</Link>
        <Link href="/classificacao">Classificação</Link>
      </nav>
    </header>
  );
}