import { fonts } from "../theme/fonts";
import { colors } from "../theme/colors";
import { roadmapData } from "../data/RoadmapData";
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
import HeadLines from "../components/HeadLine";

function RoadmapSection() {
  const [is990Px] = useMediaQuery("(min-width: 990px)");
  return (
    <Box maxW="100%">
      <Grid gridTemplateColumns={"1fr 1fr"}>
        <GridItem p={12}>
          <HeadLines desc="" subTitle="TKN" title="ROADMAP" />
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
                border={`1px groove ${colors.boxBorder}`}
                borderLeft={0}
                borderRight={0}
                key={i}
              >
                <Box
                  borderLeft={0}
                  borderRight={0}
                  borderBottom={`1px groove ${colors.boxBorder}`}
                  p={4}
                >
                  <Text
                    color={colors.fontLightColorV2}
                    fontSize={{ base: "sm" }}
                    fontWeight="bold"
                    fontFamily={fonts.headingFont}
                  >
                    {`>`} RDMP {i + 1}
                  </Text>
                  <Text
                    fontFamily={fonts.headingFont}
                    color={colors.highLightColor}
                    fontSize={{ base: "3xl" }}
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

                      <Box display={"grid"}>
                        {p.milestones.map((m, k) => (
                          <Box
                            display={"flex"}
                            justifyContent="space-between"
                            key={k}
                          >
                            <Text
                              fontFamily={fonts.parafont}
                              color={colors.fontLightColor}
                              fontSize={{ base: "md" }}
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

export default RoadmapSection;
