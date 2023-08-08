import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

const tokenInfo = [
  {
    key: "Name",
    value: "Overpowered AI",
  },

  {
    key: "Tikcer",
    value: "$OPAI",
  },
  {
    key: "Total supply",
    value: "1 billion",
  },
  {
    key: "Type",
    value: "BEP-20",
  },
  {
    key: "Token Address",
    value: "Token Address",
    copy: true,
  },
];

const saleInformation = [
  {
    key: "Sale type",
    value: "Presale",
  },
  {
    key: "Available for sale",
    value: "150 million",
  },
  {
    key: "Price",
    value: "1 OPAI= $0.001",
  },
  {
    key: "Bonus",
    value: "25%",
  },
  {
    key: "Referral",
    value: "5%",
  },
];

export default function TokenInfoComponent() {
  return (
    <Grid
      width={"100%"}
      columnGap="2rem"
      rowGap={"2rem"}
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
    >
      <Box>
        <Text
          textAlign={"center"}
          fontFamily={fonts.headingFont}
          fontWeight={"bolder"}
          fontSize={{ base: "xl", lg: "2xl", xl: "3xl" }}
          my={4}
          color={colors.highLightColor}
        >
          Token Information
        </Text>
        <Box>
          {tokenInfo.map((token, index) => (
            <Box border key={index}>
              <Flex
                bg={colors.bgColor}
                p={3}
                border={`2px dashed ${colors.boxBorder}`}
                borderTopLeftRadius="1vh"
                borderBottomRightRadius="1vh"
                boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
                my={4}
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "sm", lg: "md" }}
                  fontFamily={fonts.headingFont}
                  color={colors.fontLightColor}
                >
                  {token.key}
                </Text>
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "sm", lg: "md" }}
                  fontFamily={fonts.parafont}
                  color={colors.fontLightColorV2}
                >
                  {token.value}
                </Text>
              </Flex>
            </Box>
          ))}
        </Box>
      </Box>

      <Box>
        <Text
          textAlign={"center"}
          fontFamily={fonts.headingFont}
          fontWeight={"bolder"}
          fontSize={{ base: "xl", lg: "2xl", xl: "3xl" }}
          my={4}
          color={colors.highLightColor}
        >
          Sale Information
        </Text>
        <Box>
          {saleInformation.map((token, index) => (
            <Box border key={index}>
              <Flex
                bg={colors.bgColor}
                p={3}
                border={`2px dashed ${colors.boxBorder}`}
                borderTopLeftRadius="1vh"
                borderBottomRightRadius="1vh"
                boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
                my={4}
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "sm", lg: "md" }}
                  fontFamily={fonts.headingFont}
                  color={colors.fontLightColor}
                >
                  {token.key}
                </Text>
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "sm", lg: "md" }}
                  fontFamily={fonts.parafont}
                  color={colors.fontLightColorV2}
                >
                  {token.value}
                </Text>
              </Flex>
            </Box>
          ))}
        </Box>
      </Box>
    </Grid>
  );
}
