import {
  Box,
  Text,
  Flex,
  GridItem,
  Grid,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Button,
  TabPanel,
} from "@chakra-ui/react";

import { dappData } from "../../data/dappData";
import { colors } from "../../theme/colors.js";
import { fonts } from "../../theme/fonts";

function TabTwo() {
  return (
    <Grid
      borderBottom={`1px solid ${colors.boxBorder}`}
      templateColumns={{ base: "1fr" }}
      pb={{ base: 0, lg: 0 }}
    >
      <GridItem>
        <Box display="grid" rowGap="2rem">
          <Text
            fontFamily={fonts.headingFont}
            fontSize={"2xl"}
            color={colors.highLightColor}
          >
            Integration Setup
          </Text>
          <Tabs borderBottom={"none"} variant={"enclosed"} bg={colors.bgColor}>
            <TabList>
              {dappData.integration.map((i, e) => (
                <Tab
                  key={e}
                  fontSize="xl"
                  fontFamily={fonts.headingFont}
                  fontWeight="bold"
                  color={colors.fontLightColor}
                  _selected={{
                    color: colors.highLightColor,
                    borderBottom: `1px soild ${colors.highLightColor}`,
                  }}
                >
                  {i.lang}
                </Tab>
              ))}
            </TabList>
          </Tabs>
          <TabPanels>
            {dappData.integration.map((i, e) => (
              <TabPanel key={e}>
                <Text
                  pb={4}
                  fontSize={{ base: "xs", lg: "sm" }}
                  fontFamily={fonts.parafont}
                  color={colors.fontLightColorV2}
                >
                  {i.desc}
                </Text>
                <Flex
                  flexDirection={{ base: "column", lg: "row" }}
                  pb={4}
                  columnGap={"1rem"}
                  rowGap="1rem"
                >
                  <Button
                    bg={colors.bgColor}
                    boxShadow={`0 0 4px ${colors.highLightColor}`}
                    color={colors.highLightColor}
                    _hover={{
                      color: colors.bgColor,
                      bg: colors.highLightColor,
                    }}
                    fontFamily={fonts.headingFont}
                  >
                    DOWNLOAD INTEGRATION FILES
                  </Button>
                  <Button
                    _hover={{
                      bg: colors.bgColor,
                      boxShadow: `0px 0px 4px ${colors.fontLightColorV2}`,
                    }}
                    color={colors.fontLightColorV2}
                    fontFamily={fonts.headingFont}
                    variant={"ghost"}
                  >
                    VIEW TUTORIAL
                  </Button>
                </Flex>
                <Text
                  pb={4}
                  fontFamily={fonts.headingFont}
                  fontSize={"2xl"}
                  color={colors.highLightColor}
                >
                  Setting Up Files
                </Text>
                <Box>
                  {i.steps.map((step, f) => (
                    <Box key={f}>
                      <Text
                        fontFamily={fonts.parafont}
                        fontSize={"sm"}
                        fontWeight="bold"
                        color={colors.fontLightColor}
                      >
                        {step.title}
                      </Text>
                      <Box my={2} p={2} bg={"gray.900"}>
                        {step.code.map((s, k) => (
                          <Text
                            key={k}
                            fontFamily={fonts.parafont}
                            fontSize={{ base: "xs", lg: "md" }}
                            fontWeight="bold"
                            color={colors.fontLightColorV2}
                          >
                            {s}
                          </Text>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </TabPanel>
            ))}
          </TabPanels>
        </Box>
      </GridItem>
      <GridItem></GridItem>
    </Grid>
  );
}
export default TabTwo;
