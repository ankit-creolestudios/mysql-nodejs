import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigat from "./reactrouter/component/Navigate/Navigat";
import UseNavigate from "./reactrouter/hooks/UseNavigate/UseNavigate";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home
      {/* <Navigat /> */}
      <UseNavigate />
      <div>
        <button onClick={() => navigate(-1)}>1 page back </button>
        <button onClick={() => navigate(1)}>1 page forward </button>
        <button onClick={() => navigate(2)}>2 page forward </button>
      </div>
      <div>
        <a href="/signin">Singin</a>
      </div>
      <div>
        <a href="/register">Signup</a>
      </div>
      <div>
        <Link
          to={{
            pathname: "/about",
            search: "search",
          }}
          state={{ message: "state pass" }}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Home;
