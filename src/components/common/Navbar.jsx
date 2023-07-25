import { Box, Button } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

function NavItem(props) {
  return (
    <Button
      color={colors.fontLightColorV2}
      fontFamily={fonts.headingFont}
      fontWeight="bold"
      fontSize={{ base: "2xl" }}
      _hover={{
        color: colors.highLightColor,
      }}
      variant={"unstyled"}
      minW="180px"
    >
      {props.title}
    </Button>
  );
}

function Navbar() {
  return (
    <Box
      alignItems={"center"}
      columnGap={"5rem"}
      display={"flex"}
      justifyContent="center"
      minH="10vh"
      bg={colors.bgColor}
      borderBottom="2px"
    >
      <Box
        columnGap="2rem"
        maxW={"70%"}
        gridTemplateColumns={`1fr 1fr 2fr 1fr 1fr`}
        alignItems={"center"}
        display={"grid"}
        justifyContent="center"
      >
        <NavItem title={"Technology"} />
        <NavItem title={"EcoSystem"} />
        <NavItem title={"TKNNET"} />
        <NavItem title={"About"} />
        <NavItem title={"Menu"} />
      </Box>
    </Box>
  );
}

export default Navbar;
