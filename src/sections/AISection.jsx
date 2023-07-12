/* eslint-disable react/prop-types */
import { fonts } from "../theme/fonts";
import { colors } from "../theme/colors";

import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { aiSectionData, aiImages } from "../data/AISectionData";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { useMediaQuery } from "@chakra-ui/react";

import HeadLines from "../components/HeadLine";

const AISection = () => {
  const [is990Px] = useMediaQuery("(min-width: 990px)");

  return (
    <Box pos="relative">
      <Grid gridTemplateColumns={"1fr 1fr"}>
        <GridItem p={12}>
          <HeadLines
            desc="UNLEASH THE POWER OF"
            subTitle="TKN"
            title="PRODUCTS"
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
          px={8}
        >
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={is990Px ? 2 : 1}
          >
            {aiSectionData.map((s, i) => (
              <SwiperSlide key={i}>
                <GridItem
                  pos={"relative"}
                  borderColor={colors.boxBorder}
                  display="grid"
                  gridTemplateColumns={"1fr 9fr"}
                >
                  <Box
                    borderTopLeftRadius="xl"
                    p={{ base: 2, md: 6, lg: 8 }}
                    border="1px"
                    borderColor={colors.boxBorder}
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
                    borderTopRightRadius="xl"
                    p={{ base: 2, md: 6, lg: 8 }}
                    border="1px"
                    borderColor={colors.boxBorder}
                  >
                    <Text
                      fontFamily={fonts.parafont}
                      fontSize={{ base: "md" }}
                      fontWeight={"bold"}
                      color={colors.fontLightColorV2}
                    >
                      {s}
                    </Text>
                  </Box>
                </GridItem>
                <Box
                  border={`1px solid ${colors.boxBorder}`}
                  bg={colors.boxBorder}
                  borderBottomRadius="xl"
                >
                  <Image borderBottomRadius={"xl"} src={aiImages[i]} />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </motion.div>
    </Box>
  );
};

export default AISection;
