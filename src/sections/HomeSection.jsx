import { fonts } from "../theme/fonts";
import { colors } from "../theme/colors";

import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { homeSummaryData, homeUtilsData } from "../data/HomeData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <Box pos="relative">
      <Grid
        rowGap={{ base: "2rem", lg: "0" }}
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      >
        <GridItem>
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={2}
            spaceBetween={0}
            direction={"vertical"}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            style={{ height: "250px" }}
          >
            {homeSummaryData.map((d, i) => (
              <SwiperSlide key={i}>
                {({ isActive, isNext }) => (
                  <Box
                    color={colors.fontLightColorV2}
                    pos={"relative"}
                    borderRight="none"
                    border={isActive ? "1px" : "none"}
                    position="relative"
                    borderTopLeftRadius={{ base: "none", lg: "xl" }}
                  >
                    {isNext ? (
                      <Box
                        bg={colors.bgColor}
                        height="62px"
                        position={"absolute"}
                        width="100%"
                        bottom={0}
                        opacity={0.7}
                        filter={"blur(8px)"}
                      ></Box>
                    ) : null}
                    <Text
                      py={4}
                      px={8}
                      color={colors.fontLightColor}
                      fontFamily={fonts.parafont}
                      fontSize={"lg"}
                      maxW={{ base: "100%", lg: "60%" }}
                    >
                      {d}
                    </Text>
                  </Box>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </GridItem>
        <GridItem>
          {homeUtilsData.map((h, j) => (
            <Box
              zIndex={3}
              border="1px"
              borderColor={colors.boxBorder}
              fontFamily={fonts.parafont}
              borderTop={0}
              borderRight={0}
              key={j}
              p={4}
              display="flex"
              justifyContent={"flex-end"}
              bordert="none"
            >
              <Box>{`>`}</Box>
              <motion.div
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
                  fontSize={"md"}
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
    </Box>
  );
};

export default HomeSection;
