import { Box, Button, ChakraProvider, Container, Divider, Flex, Heading, Icon, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaMoneyBillWave, FaPiggyBank, FaRegBell, FaRegChartBar, FaRegQuestionCircle, FaCog } from "react-icons/fa";

const Index = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.xl">
        <Flex direction={{ base: "column", md: "column" }} align="center" my={10}>
          <Heading as="h1" size="xl" mb={6}>
            PayWise
          </Heading>
          <Text fontSize="lg" mb={2}>
            Smart budgeting based on your spending habits.
          </Text>
          <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidWRnZXRpbmclMjBhcHAlMjBob21lJTIwc2NyZWVufGVufDB8fHx8MTcxMzMyMDI0N3ww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />

          <Box my={8}>
            <Heading as="h2" size="lg">
              App Features
            </Heading>
            <Divider my={4} />

            <VStack spacing={5} align="stretch">
              <Feature icon={FaMapMarkerAlt} title="Home Screen" description="Shows a map with your current location along with a simple menu." />
              <Feature icon={FaMoneyBillWave} title="My Budget" description="View your monthly income, expenses, and suggestions for budget optimization." />
              <Feature icon={FaPiggyBank} title="Saving Tips" description="Discover cheaper items, loyalty programs, and cash-back opportunities." />
              <Feature icon={FaRegChartBar} title="Trends" description="Analyze how your spending patterns have changed over time." />
              <Feature icon={FaRegBell} title="Notifications" description="Set up alerts for budget limits and special offers." />
              <Feature icon={FaCog} title="Settings" description="Customize the app settings and currency preferences." />
              <Feature icon={FaRegQuestionCircle} title="Help & FAQ" description="Access help, FAQs, and a contact form." />
            </VStack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Connect With Us
            </Heading>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Link href="#" isExternal>
                Facebook
              </Link>
              <Link href="#" isExternal>
                Twitter
              </Link>
              <Link href="#" isExternal>
                Instagram
              </Link>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Flex align="center">
        <Icon as={icon} w={6} h={6} mr={4} />
        <Box>
          <Text fontWeight="bold">{title}</Text>
          <Text mt={1}>{description}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
