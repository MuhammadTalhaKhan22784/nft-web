import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import teamImg1 from "../../Assets/Images/team-img-1.png";
import teamImg2 from "../../Assets/Images/team-img-2.png";
import teamImg3 from "../../Assets/Images/team-img-3.png";
import teamImg4 from "../../Assets/Images/team-img-4.png";
import TeamCards from "../../Components/Cards/TeamCards";
const Team = () => {
  let navigationPrevRef = React.useRef(null);
  let navigationNextRef = React.useRef(null);
  return (
    <>
      {/* <div className="team">
        <div className="team_overlay"> */}
          {/* OUR TEAM START */}
          <div className="our-team-wrapper" id="team">
            <div className="team_overlay">
            <div className="container-wrapper_t">
              <div className="our-team py-100px">
                <div className="team" >
                  {/* <p className=" text-center dark-blue fs-96px weight-7   ">
                    <span className="title-effect-wrapper teko">
                      Our Team
                      <div className="title-effect teko">Our Team</div>
                    </span>
                  </p>

                  <p className="text-center dark-blue fs-22px weight-4 lh-36px mb-70px">
                    Our commitment as a team to this project is one that is
                    beyond a successful token sale, but towards building a
                    product that our community loves, enjoys and also benefits
                    from.
                  </p> */}

                  <div className="team-cards mb-70px">
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={60}
                      onSwiper={(swiper) => {
                        setTimeout(() => {
                          swiper.params.navigation.prevEl =
                            navigationPrevRef.current;
                          swiper.params.navigation.nextEl =
                            navigationNextRef.current;
                          swiper.navigation.destroy();
                          swiper.navigation.init();
                          swiper.navigation.update();
                        });
                      }}
                      navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                      }}
                      breakpoints={{
                        1200: {
                          slidesPerView: 4,
                          spaceBetween: 60,
                        },
                        1000: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                        700: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                        500: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        350: {
                          slidesPerView: 1.5,
                          spaceBetween: 20,
                        },
                        250: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <TeamCards
                          img={teamImg1}
                          title="@Dwane_John"
                          subtitle="the leader"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <TeamCards
                          img={teamImg2}
                          title="@Maria_sen"
                          subtitle="Programmer"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <TeamCards
                          img={teamImg3}
                          title="@Seth_rollins"
                          subtitle="Marketing Genius"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <TeamCards
                          img={teamImg4}
                          title="@Roman_reigns"
                          subtitle="Art Director"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <TeamCards
                          img={teamImg1}
                          title="@Dwane_John"
                          subtitle="the leader"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <TeamCards
                          img={teamImg2}
                          title="@Maria_sen"
                          subtitle="Programmer"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <TeamCards
                          img={teamImg3}
                          title="@Seth_rollins"
                          subtitle="Marketing Genius"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <TeamCards
                          img={teamImg4}
                          title="@Roman_reigns"
                          subtitle="Art Director"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>

                  <div className="slider-btns mb-100px">
                  <button className="pointer" ref={navigationPrevRef}>
                      {/* <HiArrowNarrowLeft /> */}
                      <i class="fas fa-arrow-circle-left"></i>
                      
                    </button>
                    <button className="pointer" ref={navigationNextRef}>
                      {/* <HiArrowNarrowRight /> */}
                      <i class="fas fa-arrow-circle-right"></i>
                    </button>
                  </div>
                </div>

             
              </div>
            </div>
            </div>
          </div>
          {/* OUR TEAM ENDS */}
        {/* </div>
      </div> */}
    </>
  );
};

export default Team;
