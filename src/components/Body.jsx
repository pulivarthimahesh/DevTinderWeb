import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Body = () => {
  return (
    <>
      <NavBar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Body;
