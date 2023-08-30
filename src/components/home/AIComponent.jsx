import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { aiSectionData, aiImages } from "../../data/aiSectionData";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  EffectCoverflow,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { fonts } from "../../theme/fonts";
import { colors } from "../../theme/colors";
import HeadLines from "../common/HeadLine";

const AIComponent = () => {
  return (
    <Box pos="relative">
      <Grid gridTemplateColumns={"1fr 1fr"}>
        <GridItem display={"grid"} pt={12}>
          <HeadLines
            x="-40px"
            y={"-40px"}
            s={1.2}
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
          px={{ base: 4, lg: 0 }}
          py={{ base: 0, lg: 4 }}
        >
          {" "}
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[
              Autoplay,
              Navigation,
              EffectCoverflow,
              Pagination,
              Scrollbar,
              A11y,
            ]}
            spaceBetween={-60}
            breakpoints={{
              420: {
                slidesPerView: 1,
              },
              990: {
                slidesPerView: 2,
              },
              1366: {
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
            navigation
            scrollbar={{ draggable: true }}
          >
            {aiSectionData.map((s, i) => (
              <SwiperSlide key={i}>
                <GridItem
                  zIndex={4}
                  boxShadow={`0px 0px 2px ${colors.boxBorder}`}
                  pos={"relative"}
                  borderColor={colors.boxBorder}
                  display="grid"
                  gridTemplateColumns={"1fr 9fr"}
                >
                  <Box
                    p={{ base: 2, md: 6, lg: 8 }}
                    border="1px"
                    borderStyle={"groove"}
                    borderColor={colors.boxBorder}
                    boxShadow={`0px 0px 2px ${colors.boxBorder}`}
                    bg={colors.bgColor}

                    // borderLeft={0}
                    // borderRight={0}
                  >
                    <Text
                      fontFamily={fonts.parafont}
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
                    border="1px"
                    borderStyle={"groove"}
                    borderColor={colors.boxBorder}
                    bg={colors.bgColor}
                    boxShadow={`0px 0px 2px ${colors.boxBorder}`}
                  >
                    <Text
                      fontFamily={fonts.parafont}
                      fontSize={{ base: "sm", md: "md", xl: "lg" }}
                      fontWeight={"bold"}
                      color={colors.fontLightColorV2}
                      px={2}
                    >
                      {s}
                    </Text>
                  </Box>
                </GridItem>
                <Box
                  border={`1px groove ${colors.boxBorder}`}
                  bg={colors.boxBorder}
                  boxShadow={`0px 0px 2px ${colors.boxBorder}`}
                >
                  <Image src={aiImages[i]} />
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
