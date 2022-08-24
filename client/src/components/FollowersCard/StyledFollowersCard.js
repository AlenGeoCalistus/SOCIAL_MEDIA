import styled from "styled-components";
import { Avatar, Box, Button } from "@mui/material";

export const Span = styled("span")`
  font-size: 14px;
`;

export const FollowersCardContainer = styled(Box)`
  width: 100%;
  border-radius: 0.7rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  max-height: 10rem;
`;

export const SuggestionText = styled("h3")`
  width: 100%;
  border-radius: 0.7rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: #4f515b;
  max-height: 10rem;
`;

export const FollowerContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FollowerDetailsContainer = styled(Box)`
  display: flex;
  gap: 10px;
`;

export const FollowerImg = styled(Avatar)`
  width: 3.2rem !important;
  height: 3.2rem !important;
  border-radius: 50% !important;
`;

export const FollowerNameContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const FollowerName = styled("span")`
  font-weight: bold;
  color: #29292d;
  font-size: 17px;
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
  }
`;

export const UnfollowBtn = styled(Button)`
  height: 2rem !important;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff !important;
  border: none !important;
  cursor: pointer;
  border-radius: 0.5rem !important;
  background: linear-gradient(90deg, #8224e3 0, #a968ec 50%, #8224e3 100%);
  transition: all 100ms ease-out !important;
  box-shadow: 0 1px 3px 0 rgb(130 36 227 / 50%);
  &:hover {
    color: #fff !important;
    border: none !important;
    cursor: pointer;
    background: linear-gradient(90deg, #8224e3 0, #a968ec 50%, #8224e3 100%);
    box-shadow: 0 1px 3px 0 rgb(130 36 227 / 80%);
  }
`;

export const ShowMoreBtn = styled("span")`
  font-weight: bold;
  color: #8224e3;
  align-self: center;
  cursor: pointer;
  font-size: 20px;
  padding-bottom: 1rem;
  &:hover {
    /* color: #5561e2; */
    color: #2ed573;
    transform: scale(1.1);
    transition: all 200ms ease-in-out
  }
`;
