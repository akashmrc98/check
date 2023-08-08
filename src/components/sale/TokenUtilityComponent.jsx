import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import HeadLines from "../common/HeadLine";

const utils = [
  {
    icon: "",
    head: "Compete",
    sub: "Play web3 skill games with friends on Axle and win $AXLE tokens",
  },
  {
    icon: "",
    head: "ChargeUp",
    sub: "Use $AXLE tokens to power up and boost your rewards",
  },
  {
    icon: "",
    head: "Compound",
    sub: "Stake $AXLE and earn compound interest with a decent APY",
  },
  {
    icon: "",
    head: "Collect",
    sub: "Purchase or win AXLE game NFT rewards by playing games",
  },
];

export default function TokenUtilityComponent() {
  return (
    <Box
      py={24}
      display={"grid"}
      justifyContent="center"
      alignItems={"center"}
      rowGap="2rem"
    >
      <HeadLines title={"Utilities"} subTitle={"$OPAI"} />
      <Grid
        rowGap={"2rem"}
        columnGap="2rem"
        templateColumns={{ base: "1fr", xl: "1fr 1fr" }}
      >
        {utils.map((u, i) => (
          <Box
            border={`2px dashed ${colors.boxBorder}`}
            boxShadow={`-4px -4px 8px -2px ${colors.highLightColor}, 4px 4px 8px -2px ${colors.fontLightColor}, -4px 4px 8px -2px ${colors.highLightColor}, 4px -4px 8px -2px ${colors.fontLightColor}`}
            borderRadius={"xl"}
            p={4}
            bg={colors.bgColor}
            key={i}
          >
            <Flex alignItems={"center"} columnGap="2rem">
              <Box color={colors.highLightColor}>Icon</Box>
              <Grid>
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "2xl", lg: "3xl", xl: "4xl" }}
                  fontFamily={fonts.headingFont}
                  color={colors.highLightColor}
                >
                  {u.head}
                </Text>
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "md" }}
                  fontFamily={fonts.parafont}
                  color={colors.fontLightColorV2}
                >
                  {u.sub}
                </Text>
              </Grid>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
