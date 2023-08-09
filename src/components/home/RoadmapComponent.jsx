import { fonts } from "../../theme/fonts";
import { colors } from "../../theme/colors";
import { roadmapData } from "../../data/roadmapData";
import {
  Box,
  getSlideTransition,
  Grid,
  GridItem,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";

import Verify from "/public/icons/verify.png";
import Pending from "/public/icons/signal.png";

import HeadLines from "../../components/common/HeadLine";
import { useState } from "react";

function RoadmapComponent() {
  const [is990Px] = useMediaQuery("(min-width: 990px)");
  const [is1290Px] = useMediaQuery("(min-width: 1290px)");

  function getSlides() {
    if (is990Px) return 2;
    if (is1290Px) return 3;
    return 1;
  }

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box>
      <Grid gridTemplateColumns={"1fr 1fr"}>
        <GridItem p={12}>
          <HeadLines
            x="-40px"
            y="-40px"
            s={1.2}
            desc=""
            subTitle="$OPAI"
            title="ROADMAP"
          />
        </GridItem>
        <GridItem></GridItem>
      </Grid>

      <Swiper
        loop={true}
        modules={[
          Autoplay,
          Navigation,
          EffectCoverflow,
          Thumbs,
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
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        scrollbar={{ draggable: true }}
      >
        {roadmapData.map((d, i) => (
          <SwiperSlide key={i}>
            {({ isActive, isNext, isPrev, isVisible }) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    visibility: "visible",
                    scale: 1,
                    x: 0,
                  },
                  hidden: {
                    visibility: "hidden",
                    scale: 0.9,
                    x: i % 2 == 0 ? -320 : 320,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                style={{
                  opacity: isActive ? 1 : 0.5,
                  minWidth: isActive ? "120vw%" : "100%",
                }}
              >
                <Box
                  className="bg_img"
                  border={`1px groove ${colors.boxBorder}`}
                  boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
                  key={i}
                >
                  <Box
                    boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
                    borderBottom={`1px groove ${colors.boxBorder}`}
                    p={4}
                  >
                    <Text
                      color={colors.fontLightColorV2}
                      fontSize={{ base: "xl" }}
                      fontWeight="bold"
                      fontFamily={fonts.headingFont}
                    >
                      {`>`} RDMP {i + 1}
                    </Text>
                    <Text
                      fontFamily={fonts.headingFont}
                      color={colors.highLightColor}
                      fontSize={{ base: "5xl" }}
                    >
                      {d.title}
                    </Text>
                  </Box>
                  <Box py={4} display={"grid"}>
                    {d.phase.map((p, j) => (
                      <Box px={4} key={j}>
                        <Box
                          display={"flex"}
                          justifyContent="flex-start"
                          alignItems={"center"}
                        >
                          <Text
                            fontFamily={fonts.headingFont}
                            color={colors.fontLightColor}
                            fontSize={{ base: "4xl" }}
                          >
                            {p.phase}
                          </Text>
                          <Text
                            fontFamily={fonts.headingFont}
                            color={colors.fontLightColorV2}
                            fontSize={{ base: "2xl" }}
                          >
                            ({p.year})
                          </Text>
                        </Box>

                        <Box my={8} rowGap=".4rem" display={"grid"}>
                          {p.milestones.map((m, k) => (
                            <Box
                              display={"flex"}
                              justifyContent="space-between"
                              key={k}
                            >
                              <Text
                                fontFamily={fonts.parafont}
                                color={colors.fontLightColorV2}
                                fontSize={{
                                  base: "sm",
                                  md: "md",
                                  lg: "lg",
                                  xl: "xl",
                                }}
                              >
                                {m}
                              </Text>
                              <Image
                                maxH="18px"
                                maxW="18px"
                                src={p.isCompleted[k] ? Verify : Pending}
                              />
                            </Box>
                          ))}
                        </Box>
                        {j === 0 ? (
                          <Box
                            width="100%"
                            bg={colors.highLightColor}
                            height="4px"
                            borderRadius={"3xl"}
                            boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
                            mt={6}
                            mb={2}
                          ></Box>
                        ) : null}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default RoadmapComponent;
