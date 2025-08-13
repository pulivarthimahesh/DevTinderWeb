import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { addUser } from "../utils/store/userSlice";

const Body = () => {
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUser = async () => {
    console.log("Initial user data: " + userData);
    if (!userData) {
      try {
        var res = await axios.get(BASE_URL + "/profile/view", {
          withCredentials: true,
        });
        console.log(res);
        dispatch(addUser(res.data));
      } catch (err) {
        if (err.status == 401) {
          console.log("ERROR: " + err.status);
          navigate("/login");
        } else {
          console.log(err.message);
        }
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <NavBar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Body;
