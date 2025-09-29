import { NextPage } from "next";
import NavBar from "../components/NavBar";
import styles from '../styles/pages/Events.module.css'
import Footer from "../components/Footer";

const Visitations: NextPage = () => {
    
    
    return (
        <main className={styles.container}>
            <NavBar localPage={"visitations"} />

            <h1>VISITAS GUIADAS</h1>

            <div className={styles.info_container}>
                <p>
                    As visitas guiadas serão realizadas de forma dinâmica. A formação dos grupos que sairão para as trilhas será feita na hora e por demanda.
                    Cada trilha terá uma duração de 20 minutos.
                </p>                    

                <h4>As visitas guiadas serão divididas em Trilhas Temáticas, da seguinte forma:</h4>
                <ul>
                    <li><span>Engenharia Elétrica:</span> Trilha 1 - LabVisio e HCS</li>
                    <li><span>Engenharia Elétrica:</span> Trilha 2 - LabAir e LRTA</li>
                    <li><span>Engenharia Elétrica:</span> Trilha 3 - LECO e PET Elétrica</li>
                    <li><span>Engenharia Elétrica:</span> Trilha 4 - Labtel</li>
                    <li><span>Engenharia Mecânica:</span> Trilha 1 - LabSensores e LaMEFT</li>
                    <li><span>Engenharia Mecânica:</span> Trilha 2 - LabTecMec e TriCorrMat</li>
                    <li><span>Engenharia Mecânica:</span> Trilha 3 - NEMOG</li>
                    <li><span>Computação:</span> Trilha 1 - LCAD, PET Eng Comp e ERUS</li>
                    <li><span>Computação:</span> Trilha 2 - HCS e Life (Informática na Saúde)</li>
                    <li><span>Engenharia Ambiental:</span> Trilha única - Lagesa, LabHidro, LabSan e NqualiAr</li>
                    <li><span>Engenharia Civil:</span> Trilha única - Geotecnia, LabDest, Lemac, Concres (Lemac)</li>
                    <li><span>Engenharia de Produção:</span> Trilha única - Laboratório de Manufatura Integrada, LIEP, ProjetoS6, ConneCT e Design Lab</li>
                    <li><span>Trilha Inovação:</span> Espaço Empreendedor</li>
                    
                </ul>             
                    
            </div>

            <Footer />
        </main>
    )
}

export default Visitations;
    