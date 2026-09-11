import { NextPage } from "next";
import NavBar from "../components/NavBar";
import styles from "../styles/pages/Photos.module.css";
import Footer from "../components/Footer";

import Image from "next/image";
import { CarouselTop } from "../components/CarouselTop";

const Photos: NextPage = () => {
  return (
    <main className={styles.container}>
      <NavBar localPage={"photos"} />

      <CarouselTop ano={2025} numFotos={15} />
      <CarouselTop ano={2024} numFotos={6} />

      <Footer />
    </main>
  );
};

export default Photos;
