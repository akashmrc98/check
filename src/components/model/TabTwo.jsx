import {
  Box,
  Text,
  Flex,
  GridItem,
  Grid,
  Tabs,
  TabList,
  Tab,
  Button,
} from "@chakra-ui/react";

import { dappData } from "../../data/dappData";
import { colors } from "../../theme/colors.js";
import { fonts } from "../../theme/fonts";

function TabTwo(props) {
  let p = props.url.split("/");
  p = p[p.length - 1];

  return (
    <Grid templateColumns={{ base: "1fr" }} pb={{ base: 0, lg: 0 }}>
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
                {dappData.integration[1].lang}
              </Tab>
            </TabList>
          </Tabs>
          <TabContent dappData={dappData.integration[1]} p={p} />
        </Box>
      </GridItem>
      <GridItem></GridItem>
    </Grid>
  );
}
export default TabTwo;

function TabContent({ dappData, p, url }) {
  return (
    <Box>
      <Text
        pb={4}
        fontSize={{ base: "xs", lg: "sm" }}
        fontFamily={fonts.parafont}
        color={colors.fontLightColorV2}
      >
        {dappData.desc}
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
          onClick={() => {
            fetch(url, {
              mode: "no-cors",
              /*
        * ALTERNATIVE MODE {
        mode: 'cors'
        }
        *
        */
            })
              .then((transfer) => {
                return transfer.blob(); // RETURN DATA TRANSFERED AS BLOB
              })
              .then((bytes) => {
                let elm = document.createElement("a"); // CREATE A LINK ELEMENT IN DOM
                elm.href = URL.createObjectURL(bytes); // SET LINK ELEMENTS CONTENTS
                elm.setAttribute("download", "test.zip"); // SET ELEMENT CREATED 'ATTRIBUTE' TO DOWNLOAD, FILENAME PARAM AUTOMATICALLY
                elm.click(); // TRIGGER ELEMENT TO DOWNLOAD
              })
              .catch((error) => {
                console.log(error); // OUTPUT ERRORS, SUCH AS CORS WHEN TESTING NON LOCALLY
              });
          }}
          _hover={{
            color: colors.bgColor,
            bg: colors.highLightColor,
          }}
          fontFamily={fonts.headingFont}
        >
          DOWNLOAD INTEGRATION FILES
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
        {dappData.steps.map((step, f) => (
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
                  {s} {k === 0 ? `${p}` : ""}
                </Text>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
