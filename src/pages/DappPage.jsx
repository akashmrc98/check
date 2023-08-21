import { Box, Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";

import { fonts } from "../theme/fonts.js";
import { colors } from "../theme/colors.js";

import ModelsPage from "./ModelsPage";
import SpacesPage from "./SpacesPage.jsx";

function DappPage() {
  return (
    <Box pt={32} pos="relative" bg={colors.bgColor}>
      <Box width={{ base: "100%", lg: "100%" }} mx="auto">
        <Tabs
          align="center"
          borderBottom={"none"}
          variant={"enclosed"}
          bg={colors.bgColor}
        >
          <TabList>
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
              Spaces
            </Tab>
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
              Models
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SpacesPage />
            </TabPanel>
            <TabPanel>
              <ModelsPage />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default DappPage;
