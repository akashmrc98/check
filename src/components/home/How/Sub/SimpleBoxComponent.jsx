import { GridItem, Text } from "@chakra-ui/react";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";

function SimpleBoxComponent(props) {
  return (
    <GridItem
      border={`1px groove ${colors.boxBorder}`}
      minH="180px"
      pos="relative"
      display="flex"
      borderRight={0}
      flexDir={"column"}
      rowGap="1rem"
    >
      <Text
        maxW="95px"
        border={`1px solid ${colors.boxBorder}`}
        fontFamily={fonts.headingFont}
        color={colors.fontLightColor}
        fontSize={{ base: "lg" }}
        borderTop={0}
        borderLeft={0}
        p={3}
      >
        Step {props.i}
      </Text>
      <Text
        textAlign={"center"}
        fontFamily={fonts.headingFont}
        color={colors.fontLightColor}
        fontSize={{ base: "lg" }}
        borderTop={0}
        borderLeft={0}
      >
        {props.title}
      </Text>
    </GridItem>
  );
}

export default SimpleBoxComponent;
