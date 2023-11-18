import React from 'react'
import './Carousel.css'
const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleDark" class="carousel carousel-light slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carouselContainer">
               
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="4000" id="carousel1">
                        {/* <img src="https://images.unsplash.com/photo-1497015289639-54688650d173?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8bmV3c3x8fHx8fDE2ODk2NjQ2Mzc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600
" class="d-block w-100 carousel-image" alt="..." /> */}


                    </div>
                    <div class="carousel-item" data-bs-interval="4000" id="carousel2">
                        {/* <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8bmV3c3BhcGVyfHx8fHx8MTY4OTY2Mjg4OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600
" class="d-block w-100 carousel-image" alt="..." /> */}

                    </div>
                    <div class="carousel-item" data-bs-interval="4000" id="carousel3">
                        {/* <img src="https://images.unsplash.com/photo-1516731566880-919c39006c9d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8c3BvcnRzLG5ld3N8fHx8fHwxNjg5NjYzMTI4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600" class="d-block w-100 carousel-image" alt="..." /> */}

                    </div>
                </div>
                <div className="carouselTextcontainer">
                    <div className="carouselText">
                        <h1>Welcome to AdSyncHub</h1>
                        <p>Elevate Your Brand - Your Story, Our Canvas</p>
                    </div>
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

    </div>
  )
}

export default Carousel
