import { Outlet } from "react-router-dom";
import { fetchNewAlbums,fetchSongs, fetchTopAlbums} from "./api/api";
import { useEffect,useState } from "react";
import React from 'react'
import Navbar from './components/Navbar/Navbar'


function App() {
  
 const [searchData, useSearchData] = useState({});
  const [data, setData] = useState({});
  const generateData = (key, source) => {
   // console.log(key)
    source().then((data) => {
      setData((prevData) => {
        //console.log(key)
        return {...prevData, [key]: data};
        
      })
    })
  }

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums)
    generateData("newAlbums", fetchNewAlbums)
    generateData("songs", fetchSongs)
  }, []);
  const {topAlbums = [], newAlbums = [] , songs = []} =data;
  return (
  <>
   <div>
    <Navbar searchData = {[...topAlbums, ...newAlbums]}  />
    <Outlet context = {{data: {topAlbums, newAlbums, songs}}}/>
    </div>
    </>
  );
}

export default App;
