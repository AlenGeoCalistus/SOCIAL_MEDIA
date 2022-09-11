import React from "react";
import Topbar from "../../components/topbar/Topbar";
// import Topbar from "../components/topbar/Topbar";
// import "./Home.css";
import "./Home.css";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { HomeContainer } from "./HomeStyled";
const Home = () => {
  return (
    <>
      <Topbar />
      <HomeContainer direction="row" spacing={2}>
        <Leftbar />
        <Feed />
        <Rightbar />
      </HomeContainer>
    </>
  );
};

export default Home;
