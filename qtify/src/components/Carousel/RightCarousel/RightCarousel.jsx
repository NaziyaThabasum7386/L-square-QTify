import React, { useEffect, useState } from "react";
import Styles from "./RightCarousel.module.css";
import { ReactComponent as RightArrow} from "../../../assets/RightArrow.svg";
import { useSwiper } from "swiper/react";

function RightCarousel() {
      const swiper = useSwiper();
      const [isEnd, setIsEnd] = useState(swiper.isEnd);
    
            useEffect(() => {
                swiper.on("slideChange", function(){
                    setIsEnd(swiper.isEnd);
                })
            }, []);
            return (
                <div className= {Styles.rightNavigation}>
                    {!isEnd && <RightArrow onClick = {()  =>  swiper.slideNext()} />}
                </div>
            )
    }

export default RightCarousel;