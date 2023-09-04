import { Box, Button, Flex, Grid, Input, Text } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

export default function TokenForm(props) {
  return (
    <Box
      borderRadius={"xl"}
      border={`2px dashed ${colors.boxBorder}`}
      p={4}
      pb={6}
      bg={colors.bgColor}
      minW={{ base: "100%", lg: "70%", xl: "50%" }}
      boxShadow={`-4px -4px 8px -2px ${colors.highLightColor}, 4px 4px 8px -2px ${colors.fontLightColor}, -4px 4px 8px -2px ${colors.highLightColor}, 4px -4px 8px -2px ${colors.fontLightColor}`}
    >
      <Box display="grid" rowGap={".2rem"}>
        <Text
          fontFamily={fonts.headingFont}
          fontSize={{ base: "2xl", lg: "3xl", xl: "4xl" }}
          fontWeight="bolder"
          color={colors.highLightColor}
        >
          Claim OPAI
        </Text>
        {props.isConnected ? (
          <Box>
            <Box
              my={3}
              borderRadius={"xl"}
              border={`2px dashed ${colors.boxBorder}`}
              borderBottomRadius="0"
              p={4}
            >
              <Text
                fontFamily={fonts.parafont}
                fontSize={{ base: "md", lg: "lg", xl: "xl" }}
                fontWeight="bolder"
                color={colors.highLightColor}
              >
                Your Address
              </Text>
              <Flex
                justifyContent={"space-between"}
                alignItems="flex-end"
                pt={2}
              >
                <Input
                  borderRadius={0}
                  outline={0}
                  border={`2px dashed ${colors.boxBorder}`}
                  fontFamily={fonts.parafont}
                  value={props.address}
                  fontSize={{ base: "md", lg: "xl" }}
                  fontWeight="bolder"
                  color={colors.fontLightColorV2}
                  textAlign={"right"}
                />
              </Flex>

              <Box mt={6} width="100%" display={"flex"}>
                <Button
                  fontFamily={fonts.headingFont}
                  fontWeight="bold"
                  bg={colors.bgColor}
                  boxShadow={`0px 0px 4px ${colors.boxBorder}`}
                  color={colors.highLightColor}
                  width="100%"
                  _hover={{ color: colors.bgColor, bg: colors.highLightColor }}
                  fontSize={{ base: "xl" }}
                  textTransform="uppercase"
                >
                  Check Eligibility
                </Button>
              </Box>
            </Box>

            <Text
              fontFamily={fonts.parafont}
              fontSize={{ base: "xs", lg: "sm" }}
              fontWeight="bolder"
              color={colors.fontLightColor}
              textAlign={"right"}
            >
              Min 0.2 BNB | Max 5 BNB
            </Text>

            <Box
              borderRadius={"xl"}
              my={3}
              border={`2px dashed ${colors.boxBorder}`}
              borderTopRadius="0"
              p={4}
            >
              <Flex justifyContent={"space-between"} alignItems="center">
                <Text
                  fontFamily={fonts.parafont}
                  fontSize={{ base: "md", lg: "lg", xl: "xl" }}
                  fontWeight="bolder"
                  color={colors.highLightColor}
                >
                  You Secure
                </Text>
                <Text
                  fontFamily={fonts.headingFont}
                  fontSize={{ base: "xs", lg: "sm" }}
                  fontWeight="bolder"
                  color={colors.fontLightColorV2}
                >
                  Balance : 0 OPAI{" "}
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"} alignItems="flex-end">
                <Flex
                  columnGap={"1rem"}
                  alignItems={"center"}
                  justifyContent="center"
                >
                  <Box color={colors.fontLightColor}>Icon</Box>
                  <Text
                    fontFamily={fonts.parafont}
                    fontSize={{ base: "md", lg: "lg", xl: "2xl" }}
                    fontWeight="bolder"
                    color={colors.highLightColor}
                  >
                    OPAI
                  </Text>
                </Flex>
                <Grid justifyContent={"flex-end"}>
                  <Text
                    fontFamily={fonts.parafont}
                    fontSize={{ base: "md", lg: "xl" }}
                    fontWeight="bolder"
                    color={colors.fontLightColor}
                    textAlign={"right"}
                  >
                    2000
                  </Text>
                </Grid>
              </Flex>
            </Box>
          </Box>
        ) : null}
        <Box width="100%" columnGap={"1rem"} display={"flex"}>
          <Button
            fontFamily={fonts.headingFont}
            fontWeight="bold"
            bg={colors.bgColor}
            boxShadow={`0px 0px 4px ${colors.boxBorder}`}
            color={colors.highLightColor}
            width="100%"
            _hover={{ color: colors.bgColor, bg: colors.highLightColor }}
            fontSize={{ base: "xl" }}
            textTransform="uppercase"
            onClick={props.onClick}
          >
            {props.isConnected ? `Claim Tokens` : `Connect Wallet`}
          </Button>
          {props.isConnected ? (
            <Button
              onClick={props.disconnect}
              fontFamily={fonts.headingFont}
              fontWeight="bold"
              bg={colors.bgColor}
              boxShadow={`0px 0px 4px ${colors.boxBorder}`}
              color={colors.highLightColor}
              width="100%"
              _hover={{ color: colors.bgColor, bg: colors.highLightColor }}
              fontSize={{ base: "xl" }}
              textTransform="uppercase"
            >
              Disconnect
            </Button>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}
