import React from "react";
import image from "../assets/images/Leer_Korb.jpg";

function NotFound() {
  return (
    <div className="notfound_img">
      <h1>Sie haben noch nichts in den Wagen</h1>
      <img src={image} alt="Bild" />
    </div>
  );
}

export default NotFound;
