import React, { useEffect, useState } from "react";
// import "./FollowersCard.css";
import FollowersModal from "../FollowersModal/FollowersModal";
import { getAllUser } from "../../redux/api/UserRequests";
import User from "../User/User";
import { useSelector } from "react-redux";
import {
  FollowersCardContainer,
  ShowMoreBtn,
  SuggestionText,
} from "./StyledFollowersCard";

const FollowersCard = ({ location }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return (
    <FollowersCardContainer className="FollowersCard">
      <SuggestionText>People you may know</SuggestionText>

      {persons.map((person, id) => {
        if (person._id !== user._id) return <User person={person} key={id} />;
      })}
      {!location ? (
        <ShowMoreBtn onClick={() => setModalOpened(true)}>
          Show more
        </ShowMoreBtn>
      ) : (
        ""
      )}

      <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
    </FollowersCardContainer>
  );
};

export default FollowersCard;
