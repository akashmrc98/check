import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Logo from "/public/logo_6.png";
import Logo2 from "/public/logo_6.png";

import HighLightButton from "../common/HighLightButton";
import { Link } from "react-router-dom";

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
  const [colorChange, setColorchange] = useState(true);
  const [open, setOpen] = useState(false);
  const changeNavbarColor = () => {
    // if (window.scrollY >= 80) {
    //   setColorchange(true);
    // } else {
    //   setColorchange(false);
    // }
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

  return (
    <Box zIndex={499}>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={{ base: "center", lg: "center" }}
        flexDir="column"
        zIndex={open ? 500 : -1}
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
          justifyContent={{ base: "flex-end", lg: "center" }}
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
        </Box>
      </Box>
      <Box
        borderBottom="1px"
        borderColor={colors.boxBorder}
        alignItems={"center"}
        columnGap={"5rem"}
        display={"flex"}
        justifyContent="center"
        minH="10vh"
        position={"fixed"}
        bg={colorChange ? colors.bgColor : "transparent"}
        transition="all 200ms ease-in-out"
        zIndex={499}
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
          pos="relative"
        >
          <NavItem title={"Technology"} />
          <NavItem title={"EcoSystem"} />
          <Link to="/">
            <Flex py={2} justifyContent={"center"}>
              <Image p={2} maxW="32" src={Logo2} />
            </Flex>
          </Link>
          <NavItem title={"About"} />
          <NavItem onClick={() => toggleMenu()} title={"Menu"} />
        </Box>

        <Box display={{ base: "none", lg: "flex" }} pos="absolute" right="4%">
          <Link to="/dapp">
            <Box transform={{ lg: `scale(0.7)`, xl: `scale(0.8)` }}>
              <HighLightButton title="TRY DAPP" />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
