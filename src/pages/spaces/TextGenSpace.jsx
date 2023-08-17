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
            <FormControl border="2px" px={8} py={8} bg={"gray.900"}>
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
                placeholder="Classic, Pop, Blues, Phonk, Rock..."
                variant={"unstyled"}
                border={`2px groove ${colors.boxBorder}`}
                p={4}
                fontFamily={fonts.parafont}
                fontSize={{ base: "md" }}
                fontWeight="bold"
                color={colors.fontLightColor}
              />
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

          <GridItem pos="relative" bg={"gray.900"}>
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

const headers = ["Describe your music", "File"];

export default TextGenSpace;
