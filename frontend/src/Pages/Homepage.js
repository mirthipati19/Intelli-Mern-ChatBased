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
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);


//const Homepage = () => {
  return (
    //conatiner helps in adjusting the screens when resized 
    <Container maxW='xl' centerContent>
        <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        >
            <Text
  fontSize={['2xl', '3xl', '4xl']} // Responsive font size
  fontFamily="Pacifico, cursive" // Custom creative font
  fontWeight="bold" // Make the text bold
  color={['purple.500', 'teal.500', 'black']} // Responsive text color
  textAlign="center" // Center-align the text
  fontStyle="italic" // Make the text italicized
  textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)" // Add a subtle text shadow
>
  Intelli Chat
</Text>

        </Box>
        <Box
            bg="white" w="100%" p={4} borderRadius="1g" borderWidth="1px" >
              <Tabs variant='soft-rounded'>
  <TabList mb="1em">
    <Tab width="50%">Login To Chat</Tab>
    <Tab width="50%">Sign Up To Login</Tab>
  </TabList>
  <TabPanels>
    <TabPanel> <Login/></TabPanel>
    <TabPanel> <Signup /></TabPanel>
  </TabPanels>
</Tabs>
            </Box>

    </Container>
  )
}

export default Homepage
