import React, { useEffect, useState } from "react";
import Styles from "./LeftCarousel.module.css";
import { ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg";
import { useSwiper } from "swiper/react";

function LeftCarousel() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

        useEffect(() => {
            swiper.on("slideChange", function(){
                setIsBeginning(swiper.isBeginning);
            })
        }, []);
        return (
            <div className= {Styles.leftNavigation}>
                {!isBeginning && <LeftArrow onClick = {()  =>  swiper.slidePrev()} />}
            </div>
        )
}
export default LeftCarousel;