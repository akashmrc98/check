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

import { FaBoxes } from "react-icons/fa";

import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

function ImageGenSpace() {
  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState("");

  function generateMusic() {
    setLoaded(true);
    axios
      .post(
        "https://opai.renderverse.io/image-gen",
        {
          prompt: input,
        },
        {
          responseType: "blob",
        }
      )

      .then((res) => {
        console.log(res.data);
        blobToBase64(res.data).then((c) => {
          console.log(c);
          setSrc(c);
        });
      })
      .then(() => {
        setLoaded(false);
      })
      .catch((e) => console.log(e));
  }

  function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      console.log(_);
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  return (
    <Box minH="100vh" className="bg_img" pt={12}>
      <Box
        mx="auto"
        width={{ base: "100%", lg: "88%", xl: "75%" }}
        pos="relative"
        className="bg_img"
        p={12}
        border="2px"
        boxShadow={`0 0 2px ${colors.highLightColor}`}
      >
        <Box display={"grid"} px={2} pt={8}>
          <Text
            textAlign={"left"}
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            color={colors.highLightColor}
            fontSize={{ base: "3xl" }}
          >
            Image Gen Space
          </Text>
          <Text
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            width="auto"
            color={colors.fontLightColor}
            mx="auto"
            fontSize={{ base: "md" }}
          >
            This app generates Images, Simply enter a any text that you want the
            prompt to be generated based on.
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
            <FormControl border="2px" px={8} py={8} bg={colors.bgColor}>
              <FormLabel
                fontFamily={fonts.headingFont}
                fontSize={{ base: "lg" }}
                fontWeight="bold"
                color={colors.highLightColor}
              >
                Input
              </FormLabel>
              <Input
                value={input}
                onChange={(i) => setInput(i.target.value)}
                placeholder="Muskmelon"
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
                    my={2}
                    cursor="pointer"
                    onClick={() => setInput(h)}
                    key={i}
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

          <GridItem pos="relative" minH="240px" bg={colors.bgColor}>
            <Box bg={colors.bgColor} px={2} py={1} pos="absolute" border="2px">
              <Text
                fontFamily={fonts.parafont}
                fontWeight="bold"
                color={colors.fontLightColorV2}
                fontSize={{ base: "xs" }}
              >
                Image Output
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
            <Image width="100%" objectFit={"contain"} src={src} />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

const headers = [
  "Elon Musk with tesla",
  "Monkey with banana",
  "Tiger with Hat",
  "Apple Tree",
  "Andriod",
  "AI",
];

export default ImageGenSpace;
