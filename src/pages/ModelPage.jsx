import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  ModalHeader,
} from "@chakra-ui/react";

import { fonts } from "../theme/fonts.js";
import { colors } from "../theme/colors.js";

import TabOne from "../components/model/TabOne";
import TabTwo from "../components/model/TabTwo";

import ModelHeadComponent from "../components/model/HeadComponent.jsx";

import { useEffect } from "react";
import { useState } from "react";
import { modelsData } from "../data/modelsData.jsx";
import { useParams } from "react-router";

function ModelPage() {
  const params = useParams();

  const [model, setModel] = useState({
    description: "",
    tags: [],
    url: "",
    service_id: "",
    org_id: "",
    contributors: [],
    service_rating: {
      rating: 5,
      total_users_rated: 1,
    },
    media: {
      url: "",
    },
    org_assets_url: {
      hero_image: "",
    },
  });

  useEffect(() => {
    modelsData.map((m) => {
      if (m.service_id === params.model) {
        setModel(m);
        return;
      }
    });
  }, []);
  console.log(model);

  return (
    <Box pt={32} pos="relative" bg={colors.bgColor}>
      <ModelHeadComponent {...model} />
      <Box width={{ base: "100%", lg: "88%" }} mx="auto">
        <Tabs
          py={4}
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
          <TabPanels py={4}>
            <TabPanel>
              <TabOne {...model} />
            </TabPanel>
            <TabPanel>
              <TabTwo {...model} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default ModelPage;
