import { Box, Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";

import { fonts } from "../theme/fonts.js";
import { colors } from "../theme/colors.js";

import TabOne from "../components/model/TabOne";
import TabTwo from "../components/model/TabTwo";
import ModelHeadComponent from "../components/model/HeadComponent.jsx";

function ModelPage() {
  return (
    <Box pos="relative" bg={colors.bgColor}>
      <ModelHeadComponent />
      <Box width={{ base: "100%", lg: "88%" }} mx="auto">
        <Tabs borderBottom={"none"} variant={"enclosed"} bg={colors.bgColor}>
          <TabList>
            <Tab
              fontSize="xl"
              fontFamily={fonts.headingFont}
              fontWeight="bold"
              color={colors.fontLightColor}
              _selected={{
                color: colors.highLightColor,
                borderBottom: `1px soild ${colors.highLightColor}`,
              }}
            >
              About
            </Tab>
            <Tab
              fontSize="xl"
              fontFamily={fonts.headingFont}
              fontWeight="bold"
              color={colors.fontLightColor}
              _selected={{
                color: colors.highLightColor,
                border: `1px soild ${colors.highLightColor}`,
              }}
            >
              Install & Run
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TabOne />
            </TabPanel>
            <TabPanel>
              <TabTwo />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default ModelPage;
