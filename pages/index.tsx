import { NextPage } from "next";
import Image from "next/legacy/image";

import ProGrad from "../components/ProGrad";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import styles from "../styles/pages/Home.module.css";

export const OpenDate = new Date("2022-11-01T00:00:00.000Z");

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <NavBar localPage={"index"} />

      <div className={styles.banner_container}>
        <div className={styles.banner_inside_container}>
          <Image
            src="/HEADER.png"
            alt="Banner CT Portas Abertas"
            layout="responsive"
            width={2250}
            height={1000}
          />
        </div>
      </div>

      <div className={styles.textContainer}>
        <p>
          Em breve, a edição 2026 do CT de Portas Abertas! O evento faz parte da
          Mostra de Profissões da Prograd, que ocorrerá nos dias 06 e 07 de
          outubro de 2026. O CT de Portas Abertas tem como objetivo divulgar e
          promover os cursos de Engenharia e Computação do Centro Tecnológico da
          UFES para alunos do ensino médio e técnico, sendo uma oportunidade
          única de obter informações valiosas sobre as diversas áreas de atuação
          dos cursos oferecidos pelo CT.
          <br />
          <br />
          Programação especial:
        </p>

        <ol>
          <li>
            06/10 (terça-feira):
            <ul>
              <li>
                Trilhas/Visitas guiadas aos laboratórios dos Cursos do CT -
                08:30 às 17h.
              </li>
              <li>Estandes dos cursos do CT - 08:00 às 17h.</li>
              <li>
                The Ohmies: Banda dos alunos da Engenharia Elétrica - 11h.
              </li>
              <li>Palestra Mulheres na Tecnologia - 14h.</li>
              <li>EngRockers: Banda dos Professores do CT - 16h</li>
              <li>Encerramento - 17h.</li>
            </ul>
          </li>

          <li>
            07/10 (quarta-feira):
            <ul>
              <li>
                Trilhas/Visitas guiadas aos laboratórios dos Cursos do CT -
                08:30 às 17h.
              </li>
              <li>Estandes dos cursos do CT - 08:00 às 17h.</li>
              <li>
                Museu Capixaba do Computador (Hall do CT-13) - 08:00 às 12h.
              </li>
              <li>Palestra sobre IA - 10h.</li>
              <li>
                Desafio &quot;Street Fighter&quot; (Prof. Luis Antônio de Souza
                Junior - Ex-Pro Player) - 16h.
              </li>
              <li>Encerramento - 17h.</li>
            </ul>
          </li>
        </ol>

        {/* <p>
          Participe, também, da 2ª Semana de Informática em Saúde (
          <a
            href="https://life.inf.ufes.br/sis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui para conferir a programação completa
          </a>
          ).
        </p> */}

        <p>
          OBS.: O evento CT de Portas Abertas é totalmente gratuito e não é
          necessário realizar inscrição!
        </p>
      </div>

      <ProGrad />

      <Footer />
    </main>
  );
};

export default Home;
