import { Box, Text, Flex, Tag, GridItem, Grid } from "@chakra-ui/react";

import { dappData } from "/src/data/dappData.js";
import { colors } from "/src/theme/colors.js";
import { fonts } from "/src/theme/fonts.js";

function TabOne() {
  return (
    <Grid
      borderBottom={`1px solid ${colors.boxBorder}`}
      templateColumns={{ base: "1fr" }}
      pb={{ base: 0, lg: 12 }}
      rowGap={{ base: "2rem" }}
    >
      <GridItem>
        <Box display="grid" rowGap="2rem">
          <Text
            fontFamily={fonts.headingFont}
            fontSize={"2xl"}
            color={colors.highLightColor}
          >
            Overview
          </Text>
          <Text fontFamily={fonts.parafont} color={colors.fontLightColorV2}>
            {dappData.about}
          </Text>
          <Flex columnGap={"2rem"}>
            <Text
              fontWeight={"bold"}
              fontSize="xl"
              fontFamily={fonts.parafont}
              color={colors.fontLightColorV2}
            >
              Tags :
            </Text>
            <Box
              columnGap={"1rem"}
              display="grid"
              gridTemplateColumns={{
                base: "1fr 1fr",
                md: "1fr 1fr 1fr",
                lg: "1fr 1fr 1fr 1fr 1fr",
              }}
              rowGap="1rem"
              justifyContent={"space-evenly"}
            >
              {dappData.tags.map((tag, i) => (
                <Tag
                  bg={colors.highLightColor}
                  fontWeight={"bold"}
                  fontFamily={fonts.parafont}
                  color={colors.fontLightColorV2}
                  key={i}
                >
                  {tag}
                </Tag>
              ))}
            </Box>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
}
export default TabOne;
