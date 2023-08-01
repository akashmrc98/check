import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Logo from "/public/logo.png";
import Logo2 from "/public/logo_2.png";

function NavItem(props) {
  return (
    <Button
      onClick={() => props.onClick()}
      color={colors.fontLightColorV2}
      fontFamily={fonts.headingFont}
      fontWeight="bold"
      fontSize={{ base: "lg", lg: "2xl" }}
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
  const [colorChange, setColorchange] = useState(false);
  const [open, setOpen] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  function toggleMenu() {
    setOpen(!open);
  }

  const headers = [
    {
      title: "What We Do",
      items: [
        "Technology",
        "Ecosystem",
        "Loyalty Rewards",
        "Deep Funding",
        "Research",
      ],
    },
    {
      title: "Who We Are",
      items: [
        "Overpowered AI Foundation",
        "Team",
        "Roadmap",
        "Press Media Kit",
      ],
    },
    {
      title: "What We Do",
      items: ["Telegram", "Twitter", "Github"],
    },
  ];

  const items = [
    "AI Marketplace",
    "AGIX Staking",
    "AI Publisher",
    "Developer Portal",
    "Bridge",
  ];

  return (
    <Box>
      <Box
        zIndex={open ? 9 : -1}
        pos={"fixed"}
        minH="100vh"
        width="100%"
        opacity={0.9}
        bg={colors.bgColor}
        overflowY={{ base: "scroll", lg: "hidden" }}
      >
        <Flex
          cursor={"pointer"}
          px={8}
          pt={4}
          justifyContent={{ base: "center" }}
          pos="relative"
        >
          <Image display={{ base: "none", lg: "block" }} maxW="72" src={Logo} />
          <Icon
            pos="absolute"
            right="3%"
            top="3%"
            cursor={"pointer"}
            height={{ base: 10 }}
            width={{ base: 10 }}
            color={colors.highLightColor}
            onClick={() => toggleMenu()}
            as={AiOutlineCloseCircle}
          ></Icon>
        </Flex>
        <Box minH="10vh">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr", xl: "1fr 1fr 1fr" }}
          >
            {headers.map((h, i) => (
              <GridItem mt={8} display={"grid"} justifyContent="center" key={i}>
                <Text
                  color={colors.highLightColor}
                  fontFamily={fonts.headingFont}
                  fontWeight={"bold"}
                  fontSize={{ base: "2xl", lg: "5xl" }}
                  textAlign={"center"}
                >
                  {h.title}
                </Text>
                <Grid>
                  {h.items.map((n, j) => (
                    <NavItem key={j} title={n} />
                  ))}
                </Grid>
              </GridItem>
            ))}
          </Grid>

          <Box
            display={{ base: "none", lg: "block" }}
            mt={8}
            width="100%"
            borderTop={"2px"}
            p={8}
          >
            <Text
              color={colors.fontLightColor}
              fontFamily={fonts.headingFont}
              fontWeight={"bold"}
              fontSize={{ base: "2xl" }}
              textAlign={"left"}
            >
              Featured Products
            </Text>
            <Stack mt={4} columnGap={"2rem"} direction={"row"}>
              {items.map((p, o) => (
                <NavItem key={o} title={p} />
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        alignItems={"center"}
        columnGap={"5rem"}
        display={"flex"}
        justifyContent="center"
        minH="10vh"
        position={"fixed"}
        bg={colorChange ? colors.bgColor : "transparent"}
        transition="all 200ms ease-in-out"
        zIndex={8}
        width="100%"
      >
        <Flex
          width={"100%"}
          height="10vh"
          bg={colors.bgColor}
          justifyContent={"space-between"}
          px={8}
          py={3}
          display={{ base: "flex", lg: "none" }}
        >
          <Image src={Logo} />
          <FiMenu
            onClick={() => toggleMenu()}
            cursor={"pointer"}
            size={48}
            color={colors.boxBorder}
          />
        </Flex>
        <Box
          columnGap=".5rem"
          maxW={"70%"}
          gridTemplateColumns={`1fr 1fr 2fr 1fr 1fr`}
          alignItems={"center"}
          display={{ base: "none", lg: "grid" }}
          justifyContent="center"
        >
          <NavItem title={"Technology"} />
          <NavItem title={"EcoSystem"} />
          <Flex py={2} justifyContent={"center"}>
            <Image p={2} maxW="32" src={Logo2} />
          </Flex>
          <NavItem title={"About"} />
          <NavItem onClick={() => toggleMenu()} title={"Menu"} />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
