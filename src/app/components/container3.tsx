// import React from "react";
// import BiblioteraWeb from "../../../public/bibliotecaWEB.png";
// import fotoPerfil2 from "../../../public/imageQuadrada2.png";
// import Image from "next/image";
// import appBiblioteca from "../../../public/AppBiblioteca.png";
// import starbucksLandingPage from "../../../public/starbucks.png";
// import lotofacilLandingPage from "../../../public/lotofacil.png";

// import { FaReact } from "react-icons/fa";
// import { SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si";
// import { TbBrandReactNative } from "react-icons/tb";
// import { TbBrandTypescript } from "react-icons/tb";

// import { FaJava } from "react-icons/fa";


// type Container3Props = {};

// const Container3: React.FC<Container3Props> = () => {
//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateAreas: `
//           "apresentacao portifoio"
//           `,
//         gridTemplateColumns: "400px 700px",
//         gap: "40px",
//         height: " 640px",
//       }}
//     >
//       <div
//         style={{
//           gridArea: "apresentacao",
//           backgroundColor: "#8184d3",
//           padding: "20px",
//           borderRadius: "20px",
//           overflow: "hidden",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flex: "1",
//             height: "100%",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <Image
//             src={fotoPerfil2}
//             alt="Foto"
//             width={250}
//             height={250}
//             style={{
//               display: "flex",
//               borderRadius: "50%",
//               border: "8px solid #f6f6f6",
//             }}
//           />
//           <span
//             style={{
//               fontSize: "30px",
//               fontWeight: "bold",
//               fontFamily: "Roboto, sans-serif",
//               color: "white",
//               margin: "10px",
//             }}
//           >
//             Oi! sou David👋
//           </span>
//           <span
//             style={{
//               fontSize: "20px",
//               fontWeight: "bold",
//               fontFamily: "Roboto, sans-serif",
//               color: "white",
//               margin: "0px",
//             }}
//           >
//             Desenvolvedor Web/Mobile.
//           </span>
//           <p
//             style={{
//               fontSize: "14px",
//               // fontWeight: "bold",
//               fontFamily: "Roboto, sans-serif",
//               color: "white",
//               // margin: "0px",
//             }}
//           >
//             Mais de 2 anos de experiência em projetos utilizando JavaScript,
//             TypeScript, React, React Native, Next.js, MongoDB e PostgreSQL.
//           </p>
//           <div
//             style={{
//               display: "flex",
//               flex: "1",
//               width: "100%",
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "space-around",
//             }}
//           >
//             <div>
//               <TbBrandTypescript style={{ fontSize: "40px", color: "white" }} />
//             </div>
//             <div>
//               <TbBrandReactNative
//                 style={{ fontSize: "40px", color: "white" }}
//               />
//             </div>
//             <div>
//               <FaReact style={{ fontSize: "40px", color: "white" }} />
//             </div>
//             <div>
//               <FaJava style={{ fontSize: "40px", color: "white" }} />
//             </div>
//             <div>
//               <SiMongodb style={{ fontSize: "40px", color: "white" }} />
//             </div>
//             <div
//               className="
//               transition
//               duration-300
//         ease-in-out
//         hover:scale-105
//         hover:bg-blue-100
//         opacity-75
//         hover:opacity-100
//       "
//             >
//               <SiPostgresql
//                 style={{ fontSize: "40px", color: "white" }}
//                 className="
//               transition
//               duration-300
//         ease-in-out
//         hover:scale-105
//         hover:bg-blue-100
//         opacity-75
//         hover:opacity-100
//       "
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         style={{
          // gridArea: "portifoio",
          // backgroundColor: "#f6f6f6",
          // display: "grid",
          // gridTemplateAreas: `"header header header"
          //                      "area1 area1 area2"
          //                    "area1 area1 area2"
          //                    "area3 area4 area4"`,
          // gridTemplateColumns: "1fr 280px 1fr",
          // gridTemplateRows: "95px 142px 142px 142px",
          // gap: "40px",
//         }}
//       >
//         <div
//           style={{
//             gridArea: "header",

//             borderRadius: "5px",
//             justifyContent: "center",
//             alignItems: "center",
//             flex: "1",
//           }}
//         >
//           <p
//             style={{
//               flex: "1",
//               fontWeight: "bold",
//               fontSize: "124.5px",
//               lineHeight: "110px",
//               margin: "0px",
//               fontFamily: "Zen Dots, sans-serif",
//               color: "black",
//             }}
//           >
//             Portfolio
//           </p>
//         </div>
//         <div
//           style={{
//             gridArea: "area1",
//             background:
//               "conic-gradient(from 0deg, #ef7b78, #99d5e0, #7a876a,  #7a876a, #ef7b78)",
//             borderRadius: "16px",
//             display: "flex",
//             flex: "1",
//             overflow: "hidden",
//             width: "100%",
//           }}
//         >
//           <Image
//             src={BiblioteraWeb}
//             alt="Bibliotera Web site"
//             width={518.4}
//             height={324}
//             style={{
//               objectPosition: "center center",
//             }}
//           />
//         </div>
//         <div
//           style={{
//             gridArea: "area2",
//             backgroundColor: "lightblue",
//             display: "flex",
//             flex: "1",
//             flexDirection: "column",
//             overflow: "hidden",
//             borderRadius: "16px",
//           }}
//         >
//           <Image
//             src={appBiblioteca}
//             alt="Bibliotera Mobile"
//             width={170}
//             height={324}
//           />
//         </div>
//         <div
//           style={{
//             gridArea: "area3",
//             backgroundColor: "#595959",
//             padding: "10px",
//             overflow: "hidden",
//             borderRadius: "16px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           Area 3
//         </div>
//         <div
//           style={{
//             gridArea: "area4",
//             display: "flex",
//             flexDirection: "row",
//             overflow: "hidden",
//             borderRadius: "16px",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               flex: 1,
//               backgroundColor: "#000000",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Image
//               src={starbucksLandingPage}
//               alt="Starbucks Landing Page"
//               width={245}
//               height={142}
//             />
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flex: 1,
//               backgroundColor: "#ffc267",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Image
//               src={lotofacilLandingPage}
//               alt="Lotofacil Landing Page"
//               width={245}
//               height={142}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Container3;




import React from "react";
import Image from "next/image";
import BiblioteraWeb from "../../../public/bibliotecaWEB.png";
import fotoPerfil2 from "../../../public/imageQuadrada2.png";
import appBiblioteca from "../../../public/AppBiblioteca.png";
import starbucksLandingPage from "../../../public/starbucks.png";
import lotofacilLandingPage from "../../../public/lotofacil.png";

import { FaReact, FaJava } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si";
import { TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";

import "./Container3.css";

const Container3: React.FC = () => {
  return (
    <div className="container3">
      <div className="apresentacao">
        <Image src={fotoPerfil2} alt="Foto" width={250} height={250} />
        <span className="greeting">Oi! sou David👋</span>
        <span className="profession">Desenvolvedor Web/Mobile.</span>
        <p>
          Mais de 2 anos de experiência em projetos utilizando JavaScript,
          TypeScript, React, React Native, Next.js, MongoDB e PostgreSQL.
        </p>
        <div className="icons">
          <TbBrandTypescript />
          <TbBrandReactNative />
          <FaReact />
          <FaJava />
          <SiMongodb />
          <SiPostgresql />
        </div>
      </div>
      <div className="portifoio">
        <div className="header">Portfolio</div>
        <div className="area1">
          <Image src={BiblioteraWeb} alt="Bibliotera Web site" />
        </div>
        <div className="area2">
          <Image src={appBiblioteca} alt="Bibliotera Mobile" />
        </div>
        <div className="area3">Area 3</div>
        <div className="area4">
          <div className="starbucks">
            <Image src={starbucksLandingPage} alt="Starbucks Landing Page" />
          </div>
          <div className="lotofacil">
            <Image src={lotofacilLandingPage} alt="Lotofacil Landing Page" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container3;
