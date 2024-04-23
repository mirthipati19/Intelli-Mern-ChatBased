import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import SlideEx from "../components/miscellaneous/SlideEx";
import DrawerWithInputAndRadio from "../components/miscellaneous/GptDrawer"; // Import DrawerWithInputAndRadio component

import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <>
            <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
            <SlideEx />
            <DrawerWithInputAndRadio /> {/* Include the DrawerWithInputAndRadio component */}
          </>
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
