import { colors } from "../theme/colors";

import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { fonts } from "../theme/fonts";
import { motion } from "framer-motion";

import HeadLines from "../components/HeadLine";

import { FeaturesData } from "../data/FeaturesData";

function FeaturesSection() {
  return (
    <Box pos="relative">
      <Grid gridTemplateColumns={"1fr"} p={12}>
        <HeadLines desc="UTILITIES" subTitle="TKN" title="Features" />
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
        <Box mx="auto" width={{ base: "100%", md: "80%" }} pos="relative">
          <Swiper
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            style={{
              border: `1px groove ${colors.boxBorder}`,
            }}
          >
            {FeaturesData.map((d, i) => (
              <SwiperSlide key={i}>
                <GridItem
                  backgroundImage={d.img}
                  height="100%"
                  display={"flex"}
                  justifyContent="flex-end"
                  flexDir="column"
                  pos={"relative"}
                  rowGap="1rem"
                  backgroundRepeat={"no-repeat"}
                  backgroundSize="cover"
                  backgroundPosition={"center"}
                  minH="332px"
                >
                  <Box px={4}>
                    <Text
                      textAlign={"left"}
                      fontWeight={"bold"}
                      fontSize={{ base: "3xl" }}
                      fontFamily={fonts.headingFont}
                      color={colors.highLightColor}
                    >
                      {d.title}
                    </Text>
                  </Box>
                  <Box
                    pt={4}
                    boxShadow={`0px 0px 8px ${colors.boxBorder}`}
                    pos="relative"
                  >
                    <Text
                      zIndex={8}
                      px={4}
                      fontFamily={fonts.parafont}
                      color={colors.highLightColor}
                      pb={2}
                    >
                      {d.subTitle}
                    </Text>
                    <Box
                      bg={colors.highLightColor}
                      filter="blur(40px)"
                      pos="absolute"
                      width={"100%"}
                      minH="320px"
                      zIndex={4}
                    ></Box>
                  </Box>
                </GridItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </motion.div>
    </Box>
  );
}

export default FeaturesSection;
