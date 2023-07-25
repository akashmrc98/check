import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";

import { dappData } from "../../data/dappData";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

import Star from "/public/dapp/star.png";

function ModelHeadComponent() {
  return (
    <Grid
      border={`1px solid ${colors.boxBorder}`}
      w={{ base: "100%", lg: "88%" }}
      borderTop={0}
      mx="auto"
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
    >
      <Grid pt={{ base: 0, lg: 6 }}>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          rowGap="1rem"
          p={{ base: 4, lg: 0 }}
          columnGap={"2rem"}
        >
          <Flex justifyContent={"start"}>
            <Image
              boxShadow={`0px 0px 4px ${colors.boxBorder}`}
              width="128"
              height={"128"}
              ml={{ base: 0, lg: 6 }}
              src={dappData.logo}
            ></Image>
          </Flex>
          <Grid>
            <Flex
              rowGap={"1rem"}
              columnGap="2rem"
              alignItems={"start"}
              flexDirection="column"
              justifyContent={"center"}
            >
              <Flex columnGap="1rem">
                <Box boxShadow={`0px 0px 2px ${colors.boxBorder}`}>
                  <Image
                    borderRadius={"50%"}
                    boxShadow={`1px solid ${colors.boxBorder}`}
                    maxH="12"
                    maxW="16"
                    src={dappData.subLogo}
                  />
                </Box>
                <Box>
                  <Text
                    color={colors.highLightColor}
                    fontWeight="bold"
                    fontFamily={fonts.headingFont}
                    lineHeight=".8"
                    fontSize={{ base: "sm", lg: "md" }}
                  >
                    {dappData.main}
                  </Text>
                  <Text
                    color={colors.fontLightColorV2}
                    fontFamily={fonts.parafont}
                    fontSize={{ base: "lg", lg: "xl" }}
                  >
                    {dappData.sub}
                  </Text>
                </Box>
              </Flex>
              <Box>
                <Flex columnGap="1rem" alignItems="center">
                  {dappData.rating.map((i) => (
                    <Image maxW="8" key={i} src={Star} />
                  ))}
                  <Text
                    color={colors.fontLightColorV2}
                    fontWeight="bold"
                    fontFamily={fonts.parafont}
                  >
                    {`4(${dappData.totalRatins})`}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Grid>
        </Flex>

        <Box borderTop={"2px"} borderColor={colors.boxBorder}></Box>
        <Text
          textAlign={"center"}
          color={colors.fontLightColor}
          fontFamily={fonts.parafont}
          fontSize={{ base: "xl", lg: "3xl" }}
          fontWeight={{ base: "bold", lg: "normal" }}
        >
          {dappData.title}
        </Text>

        <Box display={"flex"} justifyContent="center">
          <Button
            size="lg"
            fontSize={{ base: "4xl" }}
            p={8}
            bg={colors.bgColor}
            boxShadow={`0 0 4px ${colors.highLightColor}`}
            color={colors.highLightColor}
            _hover={{
              color: colors.bgColor,
              bg: colors.highLightColor,
            }}
            fontFamily={fonts.headingFont}
          >
            View Demo
          </Button>
        </Box>
      </Grid>
      <GridItem
        pt={{ base: 0, lg: 6 }}
        borderLeft={`1px solid ${colors.boxBorder}`}
      >
        <Box px={{ base: 0, lg: 8 }} display="grid" rowGap="1rem">
          <Flex flexDirection={"column"} columnGap={"2rem"}>
            <Text
              fontSize="2xl"
              fontFamily={fonts.headingFont}
              color={colors.highLightColor}
            >
              Project Details
            </Text>
            <Box my={4} border={"1px"} borderColor={colors.boxBorder}></Box>
            <Box
              columnGap={"1rem"}
              display="flex"
              justifyContent={"space-evenly"}
              flexDirection="column"
              rowGap={"1rem"}
            >
              <Flex
                flexDirection={{ base: "column", lg: "row" }}
                justifyContent={"space-between"}
                borderBottom={{
                  base: `1px solid ${colors.boxBorder}`,
                  lg: "none",
                }}
              >
                <Text
                  fontFamily={fonts.headingFont}
                  fontWeight="bold"
                  color={colors.fontLightColor}
                >
                  Project Url
                </Text>
                <Text
                  fontFamily={fonts.parafont}
                  color={colors.fontLightColorV2}
                >
                  {dappData.projectUrl}
                </Text>
              </Flex>
              <Flex
                flexDirection={{ base: "column", lg: "row" }}
                justifyContent={"space-between"}
                borderBottom={{
                  base: `1px solid ${colors.boxBorder}`,
                  lg: "none",
                }}
              >
                <Text
                  fontFamily={fonts.headingFont}
                  fontWeight="bold"
                  color={colors.fontLightColor}
                >
                  Organization ID
                </Text>
                <Text
                  fontFamily={fonts.parafont}
                  color={colors.fontLightColorV2}
                >
                  {dappData.organizationId}
                </Text>
              </Flex>
              <Flex
                flexDirection={{ base: "column", lg: "row" }}
                justifyContent={"space-between"}
                borderBottom={{
                  base: `1px solid ${colors.boxBorder}`,
                  lg: "none",
                }}
              >
                <Text
                  fontFamily={fonts.headingFont}
                  fontWeight="bold"
                  color={colors.fontLightColor}
                >
                  Service ID
                </Text>
                <Text
                  fontFamily={fonts.parafont}
                  color={colors.fontLightColorV2}
                >
                  {dappData.serviceId}
                </Text>
              </Flex>
              <Flex
                flexDirection={{ base: "column", lg: "row" }}
                justifyContent={"space-between"}
                borderBottom={{
                  base: `1px solid ${colors.boxBorder}`,
                  lg: "none",
                }}
              >
                <Text
                  fontFamily={fonts.headingFont}
                  fontWeight="bold"
                  color={colors.fontLightColor}
                >
                  Contributors
                </Text>
                <Text
                  fontFamily={fonts.parafont}
                  color={colors.fontLightColorV2}
                >
                  {dappData.contributors[0]}
                </Text>
              </Flex>
            </Box>
          </Flex>

          <Box border={"1px"} borderColor={colors.boxBorder}></Box>

          <Flex
            textAlign={"center"}
            justifyContent={"center"}
            alignItems="center"
            columnGap="2rem"
            py={4}
          >
            <Box>
              <Text
                color={colors.highLightColor}
                fontWeight="bold"
                fontFamily={fonts.parafont}
              >
                TKN TOKENS
              </Text>
              <Text
                color={colors.fontLightColor}
                fontFamily={fonts.headingFont}
                fontSize="3xl"
              >
                0.000001
              </Text>
            </Box>
            <Box height={"100%"} w={"2px"} bg={colors.boxBorder}></Box>
            <Text
              color={colors.fontLightColorV2}
              fontWeight="bold"
              fontFamily={fonts.parafont}
              fontSize="md"
            >
              Fixed Price
            </Text>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default ModelHeadComponent;
