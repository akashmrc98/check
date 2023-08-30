import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import HeadLines from "../common/HeadLine";
import HeadLines2 from "../common/HeadLine_2";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import { homeSummaryData, homeUtilsData } from "../../data/homeData";
import { motion } from "framer-motion";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineDownCircle } from "react-icons/ai";
import { aiImages } from "../../data/aiSectionData";
import BG from "/public/bg/7.jpg";

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
      py={{ base: 0, xl: 24 }}
      width="100%"
      minH={{ base: "90vh", xl: "100vh" }}
      pos="relative"
      pt={{ base: 32 }}
      w="100vw"
      backgroundImage={BG}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundBlendMode="color"
    >
      <ScrollDown />
      <Grid
        justifyContent={"space-between"}
        width={{ base: "100%", xl: "100%", "2xl": "92%" }}
        mx="auto"
        p={{ base: 6, xl: 0 }}
        pt={{ base: 0, xl: 12 }}
        templateColumns={{ base: "1fr", xl: "1fr 1fr" }}
        rowGap={{ base: "3rem" }}
        maxH={{ base: "auto", xl: "80vh" }}
        columnGap={{ base: 0, xl: "3rem" }}
      >
        <Grid
          gridTemplateRows={{ base: "1fr 0fr", xl: "1fr 3fr" }}
          alignItems={{ base: "center", xl: "flex-start" }}
          justifyContent={{ base: "center", xl: "flex-start" }}
          width={{ base: "100%" }}
          mx="auto"
        >
          <GridItem width={{ base: "90vw", xl: "auto" }} mx="auto">
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={1}
              spaceBetween={0}
              direction={"vertical"}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              style={{ height: "512px", padding: ".1rem" }}
            >
              {homeSummaryData.map((d, i) => (
                <SwiperSlide key={i}>
                  {({ isActive }) => (
                    <Box>
                      <Image maxW="612px" src={aiImages[i]} />
                      <Text
                        py={4}
                        px={4}
                        color={colors.fontLightColor}
                        fontFamily={fonts.parafont}
                        fontSize={{ base: "xl", lg: "2xl" }}
                        fontWeight="bold"
                        w={{ base: "100%", lg: "80%" }}
                      >
                        {d}
                      </Text>
                    </Box>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </GridItem>
          <Box display={"flex"} justifyContent="flex-start"></Box>
        </Grid>
        <Grid
          alignItems={{ base: "center", xl: "flex-end" }}
          justifyContent={{ base: "center", xl: "flex-end" }}
          gridTemplateRows={{ base: "1fr", xl: "1fr 2fr" }}
          maxH={{ base: "auto", xl: "70vh" }}
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
                  w={{ base: "50%", lg: "100%" }}
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

function Model() {
  return (
    <Box
      display={{ base: "none", xl: "block" }}
      top={{ lg: "25%", xl: "8%", "2xl": "15%" }}
      pos="absolute"
      zIndex={400}
      width="100%"
      height={"100vh"}
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
