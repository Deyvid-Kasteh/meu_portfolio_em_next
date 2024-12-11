import React from "react";
import BiblioteraWeb from "../../../public/bibliotecaWEB.png";
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
        }}
      >
        Header
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
            backgroundColor: "#f6f6f6",
            // backgroundColor: "green",
            // padding: "10px",
            // border: "1px solid black",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flex: "1",
            fontWeight: "bold",
            fontSize: "106px",
            // lineHeight: "0px",
            // fontFamily: "Monoton, sans-serif",
            // fontFamily: "Michroma, sans-serif",
            fontFamily: "Major Mono Display, sans-serif",
            color: "black",
          }}
        >
          {/* Portfolio */}
          Portfolio
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
            alt="Bibliotera Web"
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
