import { motion } from "framer-motion";
import { Box, Grid, Image, Text } from "@chakra-ui/react";

import { fonts } from "../../../theme/fonts";
import { colors } from "../../../theme/colors";
import { howData } from "../../../data/howData";

import Single from "/public/how/6462121fbf7e8d2d4108b668_individual-1.webp";
import Multiple from "/public/how/64621236d8607c1dd175c676_developer-or-business.webp";

import HeadLines from "../../common/HeadLine";
import HowTypeFactory from "./HowTypeFactory";

function HowComponent() {
  return (
    <Box pos="relative">
      <Grid gridTemplateColumns={"1fr 1fr"} p={12}>
        <HeadLines
          x="-24px"
          y="-40px"
          s={1.2}
          desc="UTILITIES"
          subTitle="$OPAI"
          title="HOW"
        />
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
        <Grid mx="auto" width="100%" px={{ base: 2, lg: 0 }} py={12}>
          <Grid gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
            <Box minH="180px">
              <Box
                display={"grid"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Box pt={4} px={24} pb={12} translateY={-32}>
                  <Image maxW="128" src={Single} />
                </Box>
                <Text
                  textAlign={"center"}
                  fontFamily={fonts.parafont}
                  color={colors.fontLightColor}
                  fontSize={{ base: "3xl" }}
                >
                  {howData[0].whom}
                </Text>
              </Box>
              <HowTypeFactory l={0} {...howData[0]} />
            </Box>
            <Box minH="180px">
              <Box
                display={"grid"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Box pt={4} px={24} pb={12} translateY={-32}>
                  <Image maxW="128" src={Multiple} />
                </Box>
                <Text
                  textAlign={"center"}
                  fontFamily={fonts.parafont}
                  color={colors.fontLightColor}
                  fontSize={{ base: "3xl" }}
                >
                  {howData[1].whom}
                </Text>
              </Box>
              <HowTypeFactory l={1} {...howData[1]} />
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}

export default HowComponent;
