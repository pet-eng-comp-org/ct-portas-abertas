import styles from "../styles/components/NavBar.module.css";
import { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import Head from "next/head";

import { FiMenu } from "react-icons/fi";

import UfesLogo from "../assets/UfesLogo.svg";
import SDCLogo from "../assets/SDCLogo.png";
import MOSTRALogo from "../assets/MOSTRALogo.png";

import { PROGRADURL } from "./ProGrad";

interface NavBarProps {
  localPage: string;
}

const SemanaDoConhecimentoLink =
  "https://www.ufes.br/conteudo/vem-ai-semana-do-conhecimento-atencao-aos-prazos-para-participar";

export default function NavBar({ localPage }: NavBarProps) {
  const page = localPage;
  const [menuCollapsed, setMenuCollapsed] = useState<boolean>(true);

  return (
    <div className={styles.navbarContainer}>
      <Head>
        <title>CT de Portas Abertas - UFES</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Espaço dedicado ao evento CT de Portas Abertas da UFES, venha conhecer!"
        />
        <meta content="CT de Portas Abertas - UFES - ES" property="og:title" />
        <meta
          content="Espaço dedicado ao evento CT de Portas Abertas da UFES, venha conhecer!"
          property="og:description"
        />
        <meta content="https://ctportasabertas.pet.inf.ufes.br/HEADER.png" property="og:image" />
      </Head>
      <div className={styles.logoContainer}>
        <div className={styles.mostraLogo} title="Mostra de Profissões 2022">
          <a href={PROGRADURL}>
            <Image
              src={MOSTRALogo}
              alt="Mostra de profissões logo rodape"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </div>

        <div title="Semana do Conhecimento">
          <a href={SemanaDoConhecimentoLink}>
            <Image
              src={SDCLogo}
              alt="Semana Do Conhecimento logo rodape"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </div>

        <div title="Site oficial da ufes" id={styles.ufeslogo}>
          <a href="https://www.ufes.br">
            <Image
              src={UfesLogo}
              alt="Ufes Logo"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </div>
      </div>

      <button
        type="button"
        className={styles.menuIconContainer}
        aria-label="Menu"
        aria-expanded={!menuCollapsed}
        onClick={() => setMenuCollapsed(!menuCollapsed)}
      >
        <FiMenu aria-hidden />
      </button>
      <ul style={menuCollapsed ? { top: "-20rem" } : { top: "5rem" }}>
        <li id={page == "index" ? styles.selected : ""}>
          <Link href="./">PÁGINA INICIAL</Link>
        </li>

        {/* <li id={page=='signup'?styles.selected:""}>
   <Link href="./signup">CADASTRO</Link>
 </li> */}

        <li id={page == "booths" ? styles.selected : ""}>
          <Link href="./booths">MOSTRA DE PROJETOS</Link>
        </li>

        <li id={page == "visitations" ? styles.selected : ""}>
          <Link href="./visitations">TRILHAS</Link>
        </li>

        {/* <li id={page == "workshops" ? styles.selected : ""}>
   <Link href="./workshops">OFICINAS</Link>
 </li> */}

        <li id={page == "pockets" ? styles.selected : ""}>
          <Link href="./pockets">PALESTRA POCKET</Link>
        </li>

        <li id={page == "photos" ? styles.selected : ""}>
          <Link href="./photos">FOTOS</Link>
        </li>
      </ul>
    </div>
  );
}
