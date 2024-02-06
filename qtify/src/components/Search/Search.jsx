import React from "react";
import style from "./Search.module.css";
import {ReactComponent as SearchIcon} from "../../assets/search-icon.svg";

function Search({placeholder}) {
   const onSubmit = (e) => {
    e.preventDefault();

   }
   return (
    <form className={style.wrapper} onSubmit={onSubmit}>
       <input className={style.search} placeholder = {placeholder} required/>
       <button className={style.searchButton} type ="submit">
        <SearchIcon/>
       </button>
    </form>
   )
}
export default Search;