import SideBar from "./partials/SideBar";
import { Link } from "react-router-dom";
import TopNav from "./partials/TopNav";
import axios from "../utils/axios";
import { useEffect, useState } from "react";
import Header from "./partials/Header";
import HorizontalCard from "./partials/HorizontalCard";
import Dropdown from "./partials/Dropdown";
import Loading from "./partials/Loading";

function Home() {
  document.title = "MovieApp | Homepage";
  const [headerWallpaper, setHeaderWallpaper] = useState();
  const [trendings, setTrending] = useState();
  const [category, setCategory] = useState("all");

  const trendingOptions = [
    { text: "All", value: "all" },
    { text: "Movies", value: "movie" },
    { text: "TV Shows", value: "tv" },
  ];

  //get the wallpaper
  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const randomData = data.results[randomIndex];
      setHeaderWallpaper(randomData);
    } catch (error) {
      console.log(error);
    }
  };

  //Get Trending the data
  const getTrendings = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeaderWallpaper();
  }, []);

  useEffect(() => {
    getTrendings();
  }, [category]);

  return ( headerWallpaper && trendings ? 
    (<div className="flex ">
      <SideBar />
      <div className="w-[85%] h-screen relative overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={headerWallpaper} />

        <div className="flex justify-between p-5">
          <h1 className="text-3xl text-zinc-400 font-semibold mb-5">
            Trending
          </h1>
          <Dropdown
            title={category.charAt(0).toUpperCase() + category.slice(1)}
            options={trendingOptions}
            onOptionSelect={setCategory}
          />
        </div>

        <HorizontalCard data={trendings} func={setCategory} />
      </div>
    </div>) : (<Loading/>)
  );
}

export default Home;
