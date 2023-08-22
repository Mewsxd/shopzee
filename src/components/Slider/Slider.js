import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import "./Slider.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../data";
import { ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";
import { database } from "../Firebase/Firebase";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;
function Slider() {
  const [slideIndex, setslideIndex] = useState(0);
  function handleClick(direction) {
    if (direction === "left") {
      setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      console.log(slideIndex);
    } else {
      setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      console.log(slideIndex);
    }
  }
  const NavLink = styled(Link)`
    color: purple;
    text-decoration: none;
    &:hover {
      color: black;
      background: transparent;
    }
    &:visited {
      color: black;
    }
  `;
  useEffect(() => {
    const starCountRef = ref(database, "sliderItems");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }, []);

  return (
    <div className="slider--container">
      <div className="slider--arrow left" onClick={() => handleClick("left")}>
        {/* <ArrowLeftOutlined /> */}❰
      </div>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <div className="slider--slide">
            <div className="slider--img-container">
              <img style={{ height: "80%" }} src={items.img} alt="pro" />
            </div>
            <div className="slider--info-container">
              <div className="slider--title">
                <h1>{items.title}</h1>
              </div>
              <div className="slider--desc">
                <p>{items.desc}</p>
              </div>
              <button
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "3px solid black",
                }}
              >
                <NavLink to="/products">SHOP NOW</NavLink>
              </button>
            </div>
          </div>
        ))}
      </Wrapper>
      <div className="slider--arrow right" onClick={() => handleClick("right")}>
        {/* <ArrowRightOutlined /> */} ❱
      </div>
    </div>
  );
}

export default Slider;
