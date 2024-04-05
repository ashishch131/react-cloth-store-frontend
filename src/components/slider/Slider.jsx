import "./slider.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderData } from "../../dummyData";
import { useState } from "react";


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  }
  return (
    <div className="slider">
      <div className="arrow left" onClick={()=>handleClick("left")}>
        <ArrowLeftIcon className="arrowIcon "/>
      </div>
      <div className="slideWrap" style={{transform: `translateX(${slideIndex * -100}vw)`}}>
        {sliderData.map((item) => (
          
        <div className="slide" key={item.id}>
          <div className="imgContainer">
            <img className="slideImg" src={item.img} alt="" />
          </div>
          <div className="infoContainer">
            <h1 className="slideTitle">{item.title}</h1>
            <h3 className="slideDesc">{item.desc}</h3>
            <button className="slideButton">SHOW MORE</button>
          </div>
        </div>
        ))}
      </div>

      <div className="arrow right" onClick={()=>handleClick("right")}>
        <ArrowRightIcon className="arrowIcon " />
      </div>
    </div>
  );
};

export default Slider;
