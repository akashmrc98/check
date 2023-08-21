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
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import axios from "axios";

import { FaForward, FaUser } from "react-icons/fa";
import { useRef } from "react";
import { useEffect } from "react";

import EM from "/public/chat/Elon Musk.png";
import VB from "/public/chat/Vitalik Buterin.png";
import CZ from "/public/chat/Changpeng Zhao.webp";
import JS from "/public/chat/Justin Sun.webp";
import BA from "/public/chat/Brian Armstrong.webp";
import MJS from "/public/chat/Michael J. Saylor.webp";
import TD from "/public/chat/Tim Draper.png";
import TW from "/public/chat/Tyler Winklevoss.webp";

let imgs = [EM, VB, CZ, JS, BA, MJS, TD, TW];

const options = [
  "Elon Musk",
  "Vitalik Buterin",
  "Changpeng Zhao",
  "Justin Sun",
  "Brian Armstrong",
  "Michael J. Saylor",
  "Tim Draper",
  "Tyler Winklevoss",
];

function ChatGenSpace() {
  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [promp, setPromp] = useState([]);
  const [person, setPerson] = useState("Elon Musk");
  const [isSelected, setIsSelected] = useState(false);
  const [index, setIndex] = useState(0);
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
    <Box pb={12} ref={ref} minH="100vh" bg={colors.bgColor}>
      <Box
        mx="auto"
        width={{ base: "100%", lg: "88%", xl: "75%" }}
        pos="relative"
      >
        <Box display={"grid"} px={2} pt={2}>
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
          <FormControl
            boxShadow={`0px 0px 4px 0px ${colors.highLightColor}`}
            border="2px"
            px={4}
            py={2}
            bg={"gray.900"}
          >
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
            <Grid
              rowGap={"2rem"}
              columnGap="2rem"
              gridTemplateColumns={"1fr 1fr 1fr 1fr"}
              p={5}
            >
              {options.map((o, i) => (
                <Flex
                  p={0}
                  m={0}
                  bg={colors.bgColor}
                  onClick={() => {
                    setPerson(o);
                    setIndex(i);
                    setIsSelected(true);
                  }}
                  cursor={"pointer"}
                  alignItems={"center"}
                  columnGap={"1rem"}
                  key={i}
                  borderRadius="md"
                >
                  <Image
                    borderRadius="md"
                    borderRightRadius={"none"}
                    minW="64px"
                    minH="64px"
                    maxW="64px"
                    maxH="64px"
                    objectFit={"cover"}
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
            </Grid>
          </FormControl>
        ) : null}

        <Grid boxShadow={`0px 0px 4px 0px ${colors.highLightColor}`}>
          <GridItem pos="relative" bg={"gray.900"}>
            <Box my={5} px={4} pt={4} display={"flex"} flexDirection="column">
              {promp.map((p, i) => (
                <Box columnGap={"2rem"} key={i} display="flex">
                  {i % 2 === 0 ? (
                    <Box
                      display={"flex"}
                      alignItems="center"
                      justifyContent={"flex-end"}
                    >
                      <FaUser size={32} color={colors.highLightColor} />
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
                      <Image
                        borderRadius={"md"}
                        maxW="48px"
                        maxH="48px"
                        objectFit={"contain"}
                        src={imgs[index]}
                      ></Image>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </GridItem>
          <GridItem>
            {loaded ? (
              <Flex
                pb={8}
                fontSize={{ base: "sm", lg: "lg" }}
                pr={12}
                bg={"gray.900"}
                justifyContent={"flex-end"}
                alignItems="center"
                columnGap={".5rem"}
              >
                <Text
                  fontFamily={fonts.parafont}
                  fontSize={{ base: "md" }}
                  fontWeight="bold"
                  color={colors.highLightColor}
                >
                  {person} is typing
                </Text>
                <div className="typing">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </Flex>
            ) : null}
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
      </Box>
    </Box>
  );
}

export default ChatGenSpace;
