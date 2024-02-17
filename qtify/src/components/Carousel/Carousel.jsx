import React, { useEffect} from "react";
import { Navigation } from 'swiper';
import Styles from "./Carousel.module.css";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import LeftCarousel from "./LeftCarousel/LeftCarousel";
import RightCarousel from "./RightCarousel/RightCarousel";

const Controls = ({ data}) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
    }, [data]);
    return <></>;
}

function Carousel({ data, renderComponent }) {
    return (
        <div className= {Styles.wrapper}>
            <Swiper
            style = {{padding : "0px 20px"}}
            initialState = {0}
            modules = {[Navigation]}
            spaceBetween={40}
            slidesPerView = {"auto"}
            allowTouchMove
            >
              <Controls data = {data} />
              <LeftCarousel/>
              <RightCarousel/>
              {data.map ((ele) => (
                <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
              ))}
            </Swiper>
        </div>
    )
}

export default Carousel;