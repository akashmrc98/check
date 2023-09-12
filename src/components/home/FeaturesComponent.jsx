import { fonts } from "../../theme/fonts";
import { motion } from "framer-motion";
import { colors } from "../../theme/colors";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import SRC from "/public/ai_section/1.webp";

import HeadLines from "../common/HeadLine";

import Lottie from "lottie-react";
import groovyWalkAnimation from "/public/lottie/2.json";

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
              <Image maxW={{ base: "280", xl: "512" }} src={SRC} />
            </Box>
          </Grid>
          <Box>
            <Box
              my={{ base: 6, lg: 12 }}
              mx="auto"
              maxW={{ base: "280", lg: "420" }}
            >
              <Lottie animationData={groovyWalkAnimation} />
            </Box>
          </Box>
          <Grid
            gridTemplateColumns={{ base: "0fr 1fr", xl: "1fr 1fr" }}
            justifyContent=""
          >
            <Box></Box>
            <Flex justifyContent={"flex-end"}>
              <HeadLines desc="UTILITIES" subTitle="$OPAI" title="OUR VISION" />
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
              <Image maxW={{ base: "280", xl: "512" }} src={SRC} />
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
