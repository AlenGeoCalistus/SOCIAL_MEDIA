import styled from "styled-components";
import { Avatar, Box, Grid } from "@mui/material";

export const ProfileCardContainer = styled(Grid)`
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  overflow-x: clip;
  background-color: var(--cardColor);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ProfileImgContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CoverImage = styled("img")`
  width: 100%;
`;

export const ProfileImage = styled(Avatar)`
  width: 6rem !important;
  height: 6rem !important;
  border-radius: 50% !important;
  position: absolute !important;
  bottom: -3rem !important;
  box-shadow: var(--profileShadow) !important;
  &:hover{
    transform: scale(1.1);
    transition: all 200ms ease-in-out
  }
`;

export const ProfileNameContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  gap: 10px;
`;

export const Username = styled("span")`
  font-weight: bold;
`;

export const Email = styled("span")`
  color: var(--gray);
  font-size: 13px;
`;

export const FollowStatusContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const Divider = styled("hr")`
  width: 85%;
  border: 1px solid var(--hrColor);
`;

export const FollowStatus = styled(Box)`
  display: flex;
  gap: 1rem;
  width: 80%;
  justify-content: space-around;
  align-items: center;
`;

export const Follow = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
`;

export const FollowerLength = styled("span")`
  font-weight: bold;
`;

export const Followers = styled("span")`
  color: var(--gray);
  font-size: 13px;
`;

export const VDivider = styled(Box)`
  height: 150%;
  border-left: 2px solid var(--hrColor);
`;

export const MyProfile = styled("span")`
  font-weight: bold;
  color: #8224e3;
  align-self: center;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    color: #2ed573;
    transform: scale(1.1);
    transition: all 200ms ease-in-out
  }
`;
