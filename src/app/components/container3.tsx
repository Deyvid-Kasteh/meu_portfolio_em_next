import React from "react";
import BiblioteraWeb from "../../../public/bibliotecaWEB.png";
import foto1 from "../../../public/imagePerfil.png";
import foto2 from "../../../public/imagePerfil2.png";
import foto22 from "../../../public/imagePerfil22.png";
import foto222 from "../../../public/imagePerfil2semFundo.png";
import foto3 from "../../../public/imageQuadrada.jpg";
import fotoPerfil from "../../../public/imageRostoSemFundo.png";
import fotoPerfil2 from "../../../public/imageQuadrada2.png";
import Image from "next/image";

type Container3Props = {};

const Container3: React.FC<Container3Props> = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateAreas: `
          "apresentacao portifoio"
          `,
        gridTemplateColumns: "400px 700px",
        gap: "40px",
        height: " 640px",
      }}
    >
      <div
        style={{
          gridArea: "apresentacao",
          backgroundColor: "#8184d3",
          padding: "20px",
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          // backgroundColor: "#a3a3ff", // Cor de fundo
          // width: "300px", // Largura da div
          // height: "400px", // Altura da div
          // position: "relative", // Necessário para o clip-path
          // clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)", // Forma personalizada

          // backgroundColor: "#a3ffa3",
          // width: "300px",
          // height: "400px",
          // clipPath: "polygon(94% 0, 100% 0, 100% 78%, 6% 100%, 0 100%, 0 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: "1",
            // width: "100%",
            height: "100%",
            // height: "200px",
            // backgroundColor: "red",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src={fotoPerfil2}
            alt="Foto"
            width={250}
            height={250}
            style={{
              display: "flex",
              // flex: "1",
              // width: "100%",
              borderRadius: "50%",
              // backgroundColor: "white",
              border: "8px solid #f6f6f6",
            }}
          />
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "Roboto, sans-serif",
              color: "white",
              margin: "10px",
            }}
          >
            Oi, sou David
          </p>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Roboto, sans-serif",
              color: "white",
              margin: "0px",
            }}
          >
            Desenvolvedor Web/Mobile
          </p>
        </div>
      </div>
      <div
        style={{
          gridArea: "portifoio",
          backgroundColor: "#f6f6f6",
          // padding: "20px",
          display: "grid",
          gridTemplateAreas: `"header header header"
                               "area1 area1 area2"
                             "area1 area1 area2"
                             "area3 area4 area4"`,
          gridTemplateColumns: "1fr 280px 1fr",
          gridTemplateRows: "95px 142px 142px 142px",
          gap: "40px",
        }}
      >
        <div
          style={{
            gridArea: "header",
            // height: "100px",
            // display: 'inline-block',
            // backgroundColor: "#f6f6f6",
            // backgroundColor: "green",
            // padding: "10px",
            // border: "1px solid black",
            borderRadius: "5px",
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: "1",
          }}
        >
          <p
            style={{
              flex: "1",
              fontWeight: "bold",
              fontSize: "124.5px",
              lineHeight: "110px",
              margin: "0px",
              // fontFamily: "Monoton, sans-serif",
              // fontFamily: "Michroma, sans-serif",
              fontFamily: "Zen Dots, sans-serif",
              color: "black",
            }}
          >
            Portfolio
          </p>
        </div>
        <div
          style={{
            gridArea: "area1",
            background:
              "conic-gradient(from 0deg, #ef7b78, #99d5e0, #7a876a,  #7a876a, #ef7b78)",
            // padding: "10px",
            borderRadius: "16px",
            display: "flex",
            flex: "1",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <Image
            src={BiblioteraWeb}
            alt="Bibliotera Web site"
            width={518.4}
            height={324}
            style={{
              // objectPosition: "right",
              objectPosition: "center center",
            }}
          />
        </div>
        <div
          style={{
            gridArea: "area2",
            // backgroundColor: "lightblue",
            // padding: "10px",
            display: "flex",
            flex: "1",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#b0e4de",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Area 2.1
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#8d6fbc",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Area 2.2
          </div>
        </div>
        <div
          style={{
            gridArea: "area3",
            backgroundColor: "#595959",
            padding: "10px",
            overflow: "hidden",
            borderRadius: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Area 3
        </div>
        <div
          style={{
            gridArea: "area4",
            // backgroundColor: "#000000",
            // padding: "10px",
            display: "flex",
            flexDirection: "row",
            overflow: "hidden",
            borderRadius: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#000000",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              // borderTopLeftRadius: "16px",
              // borderBottomLeftRadius: "16px",
            }}
          >
            Area 2.1
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#ffc267",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",

              // borderTopRightRadius: "16px",
              // borderBottomRightRadius: "16px",
            }}
          >
            Area 4.2
          </div>
        </div>
      </div>
    </div>
  );
};
export default Container3;
