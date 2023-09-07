import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { BiArrowBack } from "react-icons/bi";
import { fonts } from "../../theme/fonts";
import { useNavigate } from "react-router";
import Logo from "/public/logos/text.webp";

export default function SpaceNavbar() {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      alignItems="center"
      minH="7vh"
      p={2}
      bg={`rgba(0,0,0,.4)`}
      boxShadow={`0px 0px 4px ${colors.highLightColor}`}
      justifyContent="space-between"
    >
      <Flex
        cursor={"pointer"}
        onClick={() => navigate(-1)}
        alignItems={"center"}
        columnGap=".5rem"
      >
        <BiArrowBack color={colors.fontLightColorV2} size={36} />
        <Text
          textAlign={"left"}
          fontWeight={"bold"}
          fontFamily={fonts.headingFont}
          color={colors.highLightColor}
        ></Text>
      </Flex>
      <Image maxW="220px" src={Logo} />
      <Box></Box>
    </Box>
  );
}
