import { Box, Flex, Text } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import { useLocation, useNavigate } from "react-router";

export default function ModelSpaceNavbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const info = () => {
    if (pathname === "/dapp/spaces")
      return {
        color1: colors.bgColor,
        bg1: colors.highLightColor,
        boxShadow1: `-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`,
        color2: colors.highLightColor,
        bg2: colors.bgColor,
        boxShadow2: `-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`,
      };

    if (pathname === "/dapp/models")
      return {
        color1: colors.highLightColor,
        bg1: colors.bgColor,
        boxShadow1: `-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`,
        color2: colors.bgColor,
        bg2: colors.highLightColor,
        boxShadow2: `-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`,
      };

    return {
      color1: colors.highLightColor,
      bg1: colors.bgColor,
      boxShadow1: `-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`,
      color2: colors.highLightColor,
      bg2: colors.bgColor,
      boxShadow2: `-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`,
    };
  };

  const { bg1, boxShadow1, color1, bg2, color2, boxShadow2 } = info();

  return (
    <Box
      className="bg_img"
      display={"flex"}
      alignItems="center"
      minH="9vh"
      boxShadow={`3px 3px 6px ${colors.fontLightColorV2}, -6px -6px 12px ${colors.boxEndColor}`}
      justifyContent="center"
    >
      <Flex
        cursor={"pointer"}
        alignItems={"center"}
        justifyContent="center"
        columnGap="2rem"
      >
        <Text
          bg={bg1}
          color={color1}
          boxShadow={boxShadow1}
          borderRadius="md"
          px={8}
          py={2}
          textAlign={"left"}
          transition={`all 200m ease`}
          fontWeight={"bold"}
          fontFamily={fonts.parafont}
          onClick={() => navigate("/dapp/spaces")}
          _hover={{
            bg: colors.highLightColor,
            color: colors.bgColor,
            boxShadow: `0px 0px 3px ${colors.bgColor}`,
          }}
        >
          SPACES
        </Text>

        <Text
          bg={bg2}
          transition={`all 200m ease`}
          color={color2}
          boxShadow={boxShadow2}
          borderRadius="md"
          px={8}
          py={2}
          textAlign={"left"}
          fontWeight={"bold"}
          fontFamily={fonts.parafont}
          onClick={() => navigate("/dapp/models")}
          _hover={{
            bg: colors.highLightColor,
            color: colors.bgColor,
            boxShadow: `0px 0px 3px ${colors.bgColor}`,
          }}
        >
          Models
        </Text>
      </Flex>
    </Box>
  );
}
