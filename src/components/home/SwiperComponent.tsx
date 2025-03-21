import { Swiper, SwiperSlide } from "swiper/react";

import "../../style/Swiper.css";

interface SwiperComponentProps {
  children: React.ReactNode;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ children }) => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};

export default SwiperComponent;
