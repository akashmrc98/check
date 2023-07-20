import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import HeadLines from "../components/HeadLine";
import { ecoSystemData } from "../data/EcoSystemData";
import { HowData } from "../data/HowData";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

function HowSection() {
  return (
    <Box pos="relative">
      <Grid gridTemplateColumns={"1fr 1fr"} p={12}>
        <HeadLines desc="UTILITIES" subTitle="TKN" title="HOW" />
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
        <Grid mx="auto" width="80%" py={24}>
          <Grid gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
            <Box border={`1px groove ${colors.boxBorder}`} minH="180px">
              <HowTypeFactory l={0} {...HowData[0]} />
            </Box>
            <Box border={`1px groove ${colors.boxBorder}`} minH="180px">
              <HowTypeFactory l={1} {...HowData[1]} />
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}

export default HowSection;

function HowTypeFactory(props) {
  return props.steps.map((s, i) => {
    if (s.type === "SIMPLE")
      return <SimpleBox l={props.l} i={i + 1} key={i} {...s} />;
    if (s.type === "ALTERNATIVE")
      return <AlternateBox l={props.l} i={i + 1} key={i} {...s} />;
    if (s.type === "PLAN")
      return <PlanBox l={props.l} key={i} i={i + 1} {...s} />;
  });
}

function SimpleBox(props) {
  console.log(props);
  return (
    <GridItem
      border={`1px groove ${colors.boxBorder}`}
      borderLeft={0}
      borderRight={0}
      minH="180px"
      pos="relative"
      display="flex"
      flexDir={"column"}
      rowGap="1rem"
    >
      <Text
        maxW="95px"
        border={`1px solid ${colors.boxBorder}`}
        fontFamily={fonts.headingFont}
        color={colors.fontLightColor}
        fontSize={{ base: "lg" }}
        borderTop={0}
        borderLeft={0}
        p={3}
      >
        Step {props.i}
      </Text>
      <Text
        textAlign={"center"}
        fontFamily={fonts.headingFont}
        color={colors.fontLightColor}
        fontSize={{ base: "lg" }}
        borderTop={0}
        borderLeft={0}
      >
        {props.title}
      </Text>
    </GridItem>
  );
}

function AlternateBox(props) {
  return (
    <GridItem
      border={`1px groove ${colors.boxBorder}`}
      minH="180px"
      pos="relative"
      borderLeft={0}
      borderRight={0}
      display="flex"
      flexDir={"column"}
      rowGap="1rem"
      pb={8}
    >
      <Text
        maxW="185px"
        border={`1px solid ${colors.boxBorder}`}
        fontFamily={fonts.headingFont}
        color={colors.fontLightColor}
        fontSize={{ base: "lg" }}
        borderTop={0}
        borderLeft={0}
        p={3}
      >
        {props.quote}
      </Text>
      <Text
        textAlign={"center"}
        fontFamily={fonts.headingFont}
        color={colors.fontLightColor}
        fontSize={{ base: "2xl" }}
        borderTop={0}
        borderLeft={0}
      >
        {props.title}
      </Text>
      <Text
        textAlign={"center"}
        fontFamily={fonts.headingFont}
        color={colors.fontLightColor}
        fontSize={{ base: "md" }}
        borderTop={0}
        borderLeft={0}
      >
        {props.sub}
      </Text>
    </GridItem>
  );
}

function PlanBox(props) {
  return (
    <Box>
      <GridItem
        border={`1px groove ${colors.boxBorder}`}
        minH="180px"
        pos="relative"
        display="flex"
        flexDir={"column"}
        rowGap="1rem"
        pb={8}
      >
        <Text
          maxW="95px"
          border={`1px solid ${colors.boxBorder}`}
          fontFamily={fonts.headingFont}
          color={colors.fontLightColor}
          fontSize={{ base: "lg" }}
          borderTop={0}
          borderLeft={0}
          p={3}
        >
          Step {props.i}
        </Text>
        <Text
          textAlign={"center"}
          fontFamily={fonts.headingFont}
          color={colors.fontLightColor}
          fontSize={{ base: "lg" }}
          borderTop={0}
          borderLeft={0}
        >
          {props.title}
        </Text>
        <Grid py={4} templateColumns={"1fr 1fr"}>
          {props.plans.map((p, ix) => (
            <Box
              rowGap={"1rem"}
              display={"flex"}
              justifyContent={"center"}
              alignItems="center"
              key={ix}
              flexDir="column"
            >
              <Text
                fontWeight={"bold"}
                fontFamily={fonts.headingFont}
                color={colors.fontLightColorV2}
              >
                {p.plan}
              </Text>
              <Text
                fontSize={"xl"}
                fontFamily={fonts.parafont}
                color={colors.fontLightColor}
              >
                {p.type}
              </Text>
              <Text
                fontWeight={"bold"}
                fontSize="xl"
                fontFamily={fonts.headingFont}
                color={colors.fontLightColorV2}
              >
                {p.key}
              </Text>
              <Text fontFamily={fonts.parafont} color={colors.fontLightColor}>
                {p.value}
              </Text>
            </Box>
          ))}
        </Grid>
      </GridItem>
    </Box>
  );
}
