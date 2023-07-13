import React, { useState, useRef, useEffect, useMemo } from "react";
import "./Slider.css";

function Slider({ children, dotsShow = true }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const plusSlides = (n) => {
    if (currentSlide === children.length - 1) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide((prev) => prev + 1);
  };

  const minusSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(children.length - 1);
      return;
    }
    setCurrentSlide((prev) => prev - 1);
  };

  const jumpCurrentSlide = (n) => {
    setCurrentSlide(n);
  };

  const isArray = useMemo(() => {
    return Array.isArray(children);
  }, [children]);
  return (
    <>
      <div className="slideshow-container">
        {isArray ? children[currentSlide] : children}

        {/* Next and previous buttons */}
        {isArray && (
          <>
            <a className="prev" onClick={minusSlide}>
              ❮
            </a>
            <a className="next" onClick={plusSlides}>
              ❯
            </a>
          </>
        )}
      </div>
      <br />
      {/* The dots/circles */}
      {dotsShow && (
        <div style={{ textAlign: "center" }}>
          {isArray &&
            children?.map((item, i) => {
              return (
                <span
                  key={i}
                  className={`dot ${i == currentSlide && "active"}`}
                  onClick={() => jumpCurrentSlide(i)}
                />
              );
            })}
        </div>
      )}
    </>
  );
}

export default Slider;
