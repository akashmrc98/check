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
import Logo from "/public/logos/icon_text.webp";
import Mainbutton from "./MainButton";

import { Link } from "react-scroll";

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
      items: ["Products", "Ecosystem", "White Paper"],
    },
    {
      title: "Who We Are",
      items: ["Team", "Roadmap", "Tokenomics"],
    },
    {
      title: "What We Do",
      items: ["Telegram", "Twitter"],
    },
  ];

  return (
    <Box bg={colors.bgColor}>
      <Box
        bg={colors.bgColor}
        display={"flex"}
        justifyContent="flex-start"
        pt={{ base: 12, lg: 0 }}
        alignItems={{ base: "center", lg: "center" }}
        flexDir="column"
        zIndex={open ? 999999999999999 : -1}
        pos={"absolute"}
        minH="100vh"
        width="100%"
        overflowY={{ base: "scroll", xl: "hidden" }}
      >
        <Icon
          pos="absolute"
          right="0%"
          top="3%"
          cursor={"pointer"}
          height={{ base: 10 }}
          width={{ base: 10 }}
          color={colors.highLightColor}
          onClick={() => toggleMenu()}
          as={AiOutlineCloseCircle}
        ></Icon>
        <Box
          display={{ base: "block", xl: "none" }}
          minH="10vh"
          bg={colors.bgColor}
        >
          <Grid
            mt={12}
            templateColumns={{ base: "1fr", lg: "1fr 1fr", xl: "1fr 1fr 1fr" }}
            bg={colors.bgColor}
          >
            <Mainbutton isMobile={true} />
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
        borderColor={colors.boxBorder}
        alignItems={"center"}
        columnGap={"5rem"}
        display={"flex"}
        justifyContent="center"
        minH="10vh"
        position={"fixed"}
        transition="all 200ms ease-in-out"
        zIndex={999999999999999}
        width="100%"
        bg={colors.bgColor}
      >
        <Flex
          width={"100%"}
          height="10vh"
          justifyContent={"space-between"}
          px={8}
          py={3}
          display={{ base: "flex", xl: "none" }}
          alignItems="center"
        >
          <Image
            objectFit={"contain"}
            w={{ base: "66%", lg: "auto" }}
            src={Logo}
          />
          <FiMenu
            onClick={() => toggleMenu()}
            cursor={"pointer"}
            size={48}
            color={colors.boxBorder}
          />
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;
