import { useToast } from "@chakra-ui/react";
import React, { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);
  const [url, setUrl] = useState(
    "https://github.com/piyush-eon/mern-chat-app/blob/ca733eec89336b126198c211a24cca9727444f3b/frontend/src/background.png?raw=true"
  );
  const toast = useToast();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
  }, []);

  function Toast(title, status, des) {
    toast({
      title: title,
      description: des ? des : "",
      status: status,
      duration: 1000,
      isClosable: true,
      position: "bottom",
    });
  }

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
        Toast,
        url,
        setUrl,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
