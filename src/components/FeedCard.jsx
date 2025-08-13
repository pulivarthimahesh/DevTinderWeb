import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/store/feedSlice";

const FeedCard = ({ user }) => {
  const dispatch = useDispatch();

  const { _id, firstName, lastName, about, age, skills, gender, photoUrl } =
    user;

  const handleSendConnection = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img src={photoUrl} alt="User" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && (
            <p>
              {age}, {gender.toUpperCase()}
            </p>
          )}
          <p>{about}</p>
          <div className="card-actions justify-center my-2">
            <button
              className="btn btn-primary mr-2"
              onClick={() => handleSendConnection("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleSendConnection("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
