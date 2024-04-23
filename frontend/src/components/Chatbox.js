import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDirection="column"
      padding={3}
      backgroundColor="white"
      width={{ base: "100%", md: "68%" }}
      height={{ base: "70vh", md: "auto" }}
      borderRadius="lg"
      borderWidth="1px"
      position="fixed"
      top="147px"
      right="10px"
      zIndex="10" // Ensure the Chatbox appears on top of other elements
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
