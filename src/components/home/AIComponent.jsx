import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { aiSectionData, aiImages } from "../../data/aiSectionData";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";

import { useMediaQuery } from "@chakra-ui/react";

import { fonts } from "../../theme/fonts";
import { colors } from "../../theme/colors";
import HeadLines from "../common/HeadLine";

const AIComponent = () => {
  const [is990Px] = useMediaQuery("(min-width: 990px)");

  return (
    <Box pos="relative">
      <Grid gridTemplateColumns={"1fr 1fr"}>
        <GridItem p={12}>
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
          p={{ base: 4, lg: 0 }}
        >
          {" "}
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Navigation, EffectCoverflow]}
            spaceBetween={0}
            slidesPerView={is990Px ? 3 : 1}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: -10,
              stretch: 0,
              depth: 50,
              modifier: 1,
              slideShadows: true,
            }}
          >
            {aiSectionData.map((s, i) => (
              <SwiperSlide key={i}>
                <GridItem
                  zIndex={4}
                  boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
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
                    boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
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
                    // borderLeft={0}
                    // borderRight={0}

                    boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
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
                  boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
                  // borderLeft={0}
                  // borderRight={0}
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
