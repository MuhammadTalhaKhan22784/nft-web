import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  A11y,
} from "swiper";
import "swiper/swiper-bundle.css";
import fox1 from "../../Assets/Images/nft_img2.png";
// import fox2 from "../../assets/images/arts/fox2.png";
// import fox3 from "../../assets/images/arts/fox3.png";
// import fox4 from "../../assets/images/arts/fox4.png";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, A11y]);

const TeamSlider = () => {
  const images = [
    fox1,
    fox1,
    fox1,
    fox1,
    fox1,
    fox1,
    // fox2,
    // fox3,
    // fox4,
    // fox2,
    // fox1,
    // fox4,
    // fox3,
    // fox2,
    // fox3,
    // fox4,
    // fox2,
  ];
  return (
    <div
      className="bg-of-slider"
      data-aos="fade"
      data-aos-offset="0"
      data-aos-delay="500"
    >
      <div className="slider-container">
        <div className="slider-wrapp">
          <Swiper
            navigation
            spaceBetween={15}
            grabCursor
            initialSlide={1}
            loop
            observer
            preloadImages
            effect="coverflow"
            breakpoints={{
              // when window width is >= 640px
              100: {
                slidesPerView: 1,
              },
              390: {
                slidesPerView: 2,
              },
              550: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 3,
              },
              1600: {
                slidesPerView: 4,
              },
            }}
          >
            {images.map((img, ind) => {
              return (
                <SwiperSlide key={ind} className="slide">
                  <img className="slide-img" src={img} alt="G-Fox" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
