import { Box, Flex, Text } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { BiArrowBack } from "react-icons/bi";
import { fonts } from "../../theme/fonts";
import { useNavigate } from "react-router";

export default function SpaceNavbar() {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      alignItems="center"
      mb={2}
      minH="7vh"
      p={2}
      className="bg_img"
      boxShadow={`0px 0px 4px ${colors.highLightColor}`}
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
        >
          Back to Spaces
        </Text>
      </Flex>
    </Box>
  );
}
