import React from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/aig.gif";
const ImageGenerator = () => {
  return (
    <div className="ai-image-generator">
      <div className="header">
        Imagica<span>-Get Your Image Here</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={default_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
