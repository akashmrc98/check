import { GridItem, Text } from "@chakra-ui/react";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";

function AlternateBoxComponent(props) {
  return (
    <GridItem
      border={`1px groove ${colors.boxBorder}`}
      minH="180px"
      pos="relative"
      borderRight={0}
      display="flex"
      flexDir={"column"}
      rowGap="1rem"
      pb={8}
    >
      <Text
        maxW="185px"
        border={`1px solid ${colors.boxBorder}`}
        fontFamily={fonts.headingFont}
        color={colors.fontLightColor}
        fontSize={{ base: "lg" }}
        borderTop={0}
        borderLeft={0}
        p={3}
      >
        {props.quote}
      </Text>
      <Text
        textAlign={"center"}
        fontFamily={fonts.headingFont}
        color={colors.fontLightColorV2}
        fontSize={{ base: "2xl" }}
        borderTop={0}
        borderLeft={0}
      >
        {props.title}
      </Text>
      <Text
        textAlign={"center"}
        fontFamily={fonts.headingFont}
        color={colors.fontLightColor}
        fontSize={{ base: "md" }}
        borderTop={0}
        borderLeft={0}
        px={2}
      >
        {props.sub}
      </Text>
    </GridItem>
  );
}

export default AlternateBoxComponent;
