import React from "react";
import { Box, Text } from "@chakra-ui/react";

function HomeScreen() {
  return (
    <Box p={4}>
      <Text fontSize="xl">Welcome to the Home Screen!</Text>
      <Text mt={4} fontSize="md">
        PayWise is an app that helps users to budget their money based on their spending habits. It analyzes the user's bank account, credit and debit card transactions to create a personalized budget. The app also suggests ways to save money and sends alerts when a user is getting close to their budget limits.
      </Text>
      <Box mt={4} p={5} border="1px" borderColor="gray.200" borderRadius="md">
        <Text fontSize="lg">User's Location Map (Placeholder)</Text>
      </Box>
    </Box>
  );
}

export default HomeScreen;
