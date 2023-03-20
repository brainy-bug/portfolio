import React, { useState, useEffect } from "react";

import construction from "../assets/images/under-construction.png";

const UnderConstruction = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "5rem auto",
    },
    img: {
      margin: "auto",
      width: "200px",
    },
    h2: {
      marginTop: "3rem",
      textAlign: "center",
    },
  };

  return (
    <container style={styles.container}>
      <img src={construction} alt='under-construction' style={styles.img} />
      <h2 className='h2' style={styles.h2}>
        Under construction
      </h2>
    </container>
  );
};

export default UnderConstruction;
