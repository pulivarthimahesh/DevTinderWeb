import React from "react";

const FeedCard = ({ user }) => {
  const { firstName, lastName, about, age, skills, gender, photoUrl } = user;
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
            <button className="btn btn-primary mr-2">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
