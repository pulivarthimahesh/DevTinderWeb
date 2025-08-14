import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/store/requestsSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      var res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.log(err.message);
    }
  };

  if (!requests) return;

  if (requests.length <= 0)
    return <h1 className="flex justify-center my-10">No requests found!!!</h1>;

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h1 className="text-3xl font-bold text-secondary">Requests</h1>
      {requests.map((request) => {
        let user = request.fromUserId;
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
            <div className="flex gap-4">
              <button
                className="btn btn-primary"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => reviewRequest("accepted", request._id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
