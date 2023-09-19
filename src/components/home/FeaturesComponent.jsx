import { fonts } from "../../theme/fonts";
import { motion } from "framer-motion";
import { colors } from "../../theme/colors";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import SRC from "/public/ai_section/1.webp";

import HeadLines from "../common/HeadLine";

import { Tilt } from "react-tilt";
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
import VISION from "/public/icons/headline/vision.png";
import MISSION from "/public/icons/headline/mission.png";

function FeaturesComponent() {
  return (
    <Box p={4} pos="relative">
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
        <Grid>
          <Grid gridTemplateColumns={{ base: "1fr 0", xl: "1fr 1fr" }}>
            <Flex justifyContent={"flex-start"}>
              <HeadLines
                desc="UTILITIES"
                subTitle="$OPAI"
                title="OUR MISSION"
                img={MISSION}
              />
              <Box></Box>
            </Flex>
          </Grid>
          <Grid
            width="100%"
            justifyContent={"space-between"}
            alignItems="center"
            gridTemplateColumns={{ base: "1fr", xl: "1fr 1fr" }}
            rowGap={{ base: "2rem" }}
            mt={6}
          >
            <Box width="100%">
              <Text
                fontFamily={fonts.headingFont}
                color={colors.highLightColor}
                fontWeight="bold"
                fontSize={{ base: "sm", md: "md", xl: "lg", "2xl": "xl" }}
              >
                Empowering every person on the planet to step into the world of
                Metaverse and {`NFT's`} with next-gen rendering technology
                powered by AI. We strive to deliver the highest quality and
                value possible through simple, easy, and relevant solutions with
                a determination to succeed
              </Text>
            </Box>
            <Box display={"flex"} justifyContent="center" width="100%">
              <Tilt options={defaultOptions}>
                <Image
                  boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
                  borderRadius="xl"
                  maxW={{ base: "300", xl: "512" }}
                  src={SRC}
                />
              </Tilt>
            </Box>
          </Grid>
          <Box my={12}></Box>
          <Grid
            gridTemplateColumns={{ base: "0fr 1fr", xl: "1fr 1fr" }}
            justifyContent=""
          >
            <Box></Box>
            <Flex justifyContent={"flex-end"}>
              <HeadLines
                img={VISION}
                desc="UTILITIES"
                subTitle="$OPAI"
                title="OUR VISION"
              />
            </Flex>
          </Grid>
          <Grid
            width="100%"
            justifyContent={"space-between"}
            alignItems="center"
            gridTemplateColumns={{ base: "1fr", xl: "1fr 1fr" }}
            rowGap={{ base: "2rem" }}
            mt={6}
          >
            <Box display={"flex"} justifyContent="center" width="100%">
              <Tilt options={defaultOptions}>
                <Image
                  boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
                  maxW={{ base: "300", xl: "512" }}
                  src={SRC}
                />
              </Tilt>
            </Box>
            <Box width="100%">
              <Text
                fontFamily={fonts.headingFont}
                color={colors.highLightColor}
                fontWeight="bold"
                fontSize={{ base: "sm", md: "md", xl: "lg", "2xl": "xl" }}
                textAlign={{ base: "left", lg: "right" }}
              >
                With our unique AI-powered application and $RNDV at the heart of
                its economy, Project Renderverse is conquering the metaverse by
                storm. Our state-of-the-art models enable users to transform
                real-world items into high-quality NFTs. Users can mint NFTs,
                purchase merchandise, and play P2E games on Renderverse
                ecosystem.
              </Text>
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}

export default FeaturesComponent;
