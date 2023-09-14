import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { BiArrowBack } from "react-icons/bi";
import { fonts } from "../../theme/fonts";
import { useNavigate } from "react-router";
import Logo from "/public/logos/icon_text.webp";

export default function SpaceNavbar(props) {
  function addressStrip() {
    return (
      props.address.substring(0, 4) +
      "...." +
      props.address.substring(props.address.length - 4, props.address.length)
    );
  }
  const address = addressStrip();
  const navigate = useNavigate();
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{ base: "1fr", xl: "1fr 1fr 1fr" }}
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
      <Flex justifyContent={"center"}>
        <Image maxW="220px" src={Logo} />
      </Flex>
      {props.isConnected ? (
        <Flex
          flexDir={"row"}
          columnGap="2rem"
          alignItems="flex-end"
          justifyContent={"flex-end"}
          pr={4}
        >
          <Flex flexDirection={"column"}>
            <Text
              textAlign={"left"}
              fontWeight={"bold"}
              fontFamily={fonts.headingFont}
              color={colors.highLightColor}
            >
              Bal
            </Text>
            <Text
              textAlign={"left"}
              fontWeight={"bold"}
              fontFamily={fonts.headingFont}
              color={colors.highLightColor}
              fontSize="sm"
            >
              {props.balance} BNB
            </Text>
          </Flex>
          <Flex flexDirection={"column"}>
            <Text
              textAlign={"left"}
              fontWeight={"bold"}
              fontFamily={fonts.headingFont}
              color={colors.highLightColor}
            >
              Connected To
            </Text>
            <Text
              textAlign={"left"}
              fontWeight={"bold"}
              fontFamily={fonts.headingFont}
              color={colors.highLightColor}
              fontSize="sm"
            >
              {address}
            </Text>
          </Flex>
        </Flex>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
}
