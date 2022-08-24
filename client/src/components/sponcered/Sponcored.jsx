import { MoreVert } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./Sponcored.css";
import giftImage from '../../img/gift.png'
import AdImg from '../../img/ad.png'
function Sponcored() {
  return (
    <div>
      {" "}
      <Box>
        <Box className="rightbarWrapper">
          <Typography variant="" className="sponsordedText">
            {" "}
            Sponsored
          </Typography>
          <img className="adsImg" src={AdImg} alt="" />
          <Divider
            sx={{ marginBottom: "20px" }}
            className="rightbarDivider"
            variant="middle"
          />
          <Typography variant="" className="sponsordedText">
            Birthdays
          </Typography>
          <Box className="birthdayContainer">
            <img
              className="birthdayImg"
              src={giftImage}
              alt="birthdayIcon"
            />
            <Typography
              className="birthdayText"
              component="span"
              variant="span"
            >
              <b>John</b> and <b>3 others </b> have birthday today.
            </Typography>
          </Box>
          <Divider
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            className="rightbarDivider"
            variant="middle"
          />
          <Box className="contactsContainer">
            <Typography variant="" className="sponsordedText">
              Contacts
            </Typography>
            <MoreVert />
          </Box>
          <Box>
            {Users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Sponcored;
