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
      <SetShowcase displayNumber={3} algoType={showcaseAlgo} setAlgoType={setShowcaseAlgo}/>

      <div id="home-actions">
        <HomeButton name="create" colour="#C6EFCE" />
        <HomeButton name="browse" colour="#FFE699" />
        <HomeButton name="search" colour="#C198E0" />
        <HomeButton name="profile" colour="#FF8FC7" />
      </div>
    </div>
  )
}