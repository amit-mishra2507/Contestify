import { HStack, Flex } from "@chakra-ui/react";
import React from "react";
import logo from "../images/logopng.png";
import github from "../images/githubpng.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      className="nav-flex"
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Flex gap={"0.5em"} alignItems="center">
        <img src={logo} alt="Logo" className="logo-img" />
      </Flex>
      <HStack className="nav-list" gap="2em">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contests">Contests</Link>
        </li>
      </HStack>
      <Flex gap={"1em"}>
        <a href="link" target="blank">
          <img src={github} alt="Github" className="github-logo" />
        </a>
      </Flex>
    </Flex>
  );
};

export default Navbar;
