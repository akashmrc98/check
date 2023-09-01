import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import HeadLines2 from "../common/HeadLine_2";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import { homeUtilsData } from "../../data/homeData";

import { AiOutlineDownCircle } from "react-icons/ai";
import BG from "/public/bg/11.jpg";
import { FaAddressBook } from "react-icons/fa";
import Logo from "/public/logo_main.png";
import Mainbutton from "../common/MainButton";

function TitleComponent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (index === 4) setIndex(0);
      else setIndex(index + 1);
    }, 4000);
  }, [index]);

  return (
    <Box
      pt={{ base: 32, xl: 24 }}
      width="100%"
      pos="relative"
      w="100vw"
      backgroundImage={BG}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundBlendMode="color"
      minH={{ base: "auto", xl: "100vh" }}
      backgroundPosition="center"
    >
      <Box zIndex={9999999999} pos="absolute" top="4%" right="5%">
        <Flex cursor={"pointer"}>
          <Mainbutton />
        </Flex>
      </Box>

      <Box pos="absolute" top="2%" left="5%">
        <Flex
          display={{ base: "none", xl: "flex" }}
          justifyContent={"flex-end"}
        >
          <Image maxW="180px" src={Logo} />
        </Flex>
      </Box>
      <Model visible={true} />
      <ScrollDown />
      <SideBar />
      <Flex
        py={{ base: 24, xl: 0 }}
        height={{ base: "auto", xl: "80vh" }}
        zIndex={9999999999}
        flexDirection="column"
        justifyContent={"space-evenly"}
        width={{ base: "100%", xl: "90%" }}
        rowGap={{ base: 0, xl: "5rem" }}
        mx={{ base: 0, xl: "auto" }}
      >
        <Flex>
          <HeadLines2 />{" "}
        </Flex>
      </Flex>
      <Model />
    </Box>
  );
}

export default TitleComponent;

function ScrollDown() {
  return (
    <Box
      bottom={{ xl: "15%", "2xl": "5%" }}
      width="100vw"
      pos={"absolute"}
      zIndex={999}
      minH="25vh"
      justifyContent="center"
      cursor={"pointer"}
      display={{ base: "none", xl: "flex" }}
    >
      <Flex
        flexDirection={"column"}
        alignItems="center"
        rowGap={"1rem"}
        display="flex"
        onClick={() => {
          window.scrollBy(0, 800);
        }}
        justifyContent={"flex-end"}
      >
        <Box
          cursor={"pointer"}
          display={"flex"}
          flexDirection="column"
          justifyContent="center"
          alignItems={"center"}
          className="arrow_move"
        >
          <Text
            fontFamily={fonts.headingFont}
            fontWeight="bold"
            textAlign={"center"}
            bg={colors.bgColor}
            color={colors.highLightColor}
            my={2}
            py={1}
            px={4}
            borderRadius="md"
          >
            EXPLORE RENDERVERSE
          </Text>
          <AiOutlineDownCircle
            size={64}
            color={colors.bgColor}
            cursor="pointer"
          />
        </Box>
      </Flex>
    </Box>
  );
}

function Model(props) {
  return (
    <Box
      display={{
        base: props.visible ? "block" : "none",
        xl: props.visible ? "none" : "block",
      }}
      bottom={"-30%"}
      pos={{ base: "relative", xl: "absolute" }}
      zIndex={400}
      width="100%"
      height={{ base: "auto", xl: "100vh" }}
    >
      <Box
        cursor="pointer"
        mx="auto"
        height={{ lg: "70vh", xl: "85vh", "2xl": "85vh" }}
        width={{ lg: "70vw", xl: "85vw", "2xl": "85vw" }}
      >
        <Spline scene="https://prod.spline.design/1DglKtaHKqrB0uWn/scene.splinecode" />
      </Box>
    </Box>
  );
}

function SideBar() {
  const [hover, setHover] = useState([
    "visible",
    "hidden",
    "hidden",
    "hidden",
    "hidden",
    "hidden",
  ]);
  return (
    <Grid
      display={{ base: "none", xl: "grid" }}
      zIndex={9999999999}
      pos="absolute"
      right="5%"
      top={0}
      bottom={0}
      m={"auto 0"}
    >
      <GridItem
        display={"flex"}
        alignItems="center"
        flexDir={"column"}
        justifyContent="center"
      >
        <Box py={6} px={2} borderRadius="3xl">
          {homeUtilsData.map((h, j) => (
            <Box
              columnGap={"1rem"}
              display={"flex"}
              alignItems={"center"}
              justifyContent="flex-end"
              mb={j === homeUtilsData.length - 1 ? 0 : 3}
              key={j}
              pos="relative"
            >
              <Box
                pos="absolute"
                width="250px"
                right={"130%"}
                style={{
                  textAlign: "center",
                  visibility: hover[j],
                  transition: `all 200ms ease-in-out`,
                }}
              >
                <Box
                  boxShadow={`0px 0px 12px ${colors.highLightColor}`}
                  cursor="pointer"
                  padding="1rem"
                  borderRadius={"md"}
                  className="bg_img"
                >
                  <Text
                    fontFamily={fonts.headingFont}
                    fontSize={{ base: "lg", lg: "xl" }}
                    fontWeight="bold"
                    color={colors.fontLightColorV2}
                    px={2}
                  >
                    {h}
                  </Text>
                </Box>
              </Box>
              <Box
                display={"flex"}
                alignItems="center"
                justifyContent={"center"}
                maxW={16}
                maxH={16}
                minW={16}
                minH={16}
                my={2}
                cursor="pointer"
                borderRadius={j % 2 === 0 ? "200rem" : "md"}
                borderColor={colors.boxBorder}
                transition={"all 200ms ease-in-out"}
                backgroundImage={`radial-gradient(circle, #40f8ff, #00e4ff, #00cfff, #00b7ff, #279eff);`}
                boxShadow={`0px 0px 2px ${colors.bgColor}`}
                _hover={{
                  bg: colors.highLightColor,
                  cursor: "pointer",
                  outline: `7px solid ${colors.highLightColor}`,
                  outlineColor: `rgba(92, 225, 230, .5)`,
                  transition: `all 200ms ease-in-out`,
                }}
                onMouseEnter={() => {
                  let h = hover;
                  h[j] = "visible";
                  setHover([...h]);
                  console.log(h, hover);
                }}
                onMouseLeave={() => {
                  setHover([
                    "hidden",
                    "hidden",
                    "hidden",
                    "hidden",
                    "hidden",
                    "hidden",
                  ]);
                }}
              >
                <FaAddressBook size={32} color={colors.bgColor} />
              </Box>
            </Box>
          ))}
        </Box>
      </GridItem>
    </Grid>
  );
}
