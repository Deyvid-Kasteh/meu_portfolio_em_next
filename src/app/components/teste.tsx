"use client"

import React, { useState, useEffect } from "react";

const IconTransition: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  // Alterna entre os estados a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setExpanded((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  const styles = {
    transitionContainer: {
      display: "flex",
      alignItems: "center",
      height: "70px",
      borderRadius: "10px",
      overflow: "hidden",
      transition: "all 0.5s ease",
      backgroundColor: "#8184d3",
      width: "70px",
      justifyContent: "center",
      position: "relative",
    },
    expandedContainer: {
      width: "300px",
      backgroundColor: "white",
    },
    icon: {
      width: "40px",
      height: "40px",
      fill: "white",
      transition: "fill 0.5s ease",
    },
    expandedIcon: {
      fill: "#8184d3",
    },
    text: {
      position: "absolute",
      color: "#8184d3",
      fontWeight: "bold",
      opacity: 0,
      left: "70px",
      transition: "opacity 0.5s ease",
      whiteSpace: "nowrap",
    },
    expandedText: {
      opacity: 1,
    },
  };

  return (
    <div
      className={`${styles.transitionContainer} ${expanded ? "expanded" : ""}`}
      style={expanded ? styles.expandedContainer : {}}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={styles.icon}
        style={expanded ? styles.expandedIcon : {}}
      >
        <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.079-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.312.732.667.775-.507.775-.507 1.316-.844-.203-.314-.304-.455-.439-.59-.472-.528-1.103-.804-2.126-.784l-.528.066c-.507.124-.99.396-1.282.754-.855.968-.608 2.655.427 3.354 1.01.67 2.481.815 2.673 1.448.177.576-.131.759-.472.854-.36.09-.747.049-1.068-.183-.556-.348-.775-.996-1.278-.908l-.676.786c.782.955 1.951 1.416 3.475 1.317 1.674-.169 2.812-.825 2.932-2.064.01-.488-.137-1-.437-1.344zM12.662 4.907h-1.686l-.001 4.946c0 1.134.058 2.19-.126 2.513-.304.669-1.186.578-1.578.463-.398-.196-.6-.469-.832-.855-.063-.105-.11-.196-.126-.196l-1.282.774c.216.445.532.83.94 1.076.607.363 1.42.48 2.274.288.555-.16 1.034-.49 1.284-1 .363-.663.286-1.466.286-2.354l-.001-4.509z" />
      </svg>
      <span className={styles.text} style={expanded ? styles.expandedText : {}}>
        Javascript
      </span>
    </div>
  );
};

export default IconTransition;
