import {
  Add,
  Chat,
  Home,
  Notifications,
  People,
  VideoSettings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AppBar, Avatar, Badge, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import "./Topbar.css";
import {
  Appbar,
  AvatarBox,
  GridContainer,
  GridItem,
  GridItemAvatar,
  GridItemIcon,
  IconsContainer,
  LeftContainer,
  LogoBox,
  NavButtons,
  RightContainer,
} from "./TopbarStyled";
import { useSelector } from "react-redux";
import InfoCard from "../InfoCard/InfoCard";
import ProfileModal from "../ProfileModal/ProfileModal";

function Topbar() {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [modalOpened, setModalOpened] = useState(false);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Appbar
        color="navbarbg"
        position="static"
        elevation={15}
        sx={{ flexGrow: 1, height: "4rem" }}
      >
        <GridContainer container>
          <GridItem item sm={3} md={3}>
            <LeftContainer>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <LogoBox>say Loud.</LogoBox>
              </Link>
            </LeftContainer>
          </GridItem>
          <GridItemIcon item sx={6} sm={6} md={6}>
            <IconsContainer> 
              <NavButtons
                className="navButtons"
                variant="contained"
                size="large"
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Home />
                </Link>
              </NavButtons>
              <NavButtons
                className="navButtons"
                variant="contained"
                size="large"
              >
                <People />
              </NavButtons>
              <NavButtons
                className="navButtons"
                variant="contained"
                size="large"
              >
                <Add />
              </NavButtons>
              <NavButtons
                className="navButtons"
                variant="contained"
                size="large"
              >
                <VideoSettings />
              </NavButtons>
              <NavButtons
                className="navButtons"
                variant="contained"
                size="large"
              >
                <Notifications />
              </NavButtons>
            </IconsContainer>
          </GridItemIcon>
          <GridItemAvatar item sx={6} sm={3} md={3}>
            <RightContainer>
              <AvatarBox
                sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
              >
                <Badge sx={{ color: "white" }} badgeContent={4}>
                  <Chat sx={{ color: "white", cursor: "pointer" }} />
                </Badge>
                <Avatar
                  sx={{ cursor: "pointer" }}
                  onClick={(e) => setOpen(true)}
                  className="navAvatar"
                  alt="Profile Image"
                  src={
                    user.profilePicture
                      ? serverPublic + user.profilePicture
                      : "defaultProfile.png"
                  }
                  // src="person/noAvatar.png"
                />
              </AvatarBox>
              {/* ============================= User Box ========================= */}
              <AvatarBox
                onClick={(e) => setOpen(true)}
                sx={{ display: { sm: "flex", md: "none" } }}
              >
                <AvatarBox
                  className="navAvatar"
                  alt=""
                  // src="/assets/person/1.jpeg"
                />
              </AvatarBox>
            </RightContainer>
          </GridItemAvatar>
        </GridContainer>
        {/* ========================= Menu ============================== */}
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          // anchorEl={anchorEl}
          open={open}
          onClick={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Link
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>Profile</MenuItem>
          </Link>
          <MenuItem onClick={() => setModalOpened(true)}>Edit Profile</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Appbar>
      {modalOpened && (
        <ProfileModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          data={user}
        />
      )}
    </div>
  );
}

export default Topbar;
