"use client";

import React, { useEffect, useState } from "react";



type ContainerProps = {
  children?: React.ReactNode;
};






const Container: React.FC<ContainerProps> = () => {



const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);






  return (
    // <div className="flex justify-center items-center h-4/6 w-10/12 bg-gray-200" style={{ padding: "10px"}}>
    //   <div className="flex bg-amber-900 w-2/5 h-5/6">
    //     1,1
    //   </div>
    //   <div className="flex bg-sky-400 w-3/5 h-5/6">
    //     1,2
    //     <div className="flex">2,1</div>
    //     <div className="flex">
    //       2,2
    //       <div className="flex">
    //         3,1
    //         <div className="flex">4,1</div>
    //         <div className="m-4 p-6 bg-blue-200" style={{ color: "red", backgroundColor: "yellow"}}>
    //           Este é um exemplo de um elemento com margin e padding aplicados
    //           usando Tailwind.
    //         </div>
    //         <div className="flex">4,1</div>
    //       </div>
    //       <div className="flex">3,2</div>
    //     </div>
    //   </div>
    // </div>


    // <div
    //   style={{
    //     display: "grid",
    //     gridTemplateAreas: `
    //       "header header header"
    //       "sidebar main widgets"
    //       "footer footer footer"
    //     `,
    //     gridTemplateColumns: "250px 1fr 300px", // Sidebar fixa, Main fluido, Widgets fixo
    //     gridTemplateRows: "100px auto 50px", // Header fixo, Conteúdo ajustável, Footer fixo
    //     gap: "15px",
    //     height: "100vh",
    //     padding: "10px",
    //     backgroundColor: "#f8f9fa",
    //   }}
    // >
    //   {/* Header */}
    //   <div
    //     style={{
    //       gridArea: "header",
    //       backgroundColor: "#007bff",
    //       color: "white",
    //       padding: "20px",
    //       textAlign: "center",
    //       fontSize: "1.5rem",
    //       fontWeight: "bold",
    //       borderRadius: "5px",
    //     }}
    //   >
    //     Header
    //   </div>

    //   {/* Sidebar */}
    //   <div
    //     style={{
    //       gridArea: "sidebar",
    //       backgroundColor: "#6c757d",
    //       color: "white",
    //       padding: "20px",
    //       borderRadius: "5px",
    //       display: "flex",
    //       flexDirection: "column",
    //       gap: "10px",
    //     }}
    //   >
    //     <div
    //       style={{
    //         backgroundColor: "#495057",
    //         padding: "10px",
    //         borderRadius: "5px",
    //       }}
    //     >
    //       Sidebar Item 1
    //     </div>
    //     <div
    //       style={{
    //         backgroundColor: "#495057",
    //         padding: "10px",
    //         borderRadius: "5px",
    //       }}
    //     >
    //       Sidebar Item 2
    //     </div>
    //     <div
    //       style={{
    //         backgroundColor: "#495057",
    //         padding: "10px",
    //         borderRadius: "5px",
    //       }}
    //     >
    //       Sidebar Item 3
    //     </div>
    //   </div>

    //   {/* Main Content */}
    //   <div
    //     style={{
    //       gridArea: "main",
    //       backgroundColor: "#ffffff",
    //       color: "#212529",
    //       padding: "20px",
    //       borderRadius: "5px",
    //       overflowY: "auto",
    //       boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    //     }}
    //   >
    //     <h2>Main Content</h2>
    //     <p>
    //       This is the main content area. It is fully scrollable if the content
    //       exceeds the available space.
    //     </p>
    //     <p>
    //       Here you can add articles, images, or any type of content you want.
    //     </p>
    //   </div>

    //   {/* Widgets */}
    //   <div
    //     style={{
    //       gridArea: "widgets",
    //       backgroundColor: "#17a2b8",
    //       color: "white",
    //       padding: "20px",
    //       borderRadius: "5px",
    //       display: "flex",
    //       flexDirection: "column",
    //       gap: "10px",
    //     }}
    //   >
    //     <div
    //       style={{
    //         backgroundColor: "#138496",
    //         padding: "10px",
    //         borderRadius: "5px",
    //       }}
    //     >
    //       Widget 1
    //     </div>
    //     <div
    //       style={{
    //         backgroundColor: "#138496",
    //         padding: "10px",
    //         borderRadius: "5px",
    //       }}
    //     >
    //       Widget 2
    //     </div>
    //     <div
    //       style={{
    //         backgroundColor: "#138496",
    //         padding: "10px",
    //         borderRadius: "5px",
    //       }}
    //     >
    //       Widget 3
    //     </div>
    //   </div>

    //   {/* Footer */}
    //   <div
    //     style={{
    //       gridArea: "footer",
    //       backgroundColor: "#343a40",
    //       color: "white",
    //       padding: "10px",
    //       textAlign: "center",
    //       fontSize: "0.9rem",
    //       borderRadius: "5px",
    //     }}
    //   >
    //     Footer © 2024. All rights reserved.
    //   </div>
    // </div>

<div
      style={{
        display: "grid",
        gridTemplateAreas: isMobile
          ? `
            "header"
            "main"
            "sidebar"
            "widgets"
            "footer"
          `
          : `
            "header header header"
            "sidebar main widgets"
            "footer footer footer"
          `,
        gridTemplateColumns: isMobile ? "1fr" : "250px 1fr 300px",
        gridTemplateRows: isMobile
          ? "100px auto auto auto 50px"
          : "100px auto 50px",
        gap: "15px",
        height: "100vh",
        padding: "10px",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Header */}
      <div
        style={{
          gridArea: "header",
          backgroundColor: "#007bff",
          color: "white",
          padding: "20px",
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          borderRadius: "5px",
        }}
      >
        Header
      </div>

      {/* Sidebar */}
      <div
        style={{
          gridArea: "sidebar",
          backgroundColor: "#6c757d",
          color: "white",
          padding: "20px",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div style={{ backgroundColor: "#495057", padding: "10px", borderRadius: "5px" }}>
          Sidebar Item 1
        </div>
        <div style={{ backgroundColor: "#495057", padding: "10px", borderRadius: "5px" }}>
          Sidebar Item 2
        </div>
        <div style={{ backgroundColor: "#495057", padding: "10px", borderRadius: "5px" }}>
          Sidebar Item 3
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          gridArea: "main",
          backgroundColor: "#ffffff",
          color: "#212529",
          padding: "20px",
          borderRadius: "5px",
          overflowY: "auto",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Main Content</h2>
        <p>
          This is the main content area. It is fully scrollable if the content exceeds the available space.
        </p>
        <p>Here you can add articles, images, or any type of content you want.</p>
      </div>

      {/* Widgets */}
      <div
        style={{
          gridArea: "widgets",
          backgroundColor: "#17a2b8",
          color: "white",
          padding: "20px",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div style={{ backgroundColor: "#138496", padding: "10px", borderRadius: "5px" }}>
          Widget 1
        </div>
        <div style={{ backgroundColor: "#138496", padding: "10px", borderRadius: "5px" }}>
          Widget 2
        </div>
        <div style={{ backgroundColor: "#138496", padding: "10px", borderRadius: "5px" }}>
          Widget 3
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          gridArea: "footer",
          backgroundColor: "#343a40",
          color: "white",
          padding: "10px",
          textAlign: "center",
          fontSize: "0.9rem",
          borderRadius: "5px",
        }}
      >
        Footer © 2024. All rights reserved.
      </div>
    </div>






  );
};
export default Container;
