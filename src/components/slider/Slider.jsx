import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import './slider.css';

// Components
import slides from './slides/imports';

function Slider({ propStile }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <div className="slider" style={propStile}>
      <div ref={sliderRef} className="keen-slider">
        {slides.map((item, index) => (
          <div className="keen-slider__slide slider__slide" key={index}>
            {item()}
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="slider__dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <span
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={`slider__dot${
                currentSlide === idx ? ' slider__dot_active' : ''
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Slider;

// (
// {console.log(item)}
//
{
  /* {item} */
}
{
  /* </div> */
}
// ) )
