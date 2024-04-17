import React from "react";
import { Box, Text } from "@chakra-ui/react";

function HomeScreen() {
  return (
    <Box p={8}>
      <Text fontSize="2xl" color="gray.700">
        Welcome to the Home Screen!
      </Text>
      <Text mt={4} fontSize="lg" color="gray.600">
        PayWise is an app that helps users to budget their money based on their spending habits. It analyzes the user's bank account, credit and debit card transactions to create a personalized budget. The app also suggests ways to save money and sends alerts when a user is getting close to their budget limits.
      </Text>
      <Box mt={6} p={6} border="2px" borderColor="gray.300" borderRadius="lg">
        <Text fontSize="xl" color="gray.700">
          User's Location Map (Placeholder)
        </Text>
      </Box>
    </Box>
  );
}

export default HomeScreen;
