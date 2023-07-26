import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import man from "../images/Man Top.svg";

const HomePage = () => {
  return (
    <header>
      <Flex flexDirection={"row-reverse"} justifyContent="space-between">
        <img src={man} alt="Man" className="man" />

        <Flex flexDirection={"column"} gap="1em">
          <div class="container">
            All the Coding Contests <br /> in <span>One Place.</span>
          </div>
          <div class="content">
            Know all the upcoming coding contests hosted by major competitive
            programming platforms like CodeChef, Codeforces, TopCoder,
            HackerRank and so much more!
          </div>
        </Flex>
      </Flex>
      <Link to="/contests" className="search">
        Start Searching!
      </Link>
    </header>
  );
};

export default HomePage;
