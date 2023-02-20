import { Box, FormLabel, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChatState } from "../../context/ChatProvider";

function BackgroundChange() {
  const { setUrl } = ChatState();
  function handleChange(e) {
    console.log(e.target.value);
    setUrl(e.target.value);
  }
  return (
    <div>
      <Box mt="20px">
        <FormLabel textAlign={"center"} color={"white"}>
          Change Background
        </FormLabel>

        <Select bg="white" onChange={handleChange}>
          <option
            value={
              "https://github.com/piyush-eon/mern-chat-app/blob/ca733eec89336b126198c211a24cca9727444f3b/frontend/src/background.png?raw=true"
            }
          >
            default
          </option>
          <option value={"https://wallpaperaccess.com/full/1288076.jpg"}>
            Sky
          </option>
          <option value={"https://cdn.wallpapersafari.com/61/71/Al8i1t.jpg"}>
            Night
          </option>
          <option
            value={
              "https://www.fonewalls.com/wp-content/uploads/2020/02/WhatsApp-Background-Wallpaper-50.jpg"
            }
          >
            Flower
          </option>
          <option
            value={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqYjIT26CTN56rQoWX22DOwA1Mgdrh-Iq4uDfw6kckg&usqp=CAU&ec=48600112"
            }
          >
            Rain
          </option>
        </Select>
      </Box>
    </div>
  );
}

export default BackgroundChange;
