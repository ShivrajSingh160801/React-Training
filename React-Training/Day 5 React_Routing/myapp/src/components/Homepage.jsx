import React from "react";

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
       <style>
        {`
          .carousel-image {
            object-fit: cover;
            height: 100%;
            max-height: 715px; /* Adjust the value as needed */
          }
        `}
      </style>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://source.unsplash.com/random/?wallpaper,landscape" className="d-block w-100 carousel-image" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/?wallpaper,wildlife" className="d-block w-100 carousel-image" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/?wallpaper,nature" className="d-block w-100 carousel-image" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
