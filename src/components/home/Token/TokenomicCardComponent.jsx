import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";

function TokenomicsCardComponent(props) {
  return (
    <Flex my={4} flexDir={"row"} justifyContent="space-between">
      <Text
        fontSize={{ base: "", lg: "xl" }}
        fontFamily={fonts.headingFont}
        color={colors.fontLightColor}
      >
        {props.keyv}
      </Text>
      <Text
        fontWeight={"bold"}
        fontSize={{ base: "", lg: "xl" }}
        fontFamily={fonts.parafont}
        color={colors.fontLightColorV2}
      >
        {props.value}
      </Text>
    </Flex>
  );
}

export default TokenomicsCardComponent;
