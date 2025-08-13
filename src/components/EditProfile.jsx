import React, { useState } from "react";
import FeedCard from "./FeedCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";

const EditProfile = ({ user }) => {
  const { firstName, lastName, about, age, skills, gender, photoUrl } = user;
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName,
    lastName,
    about,
    age,
    skills,
    gender,
    photoUrl,
  });
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    try {
      console.log(formData);
      var res = await axios.patch(BASE_URL + "/profile/edit", formData, {
        withCredentials: true,
      });
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center my-10 mx-10">
          <div className="card card-dash bg-base-300 w-96">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  value={formData.firstName}
                  type="text"
                  className="input"
                  onChange={(e) => {
                    setFormData({ ...formData, firstName: e.target.value });
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  value={formData.lastName}
                  type="text"
                  className="input"
                  onChange={(e) => {
                    setFormData({ ...formData, lastName: e.target.value });
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">PhotoUrl</legend>
                <input
                  value={formData.photoUrl}
                  type="text"
                  className="input"
                  onChange={(e) => {
                    setFormData({ ...formData, photoUrl: e.target.value });
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">About</legend>
                <input
                  value={formData.about}
                  type="text"
                  className="input"
                  onChange={(e) => {
                    setFormData({ ...formData, about: e.target.value });
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Age</legend>
                <input
                  value={formData?.age}
                  type="number"
                  className="input"
                  onChange={(e) => {
                    setFormData({ ...formData, age: e.target.value });
                  }}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender</legend>
                <input
                  value={formData?.gender}
                  type="text"
                  className="input"
                  onChange={(e) => {
                    setFormData({ ...formData, gender: e.target.value });
                  }}
                />
              </fieldset>
              <div className="card-actions justify-center my-2">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <FeedCard user={formData} />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
