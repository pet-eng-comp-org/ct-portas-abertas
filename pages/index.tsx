import { NextPage } from "next";
import Image from "next/image";

import ProGrad from "../components/ProGrad";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import styles from "../styles/pages/Home.module.css";
import HeaderBanner from "../assets/HEADER.png";

export const OpenDate = new Date("2022-11-01T00:00:00.000Z");

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <NavBar localPage={"index"} />

      <div className={styles.banner_container}>
        <div className={styles.banner_inside_container}>
          <Image
            src={HeaderBanner}
            alt="Banner CT Portas Abertas"
            layout="responsive"
          />
        </div>
      </div>

      <div className={styles.textContainer}>
        <p>
          Em breve, a edição 2025 do CT de Portas Abertas! O evento faz parte da
          Mostra de Profissões da Prograd, que ocorrerá nos dias 07 e 08 de
          outubro de 2025. O CT de Portas Abertas tem como objetivo divulgar e
          promover os cursos de Engenharia e Tecnologia do Centro Tecnológico da
          UFES para alunos do ensino médio e técnico, sendo uma oportunidade
          única de obter informações valiosas sobre as diversas áreas de atuação
          dos cursos oferecidos pelo CT.
          <br />
          <br />
          Programação especial:
        </p>

        <ol>
          <li>
            07/10 (terça-feira):
            <ul>
              <li>
                Visitas guiadas aos laboratórios de pesquisa e extensão do CT
                - 08 às 17h.
              </li>
              <li>Estandes dos cursos de Engenharia e Computação - 08 às 17h.</li>
              <li>The Ohmies: Banda dos alunos da Engenharia Elétrica - 10h.</li>
              <li>EngRockers: Banda dos professores do CT - 14h.</li>
              <li>Encerramento - 17h.</li>
            </ul>
          </li>

          <li>
            08/10 (quarta-feira):
            <ul>
              <li>
                Visitas guiadas aos laboratórios de pesquisa e extensão do CT
                - 08 às 17h.
              </li>
              <li>Estandes dos cursos de Engenharia e Computação - 08 às 17h.</li>
              <li>Museu Capixaba do Computador - 08 às 12h.</li>
              <li>
                Talk sobre Inteligência Artificial com o Professor André Pacheco
                - 10h.
              </li>
              <li>
                Desafio Street Fighter com o professor e ex-Pro Player Luis
                Souza - 15h30.
              </li>
              <li>Encerramento - 17h.</li>

            </ul>
          </li>
        </ol>

        <p>
          Participe, também, da 2ª Semana de Informática em Saúde (
          <a
            href="https://life.inf.ufes.br/sis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui para conferir a programação completa
          </a>
          ).
        </p>
      </div>

      <ProGrad />

      <Footer />
    </main>
  );
};

export default Home;
