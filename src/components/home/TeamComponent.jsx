import { fonts } from "../../theme/fonts";
import { colors } from "../../theme/colors";

import { Box, Divider, Grid, GridItem, Image, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { teamData } from "../../data/teamData";

import { useMediaQuery } from "@chakra-ui/react";

import HeadLines from "../../components/common/HeadLine";
import Arrow from "/public/eco_system/link.png";

import LinkedIn from "/public/socials/linkedin.png";
import Twitter from "/public/socials/twitter.png";
import Email from "/public/socials/email.png";

const TeamComponent = () => {
  const [is990Px] = useMediaQuery("(min-width: 990px)");

  function getSocial(link) {
    if (link === "Email") return Email;
    if (link === "LinkedIn") return LinkedIn;
    if (link === "Twitter") return Twitter;
    return Email;
  }

  return (
    <Box pos="relative">
      <Grid gridTemplateColumns={"1fr 1fr"}>
        <GridItem p={12}>
          <HeadLines
            x="-60px"
            y="-40px"
            s={1.1}
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
            style={{ padding: ".2rem" }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Navigation]}
            spaceBetween={0}
            slidesPerView={is990Px ? 3 : 1}
          >
            {teamData.map((s, i) => (
              <SwiperSlide key={i}>
                {() => (
                  <Box>
                    <Box
                      bg={colors.bgColor}
                      border={`1px groove ${colors.boxBorder}`}
                      borderBottom={0}
                      display="flex"
                      justifyContent={"flex-start"}
                      boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
                      alignItems="center"
                      columnGap={"1rem"}
                      px={2}
                    >
                      <Image maxW="42px" maxH="42px" src={Arrow} />
                      <Text
                        py={4}
                        textAlign={"center"}
                        fontFamily={fonts.parafont}
                        fontSize={{ base: "3xl" }}
                        fontWeight={"bold"}
                        color={colors.fontLightColorV2}
                      >
                        {s.name}
                      </Text>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent={"center"}
                      border={`1px groove ${colors.boxBorder}`}
                      boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
                      p={4}
                      px={12}
                      borderTop={0}
                      borderBottom={0}
                    >
                      <Box
                        // bg={colors.bgColor}
                        // borderRadius={"48vh 0vw 48vh 0vw"}
                        // border={`12px solid ${colors.bgColor}`}
                        // boxShadow={`0 0 4px 2px ${colors.highLightColor}`}
                        p={4}
                      >
                        <Image
                          borderRadius={"1vh 12vw 1vh 12vw"}
                          boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
                          border={`12px solid ${colors.bgColor}`}
                          src={s.img}
                          className="corner"
                        />
                      </Box>
                    </Box>
                    <Box
                      border={`1px groove ${colors.boxBorder}`}
                      borderTop={0}
                      boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
                      p={4}
                      bg={colors.bgColor}
                    >
                      <Text
                        fontFamily={fonts.parafont}
                        fontSize={{ base: "2xl" }}
                        fontWeight={"bold"}
                        color={colors.highLightColor}
                        py={1}
                      >
                        {s.role}
                      </Text>
                      <Text
                        py={1}
                        fontFamily={fonts.parafont}
                        fontSize={{ base: "md" }}
                        fontWeight={"bold"}
                        color={colors.boxBorder}
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
