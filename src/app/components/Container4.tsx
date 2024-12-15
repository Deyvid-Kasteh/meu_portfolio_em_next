import React from "react";
import BiblioteraWeb from "../../../public/bibliotecaWEB.png";
import fotoPerfil2 from "../../../public/imageQuadrada2.png";
import Image from "next/image";
import appBiblioteca from "../../../public/AppBiblioteca.png";
import starbucksLandingPage from "../../../public/starbucks.png";
import lotofacilLandingPage from "../../../public/lotofacil.png";

import { FaReact } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";

import { FaJava } from "react-icons/fa";

import styles from "./Container4.module.css";

type Container4Props = {};

const Container4: React.FC<Container4Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.apresentacaoContainer}>
        <div className={styles.apresentacao}>
          <Image
            className={styles.imagemPerfil}
            src={fotoPerfil2}
            alt="Foto"
            width={250}
            height={250}
          />
          <span className={styles.greeting}>Oi! sou David👋</span>
          <span className={styles.profession}>Desenvolvedor Web/Mobile.</span>
          <p>
            Mais de 2 anos de experiência em projetos utilizando JavaScript,
            TypeScript, React, React Native, Next.js, MongoDB e PostgreSQL.
          </p>
          <div className={styles.iconsApresentacao}>
            <div>
              <TbBrandTypescript style={{ fontSize: "40px", color: "white" }} />
            </div>
            <div>
              <TbBrandReactNative
                style={{ fontSize: "40px", color: "white" }}
              />
            </div>
            <div>
              <FaReact style={{ fontSize: "40px", color: "white" }} />
            </div>
            <div>
              <FaJava style={{ fontSize: "40px", color: "white" }} />
            </div>
            <div>
              <SiMongodb style={{ fontSize: "40px", color: "white" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.portifolioContainer}>
        <div className={styles.header}>
          <p>Portfolio</p>
        </div>
        <div className={styles.area1}>
          <Image
            src={BiblioteraWeb}
            alt="Bibliotera Web site"
            width={518.4}
            height={324}
            style={{
              objectPosition: "center center",
            }}
          />
        </div>
        <div className={styles.area2}>
          <Image
            src={appBiblioteca}
            alt="Bibliotera Mobile"
            width={170}
            height={324}
          />
        </div>
        <div className={styles.area3}>Area 3</div>
        <div className={styles.area4}>
          <div>
            <Image
              src={starbucksLandingPage}
              alt="Starbucks Landing Page"
              width={245}
              height={142}
            />
          </div>
          <div>
            <Image
              src={lotofacilLandingPage}
              alt="Lotofacil Landing Page"
              width={245}
              height={142}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Container4;
