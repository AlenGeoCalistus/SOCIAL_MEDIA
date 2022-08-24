import React, { useState } from "react";
import "./RightSide.css";
// import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
// import NavIcons from "../NavIcons/NavIcons";
import { RightbarContainer } from "./RightbarStyled";
import Sponcored from "../sponcered/Sponcored";

const Rightbar = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <RightbarContainer flex={3} p={2} className="RightSide">
      {/* Side Navbar */}
      <Sponcored />
      {/* <NavIcons /> */}
      {/* TrendCard */}
      {/* <TrendCard /> */}

      {/* Share buttong */}
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </RightbarContainer>
  );
};

export default Rightbar;
