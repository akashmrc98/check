import { fonts } from "../../theme/fonts";
import { colors } from "../../theme/colors";
import { roadmapData } from "../../data/roadmapData";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import Verify from "/public/icons/verify.png";
import Pending from "/public/icons/signal.png";

import HeadLines from "../../components/common/HeadLine";

function RoadmapComponent() {
  const [is990Px] = useMediaQuery("(min-width: 990px)");
  return (
    <Box maxW="100%">
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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={is990Px ? 2 : 1}
      >
        {roadmapData.map((d, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { visibility: "visible", scale: 1, x: 0 },
                hidden: {
                  visibility: "hidden",
                  scale: 1.2,
                  x: i % 2 == 0 ? -320 : 320,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Box
                bg={colors.bgColor}
                border={`1px groove ${colors.boxBorder}`}
                key={i}
              >
                <Box borderBottom={`1px groove ${colors.boxBorder}`} p={4}>
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
                              fontFamily={fonts.headingFont}
                              color={colors.boxBorder}
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
                          mt={6}
                          mb={2}
                        ></Box>
                      ) : null}
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default RoadmapComponent;
