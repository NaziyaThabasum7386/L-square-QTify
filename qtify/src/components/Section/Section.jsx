import React, { useEffect, useState }from "react";
import Styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

export default function Section({title , data,filterSource, type }) {
    const [carouselToggle, setCarouselToggle] = useState(true);
    const [filters, setFilters] = useState ([{key: "all", label: "All"}])
    console.log(filters[1])
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0)
    const handleToggle = () => {
       setCarouselToggle((prevState) => !prevState);
     }
     useEffect(() => {
        if(filterSource) {
             filterSource().then((response) => {
                const {data} = response;
                setFilters([...filters, ...data]);
            })
        }
     }, [ ]);
     const showFilters = filters.length > 1;  
     const cardsToRender = data.filter((card) => 
     showFilters && selectedFilterIndex !== 0 ? 
     card.genre.key === filters[selectedFilterIndex].key : card);
    //  const cardsToRender = data.filter((card) => 
    //  showFilters && selectedFilterIndex !== 0 ? 
    //  card.genres.key === filters[selectedFilterIndex].key : card);
    return (
        <div>
           <div className={Styles.header}>
                 <h3>{title}</h3>
                 {!showFilters && (<h4 className={Styles.toggleText} onClick ={handleToggle} > {!carouselToggle ?  "Collapse All": "Show All"}</h4> )}
             </div>

             {showFilters && (
                <div className={Styles.filterWrapper}>
                    <Filters
                        filters = {filters}
                        selectedFilterIndex = {selectedFilterIndex}
                        setSelectedFilterIndex = {setSelectedFilterIndex}
                    />
                </div> 
             )}
            {cardsToRender.length === 0 ? (
                <CircularProgress />
            ):(
                <div className= {Styles.cardWrapper} >
                    {!carouselToggle ? (
                        <div className= {Styles.wrapper}>
                            { cardsToRender.map ((ele) => (
                                <Card data = {ele} type = {type} />
                            ))}
                 </div>
                  ) : (
                        <Carousel data={cardsToRender} renderComponent={(d) => <Card data={d} type={type}/>}/>
                     )}
                </div>
            )}
         </div>
    )
}