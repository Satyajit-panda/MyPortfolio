import React from "react";
import './App.css';
//components
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousel/my-carouselcomponent";
import TitleMessage from "./components/title-message/title-message.component";


const App =() =>
{
  return (
    <div>
        <MyNavbar/>
        <MyCarousal/>
        <TitleMessage/>
    </div>
  );
}

export default App;
