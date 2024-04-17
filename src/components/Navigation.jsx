import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box as="nav" p={4}>
      <Link to="/">Index</Link> | <Link to="/home">Home</Link>
    </Box>
  );
}

export default Navigation;
