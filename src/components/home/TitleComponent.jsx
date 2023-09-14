import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

import Mainbutton from "../common/MainButton";
import HeadLines2 from "../common/HeadLine_2";
import Spline from "@splinetool/react-spline";

import { homeUtilsData } from "../../data/homeData";

import BG from "/public/bg/11.jpg";
import Logo from "/public/logos/icon_text.webp";

import { Link } from "react-scroll";
import Product from "/public/home/product.png";
import Roadmap from "/public/home/roadmap.png";
import Team from "/public/home/team.png";
import Eco from "/public/home/eco.png";
import Token from "/public/home/token.png";
import { Tilt } from "react-tilt";
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 100, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.2, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: false, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

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
      width="100%"
      pos="relative"
      w="100vw"
      backgroundImage={BG}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundBlendMode="color"
      minH={{ base: "100vh", xl: "100vh" }}
      backgroundPosition="center"
      backgroundColor={`rgba(0,0,0,0.44)`}
    >
      <Box zIndex={999999999999999} pos="absolute" top="4%" right="5%">
        <Flex cursor={"pointer"}>
          <Mainbutton />
        </Flex>
      </Box>

      <Box pos="absolute" top="2%" left="5%">
        <Flex
          display={{ base: "none", xl: "flex" }}
          justifyContent={"flex-end"}
        >
          <Image maxW="320px" src={Logo} />
        </Flex>
      </Box>
      <Model visible={true} />
      <SideBar />
      <Flex
        pt={{ base: 32, xl: 0 }}
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
    </Box>
  );
}

export default TitleComponent;

function Model() {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      cursor="pointer"
      onClick={() => {
        window.scrollBy(0, 800);
      }}
      pos="absolute"
      zIndex={9999999}
      height={{ base: "75vh", xl: "100vh" }}
      width={{ base: "100vw", xl: "100vw" }}
      mx="auto"
      bottom={0}
    >
      <Spline scene="https://prod.spline.design/1DglKtaHKqrB0uWn/scene.splinecode" />
    </Box>
  );
}

function SideBar() {
  const d = ["AI", "ECO", "ROAD", "TOKEN", "TEAM"];
  const imgs = [Product, Eco, Roadmap, Token, Team];
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
            <Link to={d[j]} spy={true} smooth={true} duration={500} key={j}>
              <Box
                columnGap={"1rem"}
                display={"flex"}
                alignItems={"center"}
                justifyContent="flex-end"
                mb={j === homeUtilsData.length - 1 ? 0 : 3}
                pos="relative"
              >
                <Box
                  pos="absolute"
                  width="170px"
                  right={"130%"}
                  style={{
                    textAlign: "center",
                    visibility: hover[j],
                    transition: `all 200ms ease-in-out`,
                  }}
                >
                  <Box
                    boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
                    cursor="pointer"
                    padding="1rem"
                    borderRadius={"md"}
                  >
                    <Text
                      fontFamily={fonts.specialFont}
                      fontSize={{ base: "lg", lg: "xl" }}
                      fontWeight="bolder"
                      color={colors.highLightColor}
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
                  transition={"all 400ms ease-in-out"}
                  onMouseEnter={() => {
                    let h = [
                      "hidden",
                      "hidden",
                      "hidden",
                      "hidden",
                      "hidden",
                      "hidden",
                    ];
                    h[j] = "visible";
                    setHover([...h]);
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
                  <Tilt options={defaultOptions}>
                    <Image src={imgs[j]} />
                  </Tilt>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </GridItem>
    </Grid>
  );
}
