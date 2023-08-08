import { Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import C from "/public/dapp/cs.svg";

export default function SaleEndSection() {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      columnGap={"2rem"}
      py={24}
    >
      <Flex>
        <Image src={C} />
      </Flex>
      <Flex
        rowGap={"1rem"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"flex-end"}
      >
        <Text
          fontFamily={fonts.headingFont}
          fontWeight="bold"
          color={colors.fontLightColor}
          fontSize={{ base: "2xl", lg: "3xl", xl: "4xl" }}
          lineHeight={1.2}
        >
          A well-designed Deflationary token model
        </Text>
        <Text
          fontFamily={fonts.parafont}
          fontWeight="bold"
          color={colors.fontLightColorV2}
        >
          OPAI tokenomics is designed to create solid, reliable and attractive
          ways for users to benefit from the platform.
        </Text>
        <Flex width="100%" columnGap={"1rem"} alignItems="center">
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
            Economics Paper
          </Button>
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
            White Paper
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
