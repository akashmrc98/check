import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  Tag,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import axios from "axios";

import { FaBoxes, FaForward, FaRobot, FaUser } from "react-icons/fa";
import { Audio } from "react-loader-spinner";
import { useRef } from "react";
import { useEffect } from "react";

import EM from "/public/chat/Elon Musk.webp";
import VB from "/public/chat/Vitalik Buterin.webp";
import CZ from "/public/chat/Changpeng Zhao.webp";
import JD from "/public/chat/Jack Dorsey.webp";
import JS from "/public/chat/Justin Sun.webp";
import BA from "/public/chat/Brian Armstrong.webp";
import MJS from "/public/chat/Michael J. Saylor.webp";
import EV from "/public/chat/Erik Voorhees.jpeg";
import TD from "/public/chat/Tim Draper.webp";
import RV from "/public/chat/Roger Ver.webp";
import TW from "/public/chat/Tyler Winklevoss.webp";
import CW from "/public/chat/Cameron Winklevoss.webp";
import NB from "/public/chat/Nayib Bukele.webp";

let imgs = [EM, VB, CZ, JD, JS, BA, MJS, EV, TD, RV, TW, CW, NB];

const options = [
  "Elon Musk",
  "Vitalik Buterin",
  "Changpeng Zhao",
  "Jack Dorsey",
  "Justin Sun",
  "Brian Armstrong",
  "Michael J. Saylor",
  "Erik Voorhees",
  "Tim Draper",
  "Roger Ver",
  "Tyler Winklevoss",
  "Cameron Winklevoss",
  "Nayib Bukele",
];

function ChatGenSpace() {
  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [promp, setPromp] = useState([]);
  const [person, setPerson] = useState("Elon Musk");
  const [isSelected, setIsSelected] = useState(false);
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [promp, input, isSelected]);

  function generateMusic() {
    if (!loaded) {
      setLoaded(true);
      setPromp([...promp, input]);
      axios
        .post("https://opai.renderverse.io/chat-gen", {
          question: input,
          person: person,
        })
        .then((res) => {
          setPromp([...promp, input, res.data.ans]);

          setInput("");
        })
        .then(() => {
          setLoaded(false);
        })
        .catch((e) => console.log(e));
    }
  }

  return (
    <Box minH="100vh" bg={colors.bgColor}>
      <Box
        mx="auto"
        width={{ base: "100%", lg: "88%", xl: "75%" }}
        pos="relative"
      >
        <Box display={"grid"} px={2} pt={8}>
          <Text
            textAlign={"left"}
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            color={colors.highLightColor}
            fontSize={{ base: "3xl" }}
          >
            👨🏻‍🎤 ChatGPT Assistant 👨🏻‍🎤
          </Text>
          <Text
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            width="auto"
            color={colors.fontLightColor}
            mx="auto"
            fontSize={{ base: "md" }}
            my={4}
          >
            AI Assistant powered By {person}
          </Text>
        </Box>
        {isSelected ? (
          <Flex justifyContent={"center"} mb={8}>
            <Button
              onClick={() => {
                setIsSelected(false);
                setPromp([]);
              }}
            >
              Change AI Assitant
            </Button>
          </Flex>
        ) : null}

        {!isSelected ? (
          <FormControl border="2px" px={4} py={2} bg={"gray.900"}>
            <FormLabel
              variant={"unstyled"}
              border={`2px groove ${colors.boxBorder}`}
              p={4}
              fontFamily={fonts.parafont}
              fontSize={{ base: "md" }}
              fontWeight="bold"
              color={colors.fontLightColor}
            >
              Choose your AI assitance
            </FormLabel>

            {options.map((o, i) => (
              <Flex
                onClick={() => {
                  setPerson(o);
                  setIsSelected(true);
                }}
                cursor={"pointer"}
                alignItems={"center"}
                columnGap={"1rem"}
                my={4}
                key={i}
              >
                <Image
                  maxW="36px"
                  maxH="36px"
                  objectFit={"contain"}
                  src={imgs[i]}
                ></Image>
                <Text
                  fontFamily={fonts.headingFont}
                  color={colors.highLightColor}
                  fontWeight="bold"
                >
                  {o}
                </Text>
              </Flex>
            ))}
          </FormControl>
        ) : null}

        <Grid>
          <GridItem
            overflowY={"scroll"}
            minH="25vw"
            maxH="25vw"
            pos="relative"
            bg={"gray.900"}
          >
            <Box
              ref={ref}
              my={5}
              px={4}
              pt={4}
              display={"flex"}
              flexDirection="column"
            >
              {promp.map((p, i) => (
                <Box columnGap={"2rem"} key={i} display="flex">
                  {i % 2 === 0 ? (
                    <Box
                      display={"flex"}
                      alignItems="center"
                      justifyContent={"flex-end"}
                    >
                      <FaUser size={42} color={colors.highLightColor} />
                    </Box>
                  ) : null}

                  <Text
                    my={4}
                    p={3}
                    bg={colors.bgColor}
                    fontWeight={"bold"}
                    fontFamily={fonts.parafont}
                    width="100%"
                    color={colors.fontLightColor}
                    mx="auto"
                    fontSize={{ base: "sm" }}
                    borderRadius="sm"
                  >
                    {p}
                  </Text>

                  {i % 2 === 0 ? null : (
                    <Box
                      display={"flex"}
                      alignItems="center"
                      justifyContent={"flex-end"}
                    >
                      <FaRobot size={42} color={colors.highLightColor} />
                    </Box>
                  )}
                </Box>
              ))}
              <Flex justifyContent={"center"}>
                {loaded ? (
                  <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                  />
                ) : null}
              </Flex>
            </Box>
          </GridItem>
          <GridItem>
            <FormControl border="2px" px={4} py={2} bg={"gray.900"}>
              <Input
                value={input}
                onChange={(i) => setInput(i.target.value)}
                placeholder="send"
                variant={"unstyled"}
                border={`2px groove ${colors.boxBorder}`}
                p={4}
                fontFamily={fonts.parafont}
                fontSize={{ base: "md" }}
                fontWeight="bold"
                color={colors.fontLightColor}
                onKeyDown={(e) => {
                  console.log(e);
                  if (e.key === "Enter") {
                    generateMusic();
                  }
                }}
              />
              <Box
                cursor={"pointer"}
                pos="absolute"
                zIndex={999}
                right={"2%"}
                top={"30%"}
                onClick={() => generateMusic()}
              >
                <FaForward size={32} color={colors.highLightColor} />
              </Box>
            </FormControl>
          </GridItem>
        </Grid>

        <Box pb={24}>
          <Flex py={4} columnGap=".4rem" alignItems={"center"}>
            <FaBoxes color={colors.fontLightColor} size={18} />
            <Text
              size={"lg"}
              bg={colors.bgColor}
              fontFamily={fonts.parafont}
              color={colors.highLightColor}
              fontWeight="bold"
            >
              Examples
            </Text>
          </Flex>

          {headers.map((h, i) => (
            <Tag
              size={"lg"}
              bg={colors.bgColor}
              fontFamily={fonts.headingFont}
              color={colors.highLightColor}
              boxShadow={`0 0 4px ${colors.highLightColor}`}
              fontWeight="bold"
              mx={2}
              key={i}
            >
              {h}
            </Tag>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const headers = ["Who is founder of tesla", "When was bitcoin invented"];

export default ChatGenSpace;
