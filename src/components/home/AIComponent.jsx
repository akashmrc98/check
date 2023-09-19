import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { aiSectionData, aiImages } from "../../data/aiSectionData";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

import { fonts } from "../../theme/fonts";
import { colors } from "../../theme/colors";
import HeadLines from "../common/HeadLine";
import AI from "/public/icons/headline/ai.png";

const AIComponent = () => {
  return (
    <Box pos="relative">
      <Grid gridTemplateColumns={"1fr 1fr"}>
        <GridItem display={"grid"} pt={12}>
          <HeadLines
            img={AI}
            desc="UNLEASH THE POWER OF"
            subTitle="AI"
            title="Blockchain"
          />
        </GridItem>
        <GridItem></GridItem>
      </Grid>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { visibility: "visible", opacity: 1, scale: 1 },
          hidden: { visibility: "hidden", opacity: 0, scale: 0 },
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          width="100%"
          py={{ base: 0, lg: 4 }}
        >
          {" "}
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            style={{
              padding: "2rem 0rem",
            }}
            // navigation={isLargerThan800 ? true : false}
            modules={[Autoplay, EffectCoverflow, Navigation]}
            spaceBetween={-60}
            breakpoints={{
              420: {
                slidesPerView: 1,
              },
              990: {
                slidesPerView: 2,
              },
              1366: {
                navigation: true,
                slidesPerView: 3,
              },
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: -10,
              stretch: -60,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            scrollbar={{ draggable: true }}
          >
            {aiSectionData.map((s, i) => (
              <SwiperSlide key={i}>
                <Box
                  boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
                >
                  <GridItem
                    zIndex={4}
                    pos={"relative"}
                    display="grid"
                    gridTemplateColumns={"1fr 9fr"}
                    bg={colors.bgColor}
                  >
                    <Box
                      p={{ base: 2, md: 6, lg: 8 }}
                      boxShadow={`0px 0px 2px ${colors.boxBorder}`}
                      bg={colors.bgColor}
                    >
                      <Text
                        fontFamily={fonts.specialFont}
                        fontSize={"xl"}
                        fontWeight={"bold"}
                        color={colors.fontLightColorV2}
                      >
                        {i + 1}
                      </Text>
                    </Box>
                    <Box
                      display={"flex"}
                      alignItems="center"
                      p={{ base: 2, md: 6, lg: 8 }}
                      bg={colors.bgColor}
                      boxShadow={`0px 0px 2px ${colors.boxBorder}`}
                    >
                      <Text
                        fontFamily={fonts.specialFont}
                        fontSize={{ base: "sm", md: "md", xl: "2xl" }}
                        fontWeight={"bold"}
                        color={colors.fontLightColorV2}
                        px={2}
                      >
                        {s}
                      </Text>
                    </Box>
                  </GridItem>
                  <Box zIndex={9999}>
                    <Image src={aiImages[i]} />
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </motion.div>
    </Box>
  );
};

export default AIComponent;
