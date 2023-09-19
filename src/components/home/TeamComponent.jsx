import { fonts } from "../../theme/fonts";
import { colors } from "../../theme/colors";

import { Box, Divider, Grid, GridItem, Image, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { teamData } from "../../data/teamData";

import HeadLines from "../../components/common/HeadLine";
import Arrow from "/public/icons/arrow_2.png";

import LinkedIn from "/public/socials/linkedin.png";
import Twitter from "/public/socials/twitter.png";
import Email from "/public/socials/email.png";
import TEAM from "/public/icons/headline/team.png";

const TeamComponent = () => {
  function getSocial(link) {
    if (link === "Email") return Email;
    if (link === "LinkedIn") return LinkedIn;
    if (link === "Twitter") return Twitter;
    return Email;
  }

  return (
    <Box pos="relative">
      <Grid gridTemplateColumns={"1fr 1fr"}>
        <GridItem>
          <HeadLines
            img={TEAM}
            desc="TEAM"
            subTitle="$OPAI"
            title="Faces behind"
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
        >
          <Swiper
            loop={true}
            modules={[Autoplay, Navigation, EffectCoverflow]}
            spaceBetween={-60}
            style={{ padding: "2rem 0" }}
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
            // navigation={isLargerThan800 ? true : false}
            scrollbar={{ draggable: true }}
          >
            {teamData.map((s, i) => (
              <SwiperSlide key={i}>
                {({ isActive }) => (
                  <Box
                    boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
                    opacity={isActive ? 1 : 0.5}
                  >
                    <Box
                      className="bg_img"
                      display="flex"
                      justifyContent={"flex-start"}
                      alignItems="center"
                      columnGap={"1rem"}
                      px={2}
                    >
                      <Box className="side_anime_x">
                        <Image maxW="42px" maxH="42px" src={Arrow} />
                      </Box>
                      <Text
                        py={4}
                        textAlign={"center"}
                        fontFamily={fonts.specialFont}
                        fontSize={{ base: "xl", lg: "2xl", xl: "3xl" }}
                        fontWeight={"bold"}
                        color={colors.highLightColor}
                      >
                        {s.name}
                      </Text>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent={"center"}
                      p={4}
                      px={12}
                      borderTop={0}
                      borderBottom={0}
                    >
                      <Box p={4}>
                        <Image
                          borderRadius={"1vh 12vw 1vh 12vw"}
                          boxShadow={`0px 0px 2px ${colors.boxBorder}`}
                          border={`12px solid ${colors.bgColor}`}
                          src={s.img}
                          className="corner"
                        />
                      </Box>
                    </Box>
                    <Box borderTop={0} p={4} className="bg_img">
                      <Text
                        fontFamily={fonts.headingFont}
                        fontSize={{ base: "lg", lg: "xl", xl: "2xl" }}
                        fontWeight={"bold"}
                        color={colors.fontLightColor}
                        py={1}
                      >
                        {s.role}
                      </Text>
                      <Text
                        py={1}
                        fontFamily={fonts.parafont}
                        fontSize={{ base: "sm", lg: "md" }}
                        fontWeight={"bold"}
                        color={colors.fontLightColorV2}
                      >
                        {s.bio}
                      </Text>
                      <Divider my={4} mx="auto" width="40%" />
                      <Box
                        display={"flex"}
                        justifyContent="center"
                        columnGap={"1rem"}
                      >
                        {s.links.map((l, j) => (
                          <Box key={j}>
                            <Image
                              maxH="32px"
                              maxW="32px"
                              src={getSocial(l.name)}
                            />
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </motion.div>
    </Box>
  );
};

export default TeamComponent;
