import { fonts } from "../../theme/fonts";
import { motion } from "framer-motion";
import { colors } from "../../theme/colors";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

import HeadLines from "../common/HeadLine";
import { ecoSystemData } from "../../data/ecoSystemData";

import Ico from "/public/icons/arrow.png";

function EcoSystemComponent() {
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
              border={`1px groove ${colors.boxBorder}`}
              borderTop={{
                base: `1px groove ${colors.boxBorder}`,
                lg: i === 0 ? `1px groove ${colors.boxBorder}` : 0,
              }}
              borderTopRightRadius={{ base: 0, lg: i === 0 ? "xl" : "none" }}
              borderBottomRadius={{
                base: 0,
                lg: i === ecoSystemData.length - 1 ? "xl" : "none",
              }}
              gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
              key={i}
            >
              <GridItem pos="relative">
                <Box
                  height={"52px"}
                  width="52px"
                  border={`1px groove ${colors.boxBorder}`}
                  borderRight="none"
                  left={"-52px"}
                  top={"-2px"}
                  pos="absolute"
                  display={{ base: "none", lg: "flex" }}
                  justifyContent="center"
                  alignItems={"center"}
                  borderTopLeftRadius="xl"
                  borderBottomLeftRadius={"xl"}
                  boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
                  className="bg_img"
                >
                  <Text
                    fontFamily={fonts.parafont}
                    color={colors.fontLightColor}
                    fontWeight="bold"
                    fontSize={{ base: "3xl" }}
                  >
                    {i + 1}
                  </Text>
                </Box>
                <Flex px={4} columnGap={"1rem"} alignItems={"center"}>
                  <Image maxH="32px" maxW="32px" src={Ico} />
                  <Text
                    fontFamily={fonts.headingFont}
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
