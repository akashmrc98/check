import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Tag,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import axios from "axios";

import { FaBoxes } from "react-icons/fa";
import { ThreeDots } from "react-loader-spinner";
import BG from "/public/bg/7.jpg";

function TextGenSpace() {
  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [promp, setPromp] = useState("");

  function generateMusic() {
    setLoaded(true);
    axios
      .post("https://opai.renderverse.io/prompt-gen", {
        prompt: input,
      })

      .then((res) => {
        console.log(res.data[0]);
        setPromp(res.data[0]);
      })
      .then(() => {
        setLoaded(false);
      })
      .catch((e) => console.log(e));
  }

  return (
    <Box
      backgroundImage={BG}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundBlendMode="color"
      minH={{ base: "auto", xl: "100vh" }}
      backgroundPosition="center"
      pt={12}
    >
      <Box
        mx="auto"
        width={{ base: "100%", lg: "88%", xl: "75%" }}
        pos="relative"
        bg={`rgba(0,0,0,.7)`}
        borderRadius="md"
        boxShadow={`0 0 2px ${colors.highLightColor}`}
        p={12}
      >
        <Box display={"grid"} px={2} pt={8}>
          <Text
            textAlign={"left"}
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            color={colors.highLightColor}
            fontSize={{ base: "3xl" }}
          >
            👨🏻‍🎤 ChatGPT Prompt Generator 👨🏻‍🎤
          </Text>
          <Text
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            width="auto"
            color={colors.fontLightColor}
            mx="auto"
            fontSize={{ base: "md" }}
          >
            This app generates ChatGPT prompts, it’s based on a BART model
            trained on this dataset. 📓 Simply enter a persona that you want the
            prompt to be generated based on. 🧙🏻🧑🏻‍🚀🧑🏻‍🎨🧑🏻‍🔬🧑🏻‍💻🧑🏼‍🏫🧑🏽‍🌾
          </Text>
        </Box>
        <Box
          my={8}
          h={2}
          width="100%"
          border={`1px solid ${colors.boxBorder}`}
        ></Box>
        <Grid
          rowGap="1rem"
          columnGap={"1rem"}
          mx="auto"
          gridTemplateColumns={{
            base: "1fr 1fr",
          }}
        >
          <GridItem>
            <FormControl
              border="2px"
              px={8}
              py={8}
              bg={`rgba(0,0,0,.7)`}
              borderRadius="md"
            >
              <FormLabel
                fontFamily={fonts.headingFont}
                fontSize={{ base: "lg" }}
                fontWeight="bold"
                color={colors.highLightColor}
              >
                Input a persona, e.g. photographer
              </FormLabel>
              <Input
                value={input}
                onChange={(i) => setInput(i.target.value)}
                placeholder="Enter a persona"
                variant={"unstyled"}
                border={`2px groove ${colors.boxBorder}`}
                p={4}
                fontFamily={fonts.parafont}
                fontSize={{ base: "md" }}
                fontWeight="bold"
                color={colors.fontLightColor}
              />
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
                    onClick={() => setInput(h)}
                  >
                    {h}
                  </Tag>
                ))}
              </Box>
            </FormControl>

            <Box py={4}>
              <Button
                width={"100%"}
                size="lg"
                fontSize={{ base: "4xl" }}
                p={8}
                bg={colors.bgColor}
                boxShadow={`0 0 1px ${colors.highLightColor}`}
                color={colors.highLightColor}
                _hover={{
                  color: colors.bgColor,
                  bg: colors.highLightColor,
                }}
                fontFamily={fonts.headingFont}
                borderRadius="none"
                onClick={() => generateMusic()}
              >
                Generate
              </Button>
            </Box>
          </GridItem>

          <GridItem pos="relative" bg={`rgba(0,0,0,.7)`} borderRadius="md">
            <Box px={2} py={1} pos="absolute" border="2px">
              <Text
                fontFamily={fonts.parafont}
                fontWeight="bold"
                color={colors.fontLightColorV2}
                fontSize={{ base: "xs" }}
              >
                Prompt output
              </Text>
            </Box>
            <Flex
              pos={"absolute"}
              zIndex={8}
              alignItems={"center"}
              height="100%"
              width="100%"
              justifyContent={"center"}
            >
              {loaded ? (
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color={colors.highLightColor}
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
              ) : null}
            </Flex>
            <Box
              minH="100%"
              px={4}
              pt={4}
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              flexDirection="column"
            >
              <Text
                fontWeight={"bold"}
                fontFamily={fonts.parafont}
                width="auto"
                color={colors.fontLightColor}
                mx="auto"
                fontSize={{ base: "md" }}
              >
                {promp}
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

const headers = ["Painter", "Actor", "Engineer"];

export default TextGenSpace;
