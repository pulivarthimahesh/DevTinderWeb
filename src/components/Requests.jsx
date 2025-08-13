import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";

const Requests = () => {
  const fetchRequests = async () => {
    try {
      var res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);
  return <div>Requests</div>;
};

export default Requests;
