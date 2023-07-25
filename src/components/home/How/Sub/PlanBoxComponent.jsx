import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";

import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

function PlanBoxComponent(props) {
  return (
    <Box>
      <GridItem
        border={`1px groove ${colors.boxBorder}`}
        minH="180px"
        pos="relative"
        display="flex"
        flexDir={"column"}
        rowGap="1rem"
        borderTop={0}
        borderRight={0}
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

export default PlanBoxComponent;
