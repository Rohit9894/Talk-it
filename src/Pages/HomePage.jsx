import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import BackgroundChange from "../components/miscellaneous/BackgroundChange";

function HomePage() {
  return (
    <Container maxW={"xl"} centerContent>
      <Box>
        <BackgroundChange />
      </Box>
      <Box
        display="flex"
        justifyContent={"center"}
        w="100%"
        p={3}
        m="40px 0 15px 0"
        bg="white"
        borderRadius={"lg"}
        borderWidth="1px"
      >
        <Text fontSize={"4xl"} fontFamily="work sans" color={"black"}>
          Talk-A-Tive
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth={"1px"}>
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab w="50%">Login</Tab>
            <Tab w="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage;
