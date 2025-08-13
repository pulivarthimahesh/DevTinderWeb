import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/store/connectionsSlice";

const Connections = () => {
  const feed = useSelector((store) => store.connections);

  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      var res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!feed) return;

  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10">No users found!!!</h1>;

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h1 className="text-3xl font-bold text-secondary">Connections</h1>
      {feed.map((user) => {
        return (
          <div
            key={user._id}
            className="flex gap-5 w-2/3 bg-base-300 my-2 p-4 items-center rounded-md"
          >
            <img src={user.photoUrl} className="w-20 h-20 rounded-full" />
            <div>
              <h3 className="font-bold text-primary text-xl">
                {user.firstName + " " + user.lastName}
              </h3>
              <p className="text-sm">{user.about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
