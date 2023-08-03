import { Box, Grid, Text } from "@chakra-ui/react";

import { fonts } from "../../../theme/fonts";
import { colors } from "../../../theme/colors";
import { ourSolutionsData } from "../../../data/ourSolutionData";

import HeadLines from "../../common/HeadLine";

function OurSolutionContentComponent() {
  return (
    <Box my={32} width="93.5%" p={{ base: 0, lg: 2 }} mx="auto">
      <Box px={8} py={16}>
        <HeadLines x="-20px" y="-40px" s={1.1} px={24} title="Our Mission" />
      </Box>
      <Grid borderRadius={"xl"}>
        {ourSolutionsData.map((sol, i) => (
          <Box
            borderTop={`1px groove ${colors.boxBorder}`}
            borderBottom={
              i === ourSolutionsData.length - 1
                ? `1px solid ${colors.boxBorder}`
                : "none"
            }
            display={{ base: "grid", lg: "flex" }}
            justifyContent="space-between"
            key={i}
          >
            <Box p={4} width="100%" display={"grid"} rowGap="2rem">
              <Text
                color={colors.highLightColor}
                fontFamily={fonts.headingFont}
                fontSize={{ base: "4xl", lg: "6xl" }}
              >
                {sol.title}
              </Text>
              <Text
                color={colors.boxBorder}
                fontFamily={fonts.parafont}
                fontSize={{ base: "xl", lg: "2xl" }}
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
                  borderRight={{
                    base: `1px groove ${colors.boxBorder}`,
                    lg: "none",
                  }}
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
