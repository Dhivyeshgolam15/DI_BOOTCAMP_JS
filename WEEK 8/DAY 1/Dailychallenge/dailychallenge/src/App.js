import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css'; 


const App = () => {
  return (
    <Carousel>
      <div>
        <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Image 1" />
        <p className="legend">Image 1</p>
      </div>
      <div>
        <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Image 2" />
        <p className="legend">Image 2</p>
      </div>
      <div>
        <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Image 3" />
        <p className="legend">Image 3</p>
      </div>
      <div>
        <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Image 4" />
        <p className="legend">Image 4</p>
      </div>
      <div className="carousel-container">
      <Carousel>
        {/* Carousel content */}
      </Carousel>
    </div>
    
    </Carousel>
  );
};
export default App;
