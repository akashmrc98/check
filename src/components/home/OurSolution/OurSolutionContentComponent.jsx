import { Box, Grid, Text } from "@chakra-ui/react";

import { fonts } from "../../../theme/fonts";
import { colors } from "../../../theme/colors";
import { ourSolutionsData } from "../../../data/ourSolutionData";

import HeadLines from "../../common/HeadLine";

function OurSolutionContentComponent() {
  return (
    <Box
      my={32}
      border={`2px solid ${colors.boxBorder}`}
      width="92.5%"
      p={2}
      mx="auto"
    >
      <Box px={8} py={16}>
        <HeadLines px={24} title="Our Mission" />
      </Box>
      <Grid borderRadius={"xl"}>
        {ourSolutionsData.map((sol, i) => (
          <Box
            borderTop={`1px groove ${colors.boxBorder}`}
            borderBottom={"0"}
            borderBottomRadius={
              i === ourSolutionsData.length - 1 ? "xl" : "none"
            }
            display={"flex"}
            justifyContent="space-between"
            key={i}
          >
            <Box p={4} width="100%" display={"grid"} rowGap="2rem">
              <Text
                color={colors.highLightColor}
                fontFamily={fonts.headingFont}
                fontSize={{ base: "6xl" }}
              >
                {sol.title}
              </Text>
              <Text
                color={colors.fontLightColorV2}
                fontFamily={fonts.parafont}
                fontSize={{ base: "2xl" }}
              >
                {sol.subTitle}
              </Text>
            </Box>
            <Box width="100%"></Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems="flex-end"
              justifyContent={"center"}
              borderLeft={`1px groove ${colors.boxBorder}`}
              width="100%"
            >
              {sol.tags.map((tag, j) => (
                <Box
                  width="100%"
                  borderBottom={`1px groove ${colors.boxBorder}`}
                  borderTop={
                    j === 0 ? `1px groove ${colors.boxBorder}` : "none"
                  }
                  p={4}
                  key={j}
                >
                  <Text
                    color={colors.fontLightColor}
                    fontFamily={fonts.parafont}
                    fontWeight="bold"
                    textAlign={"right"}
                  >
                    {tag}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default OurSolutionContentComponent;
