import { styled, Grid, Box, Avatar, Button, AppBar } from "@mui/material";

export const GridContainer = styled(Grid)(({ theme }) => ({
  height: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  display: "flex",
  padding: "0 20px",
}));

export const Appbar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: '100%'
  },
  
}));

export const GridItem = styled(Grid)(({ theme }) => ({
  // flexDirection: "row",
  // justifyContent: "space-between",
  // alignItems: "center",
  // display: "flex",
  // textAlign: "space-between",
}));

export const LeftContainer = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
export const LogoBox = styled(Box)(({ theme }) => ({
  paddingRight: "20px",
  fontSize: "1.2rem",
  fontWeight: "bold",
  minWidth: "8rem",
  "&:hover": {
    color: "rgb(130, 36, 227)",
    cursor: "pointer",
  },
}));
export const SearchBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
}));

export const GridItemIcon = styled(Grid)(({ theme }) => ({
  // direction: "row",
  // justifyContent: "space-between",
  // alignItems: "center",
}));
export const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("xs")]: {
    display: "flex",
    alignItems: "center",
  },
}));

export const GridItemAvatar = styled(Grid)(({ theme }) => ({
  // flexDirection: "row",
  // justifyContent: "space-between",
  // alignItems: "center",
  // display: "flex",
  // textAlign: "space-between",
}));

export const RightContainer = styled(Box)(({ theme }) => ({
  justifyContent: "flex-end",
  alignItems: "center",
  display: "flex",
}));

export const AvatarBox = styled(Grid)(({ theme }) => ({
  // flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
  [theme.breakpoints.down("xs`")]: {
    display: "flex",
    alignItems: "center",
  },
}));
export const NavSearchIcon = styled(Avatar)(({ theme }) => ({
  backgroundColor: "#383a45 !important",
  boxShadow:
    "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
  "&:hover": {
    cursor: "pointer",
  },
}));
export const NavButtons = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent !important",
  "&:hover": {
    backgroundColor: " #e7edf2 !important",
    // backgroundColor: " #f8f9fa !important",
    color: "#8224e3",
    transform: "scale(1.1, 1.1)",
  },
}));
