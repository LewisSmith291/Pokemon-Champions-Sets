import HomeButton from "../atoms/home/HomeButton";
import Hero from "../molecules/Hero";
import SetShowcase from "../organisms/SetShowcase";
import "./Home.css"
import { useState } from "react";

export type AlgoType = "hot"|"best"|"new";


export default function Home() {
  const [showcaseAlgo, setShowcaseAlgo] = useState<AlgoType>("hot");

  return (
    <div id="home-menu">
      <Hero />
      <div id="showcase" className="flex flex-col">
        <div className="flex flex-row flex-1 justify-around items-center">
        </div>
        <div id="showcase-items">
          <SetShowcase displayNumber={1} algoType={showcaseAlgo} setAlgoType={setShowcaseAlgo}/>
        </div>
      </div>
      <div id="home-actions">
        <HomeButton name="create" colour="#C6EFCE" />
        <HomeButton name="browse" colour="#FFE699" />
        <HomeButton name="search" colour="#C198E0" />
        <HomeButton name="discover" colour="#F4B084" />
        <HomeButton name="profile" colour="#FF8FC7" />
      </div>
    </div>
  )
}