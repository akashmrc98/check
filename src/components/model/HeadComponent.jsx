import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";

import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import Logo from "/public/logo_6.png";

function ModelHeadComponent({ url, service_id, display_name, media }) {
  return (
    <Grid
      border={{ base: 0, xl: `2px` }}
      boxShadow={`0px 0px 4px ${colors.highLightColor}`}
      borderColor={colors.boxBorder}
      w={{ base: "100%", lg: "88%" }}
      borderTop={0}
      mx="auto"
      templateColumns={{ base: "1fr", xl: "1fr 1fr" }}
      p={{ base: 2 }}
      className="bg_img"
    >
      <Grid px={4} rowGap="1rem" pt={{ base: 0, lg: 6 }}>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          rowGap="1rem"
          p={{ base: 4, lg: 0 }}
          columnGap={"2rem"}
        >
          <Image
            boxShadow={`0px 0px 4px ${colors.highLightColor}`}
            minW="168"
            minH={"168"}
            maxW="168"
            maxH={"168"}
            objectFit="cover"
            borderRadius="md"
            src={media.url}
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
            <Flex alignItems={"center"} columnGap="1rem">
              <Image
                boxShadow={`0px 0px 2px ${colors.highLightColor}`}
                p={2}
                maxH="16"
                maxW="20"
                src={Logo}
              />
              <Box>
                <Text
                  color={colors.highLightColor}
                  fontWeight="bold"
                  fontFamily={fonts.headingFont}
                  lineHeight=".8"
                  fontSize={{ base: "sm", lg: "md" }}
                >
                  Renderverse AI
                </Text>
                <Text
                  color={colors.fontLightColorV2}
                  fontFamily={fonts.parafont}
                  fontSize={{ base: "lg", lg: "xl" }}
                >
                  Renderverse AI
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Grid>
        <Text
          color={colors.fontLightColor}
          textAlign={"left"}
          fontFamily={fonts.parafont}
          fontSize={{ base: "xl", lg: "3xl" }}
          fontWeight={{ base: "bold", lg: "normal" }}
        >
          {display_name}
        </Text>
      </Grid>

      <GridItem
        borderLeft={{ base: 0, xl: `2px solid ${colors.boxBorder}` }}
        p={{ base: 4, lg: 0 }}
        pt={{ base: 4, lg: 6 }}
      >
        <Box px={{ base: 0, lg: 8 }} display="grid" rowGap="1rem">
          <Flex flexDirection={"column"} columnGap={"2rem"}>
            <Text
              fontSize="2xl"
              fontFamily={fonts.headingFont}
              color={colors.highLightColor}
              mb={4}
            >
              Project Details
            </Text>
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
                  {url}
                </Text>
              </Flex>
              <Flex
                flexDirection={{ base: "column", lg: "row" }}
                justifyContent={"space-between"}
                borderBottom={{
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
                  Overpowered AI
                </Text>
              </Flex>
              <Flex
                flexDirection={{ base: "column", lg: "row" }}
                justifyContent={"space-between"}
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
                  {service_id}
                </Text>
              </Flex>
            </Box>
          </Flex>

          <Box border={"1px"} borderColor={colors.boxBorder}></Box>

          <Flex
            textAlign={"center"}
            justifyContent={"flex-start"}
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
                $OPAI TOKENS
              </Text>
              <Text
                color={colors.fontLightColor}
                fontFamily={fonts.headingFont}
                fontSize="3xl"
              >
                0.000001
              </Text>
            </Box>
            <Box
              border="2px"
              borderColor={colors.boxBorder}
              height={"100%"}
              w={"2px"}
            ></Box>
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
