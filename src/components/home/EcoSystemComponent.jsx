import { fonts } from "../../theme/fonts";
import { motion } from "framer-motion";
import { colors } from "../../theme/colors";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

import HeadLines from "../common/HeadLine";
import EcoSystem from "/public/eco_system/main.webp";
import { ecoSystemData } from "../../data/ecoSystemData";

function EcoSystemComponent() {
  return (
    <Box px={{ base: 0, lg: 12 }} pos="relative">
      <Grid gridTemplateColumns={"1fr"} p={12}>
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
        <Grid mx="auto" width={{ base: "100%", lg: "90%" }} py={24}>
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
                <Text
                  fontFamily={fonts.headingFont}
                  color={colors.fontLightColor}
                  fontWeight="bold"
                  fontSize={{ base: "xl", lg: "3xl" }}
                  p={6}
                >
                  {e.title}
                </Text>
              </GridItem>
              <Text
                p={6}
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
