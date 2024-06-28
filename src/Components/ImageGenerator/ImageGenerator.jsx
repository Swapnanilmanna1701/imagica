import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/aig.gif";
const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/")
  let inputRef = useRef(null);


  const imageGenerator = async ()=>{
    if (inputRef.current.value===""){
      return 0;
    }
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          "User-Agent": "Chrome"
        },
        body: JSON.stringify({
          prompt: inputRef.current.value,
          n: 1,
          size: "512x512"
        }),
      }
    );
    let data = await response.json();
    console.log(data);
  }




  return (
    <div className="ai-image-generator">
      <div className="header">
        Imagica<span>-Get Your Image Here</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={image_url==="/"?default_image:image_url} alt="" />
        </div>
      </div>
      <div className="search-box">
        <input ref={inputRef} className="search-input" type="text" placeholder="Enter Your Promt Here..." />
        <div className="generate-btn" onClick={()=>{imageGenerator()}}>Generate</div>

      </div>
    </div>
  );
};

export default ImageGenerator;
