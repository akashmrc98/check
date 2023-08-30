import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import HeadLines2 from "../common/HeadLine_2";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import { homeUtilsData } from "../../data/homeData";
import { motion } from "framer-motion";

import { AiOutlineDownCircle } from "react-icons/ai";
import BG from "/public/bg/11.jpg";
import { FaAddressBook } from "react-icons/fa";

function TitleComponent() {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState([
    "hidden",
    "hidden",
    "hidden",
    "hidden",
    "hidden",
    "hidden",
  ]);

  useEffect(() => {
    setTimeout(() => {
      if (index === 4) setIndex(0);
      else setIndex(index + 1);
    }, 4000);
  }, [index]);

  return (
    <Box
      py={{ base: 0, xl: 24 }}
      width="100%"
      pos="relative"
      pt={{ base: 32 }}
      w="100vw"
      backgroundImage={BG}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundBlendMode="color"
      minH={{ base: "auto", xl: "100vh" }}
      backgroundPosition="center"
    >
      <Model visible={true} />
      <ScrollDown />
      <Grid
        justifyContent={"space-between"}
        width={{ base: "100%", xl: "100%", "2xl": "92%" }}
        mx="auto"
        p={{ base: 6, xl: 0 }}
        pt={{ base: 0, xl: 12 }}
        templateColumns={{ base: "1fr", xl: "1fr 1fr" }}
        rowGap={{ base: "2rem" }}
        columnGap={{ base: 0, xl: "3rem" }}
        px={{ base: 0, xl: 8 }}
      >
        <Grid
          gridTemplateRows={{ base: "1fr 0fr", xl: "0fr 3fr" }}
          alignItems={{ base: "center", xl: "flex-start" }}
          justifyContent={{ base: "center", xl: "flex-start" }}
          width={{ base: "100%", xl: "80%" }}
          mr="auto"
          maxH={{ base: "50vh", xl: "auto" }}
        >
          <Box></Box>
          <GridItem width={{ base: "90vw", xl: "auto" }} mx="auto">
            <Flex justifyContent={{ base: "flex-end", xl: "flex-end" }}>
              <HeadLines2 />
            </Flex>
            {homeUtilsData.map((h, j) => (
              <Box
                zIndex={300}
                fontFamily={fonts.parafont}
                key={j}
                p={4}
                display="flex"
                justifyContent={"space-between"}
                borderColor={colors.boxBorder}
                boxShadow={`0px 0px 2px ${colors.boxBorder}`}
                className="bg_img"
              >
                <Box
                  display={"flex"}
                  justifyContent="flex-end"
                  color={colors.highLightColor}
                  w={{ base: "50%", lg: "20%" }}
                >
                  {`>`}
                </Box>
                <motion.div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { opacity: 1, scale: 1, x: 0 },
                    hidden: { opacity: 0, scale: 0, x: -220 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: j * 0.3,
                  }}
                >
                  <Text
                    fontFamily={fonts.parafont}
                    fontSize={{ base: "sm", lg: "md" }}
                    fontWeight="bold"
                    color={colors.fontLightColorV2}
                    px={4}
                  >
                    {h}
                  </Text>
                </motion.div>
              </Box>
            ))}
          </GridItem>
        </Grid>
        <Grid
          display={{ base: "none", xl: "grid" }}
          alignItems={{ base: "center", xl: "flex-start" }}
          justifyContent={{ base: "center", xl: "flex-end" }}
          templateColumns={{ base: "1fr 0fr", xl: "1fr" }}
          width="40%"
          ml="auto"
          mr={{ xl: 12, "2xl": 6 }}
          zIndex={9999999999}
          position="relative"
        >
          <Box className="c_line"></Box>
          <GridItem pos="relative" width={{ base: "90vw", xl: "30vw" }}>
            {homeUtilsData.map((h, j) => (
              <Box
                columnGap={"1rem"}
                display={"flex"}
                alignItems={"center"}
                justifyContent="flex-end"
                my={8}
                key={j}
              >
                <motion.div
                  style={{
                    textAlign: "center",
                    visibility: hover[j],
                    transition: `all 200ms ease-in-out`,
                  }}
                >
                  <Box
                    cursor="pointer"
                    padding="1rem"
                    borderRadius={"100rem"}
                    boxShadow={"dark-lg"}
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
                </motion.div>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  maxW={"16"}
                  maxH="16"
                  minW={"16"}
                  minH="16"
                  p={4}
                  cursor="pointer"
                  borderRadius="100rem"
                  borderColor={colors.boxBorder}
                  transition={"all 200ms ease-in-out"}
                  backgroundImage={`radial-gradient(circle, #40f8ff, #00e4ff, #00cfff, #00b7ff, #279eff);`}
                  boxShadow={`0px 0px 2px ${colors.bgColor}`}
                  _hover={{
                    padding: "3",
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
          </GridItem>
          <Box display={"flex"} justifyContent="flex-start"></Box>
        </Grid>
      </Grid>
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
      top={{ lg: "25%", xl: "8%", "2xl": "15%" }}
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
