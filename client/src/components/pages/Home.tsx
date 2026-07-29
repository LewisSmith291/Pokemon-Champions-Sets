import HomeButton from "../atoms/home/HomeButton";
import SetShowcase from "../organisms/SetShowcase";
import "./Home.css"

export default function Home() {


  return (
    <div id="home-menu">
      <div id="hero">
        <h1>This is the hero</h1>
      </div>

      <div id="showcase">
        <h2>Hot Pokemon Sets</h2>
        <div id="showcase-items">
          <SetShowcase displayNumber={1}/>
        </div>
      </div>

      <HomeButton name="create" colour="#C6EFCE" />
      <HomeButton name="browse" colour="#FFE699" />
      <HomeButton name="search" colour="#C198E0" />
      <HomeButton name="discover" colour="#F4B084" />
      <HomeButton name="profile" colour="#FF8FC7" />
    </div>
  )
}