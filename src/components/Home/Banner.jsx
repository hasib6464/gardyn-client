import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./styles.css";

const Banner = () => {
  return (
    <div>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co.com/gsptzGp/img1.png)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-bold">Succulents Ferns</h1>
                <p className="mb-10">
                  The term "succulent" is awarded to a plant based on what it
                  does, not who its relatives are. Unlike plant groups named for
                  their common evolution a succulent can be any plant—from any
                  scientific family—that stores water in thick, fleshy tissues.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co.com/VWSc7wLL/indor3.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-bold">Tropical plants</h1>
                <p className="mb-10">
                  Tropical plants are defined as species that thrive in warm
                  climates and can include types such as palms, characterized by
                  features like large frost-insensitive terminal meristems,
                  which allow them to expand geographically into polar.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co.com/TMXMQSSm/bonsai2.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-bold">Money plants</h1>
                <p className="mb-10">
                  A bonsai plant is a miniature tree or shrub grown and trained
                  in a shallow container, creating an artistic, aged, and
                  natural-looking miniature replica of a full-sized tree. The
                  term comes from the Japanese words and translating to "tray
                  planting" or "planted in a pot".
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
