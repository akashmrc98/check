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
      bg={colors.bgColor}
    >
      <Grid px={4} pb={6} rowGap="1rem" pt={{ base: 0, lg: 6 }}>
        <Flex
          rowGap={"1rem"}
          columnGap="2rem"
          alignItems={"start"}
          flexDirection="row"
          justifyContent={"start"}
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
          <Box>
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
            <Text
              color={colors.fontLightColor}
              textAlign={"left"}
              fontFamily={fonts.parafont}
              fontSize={{ base: "xl", lg: "3xl" }}
              fontWeight={{ base: "bold", lg: "normal" }}
            >
              {display_name}
            </Text>
            <Button
              color={colors.bgColor}
              textAlign={"left"}
              fontFamily={fonts.headingFont}
              mt={2}
              fontSize={{ base: "xl", lg: "3xl" }}
              fontWeight={{ base: "bold", lg: "normal" }}
              bg={colors.highLightColor}
              boxShadow={`0px 0px 9px ${colors.highLightColor}`}
              _hover={{ bg: colors.boxBorder, color: colors.highLightColor }}
            >
              Buy Now
            </Button>
          </Box>
        </Flex>
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
        </Box>
      </GridItem>
    </Grid>
  );
}

export default ModelHeadComponent;
