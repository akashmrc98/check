import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { BiArrowBack } from "react-icons/bi";
import { fonts } from "../../theme/fonts";
import { useNavigate } from "react-router";
import Logo from "/public/logos/icon_text.webp";
import Avatar from "/public/ai_section/1.webp";
import ConnectWalletButton from "../../components/common/ConnectWalletButton";
import { useState } from "react";

export default function SpaceNavbar(props) {
  const [changed, setChanged] = useState(true);

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
      justifyContent="space-between"
      boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
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
          pos="relative"
        >
          <Flex
            w="220px"
            borderRadius={"xl"}
            cursor="pointer"
            boxShadow={`-2px -2px 2px ${colors.highLightColor}, 2px 2px 4px ${colors.fontLightColor}`}
            px={4}
            py={2}
            columnGap="1rem"
            onMouseEnter={() => setChanged(false)}
            onMouseUp={() => setChanged(false)}
            onMouseMove={() => setChanged(false)}
            onMouseDown={() => setChanged(false)}
            onMouseUpCapture={() => setChanged(false)}
            onMouseMoveCapture={() => setChanged(false)}
            onMouseOverCapture={() => setChanged(false)}
            onMouseOutCapture={() => setChanged(true)}
            onMouseDownCapture={() => setChanged(true)}
            onMouseLeave={() => setChanged(true)}
            onMouseOver={() => setChanged(true)}
            onMouseOut={() => setChanged(true)}
          >
            <Image
              cursor="pointer"
              src={Avatar}
              maxW={"12"}
              borderRadius="50%"
              boxShadow={`-1px -1px 1px ${colors.highLightColor}, 1px 1px 1px ${colors.fontLightColor}`}
            />
            <Flex cursor="pointer" flexDirection={"column"}>
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
          {!changed ? (
            <Flex
              zIndex={999999999999999}
              right={"2%"}
              bottom={"-410%"}
              pos={"absolute"}
              onMouseEnter={() => setChanged(false)}
              onMouseUp={() => setChanged(false)}
              onMouseMove={() => setChanged(false)}
              onMouseDown={() => setChanged(false)}
              onMouseUpCapture={() => setChanged(false)}
              onMouseMoveCapture={() => setChanged(false)}
              onMouseOverCapture={() => setChanged(false)}
              onMouseOutCapture={() => setChanged(true)}
              onMouseDownCapture={() => setChanged(true)}
              onMouseLeave={() => setChanged(true)}
              onMouseOver={() => setChanged(true)}
              onMouseOut={() => setChanged(true)}
            >
              <Flex
                borderRadius="xl"
                py={4}
                boxShadow={`2px 2px 4px ${colors.highLightColor}, -2px -2px 4px ${colors.bgColor}`}
                px={4}
                justifyContent={"center"}
                alignItems="center"
                bg={colors.bgColor}
                flexDirection={"column"}
                borderTopRadius="none"
                rowGap="1rem"
              >
                <Box
                  display={"flex"}
                  justifyContent="center"
                  flexDir={"column"}
                  alignItems="center"
                  borderRadius="xl"
                  px={4}
                >
                  <Text
                    fontFamily={fonts.specialFont}
                    color={colors.highLightColor}
                    fontSize={{ base: "2xl" }}
                  >
                    Bal
                  </Text>
                  <Text
                    fontFamily={fonts.specialFont}
                    color={colors.highLightColor}
                    fontSize={{ base: "3xl" }}
                  >
                    {props.balance} BNB
                  </Text>
                </Box>
                <Box
                  cursor={"pointer"}
                  onClick={() => navigate("/dapp")}
                  bg={colors.boxBorder}
                  px={4}
                  py={2}
                  w="100%"
                  borderRadius={"md"}
                >
                  <Text
                    textAlign="center"
                    fontWeight={"bold"}
                    fontFamily={fonts.headingFont}
                    color={colors.highLightColor}
                  >
                    My Spaces
                  </Text>
                </Box>
                <ConnectWalletButton
                  onClick={() => props.disconnect()}
                  title="Disconnect"
                />
              </Flex>
            </Flex>
          ) : null}
        </Flex>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
}
