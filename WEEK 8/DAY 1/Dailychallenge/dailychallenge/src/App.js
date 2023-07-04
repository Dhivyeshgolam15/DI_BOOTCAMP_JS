// import logo from './logo.svg';
import './carousel.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const carousel = () => {
  return (
    <Carousel>
      <div>
        <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong" />
      <div className="carousel-caption">Hong Kong</div>

      </div>
      <div>
        <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Macao" />
        <div className="carousel-caption">Macao</div>
      </div>
      <div>
        <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Japan" />
        <div className="carousel-caption">Japan</div>
      </div>
      <div>
        <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas" />
        <div className="carousel-caption">Las Vegas</div>
      </div>
    </Carousel>
  );
}

export default carouse;
