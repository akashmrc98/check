import { fonts } from "../../theme/fonts";
import { colors } from "../../theme/colors";

import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { homeSummaryData, homeUtilsData } from "../../data/homeData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { motion } from "framer-motion";

import Quote from "/public/eco_system/quote.svg";

function HomeComponent() {
  return (
    <Box pos="relative">
      <Grid
        rowGap={{ base: "2rem", lg: "0" }}
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      >
        <GridItem pos="relative">
          <Box left={"-4%"} top="-30%" pos="absolute">
            <Box
              minH="18px"
              minW="18px"
              border={`1px solid ${colors.boxBorder}`}
              borderRight={0}
              borderBottom={0}
            ></Box>
          </Box>
          <Box left={"-4%"} top="-0%" pos="absolute">
            <Box
              minH="18px"
              minW="18px"
              border={`1px solid ${colors.boxBorder}`}
              borderRight={0}
              borderTop={0}
            ></Box>
          </Box>

          <Box top="-24%" pos="absolute">
            <Box
              border={`1px solid ${colors.boxBorder}`}
              borderLeft={0}
              borderBottom={0}
              minH="60px"
              minW="60px"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Image src={Quote} />
            </Box>
          </Box>
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
            style={{ height: "250px", padding: ".2rem" }}
          >
            {homeSummaryData.map((d, i) => (
              <SwiperSlide key={i}>
                {({ isActive, isNext }) => (
                  <Box
                    color={colors.fontLightColorV2}
                    pos={"relative"}
                    border={isActive ? "1px" : "none"}
                    boxShadow={
                      isActive
                        ? `-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`
                        : 0
                    }
                    borderStyle="groove"
                    position="relative"
                    borderColor={colors.boxBorder}
                    borderRight={0}
                    bg={isActive ? colors.bgColor : "transparent"}
                  >
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
              zIndex={300}
              fontFamily={fonts.parafont}
              key={j}
              p={4}
              display="flex"
              justifyContent={"space-between"}
              border="1px"
              bg={colors.bgColor}
              borderColor={colors.boxBorder}
              borderTop={j === 0 ? `1px groove ${colors.boxBorder}` : "none"}
              boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
              borderRight={0}
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
}

export default HomeComponent;
