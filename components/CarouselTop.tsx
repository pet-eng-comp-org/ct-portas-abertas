import styles from "../styles/components/Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Image from "next/image";

interface CarouselTopProps {
  //ano: edição do evento
  //numFotos: quantidade de fotos na pasta /public/${ano} da edição ${ano}
  ano: number;
  numFotos: number;
}

export function CarouselTop({ ano, numFotos }: CarouselTopProps) {
  const items = Array.from({ length: numFotos }, (_, index) => ({
    id: index + 1,
    title: "",
    imageUrl: `/${ano}/Fotos-${ano}-${index + 1}.jpeg`,
  }));

  return (
    <div className={styles.mainContainer}>
      <h1>FOTOS DA EDIÇÃO {ano}</h1>
      <Carousel>
        {items.map((photo, idx) => (
          <div key={idx} className={styles.card}>
            <img src={photo.imageUrl} className={styles.card} />
            {/* <p>{photo.title}</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
