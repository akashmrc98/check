import { fonts } from "../../theme/fonts";
import { motion } from "framer-motion";
import { colors } from "../../theme/colors";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

import HeadLines from "../common/HeadLine";
import { ecoSystemData } from "../../data/ecoSystemData";

import Power from "/public/icons/power.png";
import Vote from "/public/icons/vote.png";
import Stake from "/public/icons/stake.png";
import Token from "/public/icons/token.png";

function EcoSystemComponent() {
  const imgs = [Power, Token, Stake, Vote];
  return (
    <Box pos="relative">
      <Grid gridTemplateColumns={"1fr"} p={0}>
        <HeadLines
          x="-40px"
          y={"-40px"}
          s={1.1}
          desc="UTILITIES"
          subTitle="$OPAI"
          title="ECO-SYSTEM"
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
        {/* <Image src={EcoSystem} /> */}
        <Grid
          mx="auto"
          width={{ base: "100%", lg: "90%" }}
          px={{ base: 0, lg: 12 }}
          pb={{ base: 12 }}
          pt={{ base: 0, xl: 12 }}
        >
          {ecoSystemData.map((e, i) => (
            <Grid
              bg={colors.bgColor}
              gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
              key={i}
            >
              <GridItem pos="relative">
                <Box
                  height={"52px"}
                  width="52px"
                  left={"-52px"}
                  top={"-0px"}
                  pos="absolute"
                  display={{ base: "none", lg: "flex" }}
                  justifyContent="center"
                  alignItems={"center"}
                  className="bg_img"
                  boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
                >
                  <Text
                    fontFamily={fonts.specialFont}
                    color={colors.fontLightColor}
                    fontWeight="bold"
                    fontSize={{ base: "3xl" }}
                  >
                    {i + 1}
                  </Text>
                </Box>
                <Flex px={4} columnGap={"1rem"} alignItems={"center"}>
                  <Image maxH="32px" maxW="32px" src={imgs[i]} />
                  <Text
                    fontFamily={fonts.specialFont}
                    color={colors.fontLightColor}
                    fontWeight="bold"
                    fontSize={{ base: "xl", lg: "3xl" }}
                    p={{ base: 2, xl: 4 }}
                  >
                    {e.title}
                  </Text>
                </Flex>
              </GridItem>
              <Text
                p={{ base: 2, xl: 4 }}
                fontFamily={fonts.parafont}
                color={colors.fontLightColorV2}
                fontWeight="bold"
                fontSize={{ base: "xs", md: "sm" }}
              >
                {e.sub}
              </Text>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}

export default EcoSystemComponent;
