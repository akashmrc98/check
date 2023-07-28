import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import { AiOutlineCloseCircle } from "react-icons/ai";

function NavItem(props) {
  return (
    <Button
      onClick={() => props.onClick()}
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
        "SingularityNET Foundation",
        "Team",
        "Roadmap",
        "Jobs",
        "Contact",
        "Press Media Kit",
      ],
    },
    {
      title: "What We Do",
      items: [
        "Official Blog",
        "Telegram",
        "Discord",
        "News & Events",
        "Ambassador Program",
        "Github",
        "Forum",
      ],
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
      >
        <Flex cursor={"pointer"} px={8} pt={4} justifyContent={"flex-end"}>
          <AiOutlineCloseCircle
            size={56}
            color={colors.highLightColor}
            onClick={() => toggleMenu()}
          />
        </Flex>
        <Box minH="10vh">
          <Text
            color={colors.highLightColor}
            fontFamily={fonts.headingFont}
            fontWeight={"bold"}
            fontSize={{ base: "8xl" }}
            textAlign={"center"}
            borderBottom="2px"
          >
            OPNET
          </Text>
          <Grid templateColumns={"1fr 1fr 1fr"}>
            {headers.map((h, i) => (
              <GridItem mt={8} display={"grid"} justifyContent="center" key={i}>
                <Text
                  color={colors.highLightColor}
                  fontFamily={fonts.headingFont}
                  fontWeight={"bold"}
                  fontSize={{ base: "5xl" }}
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

          <Box mt={8} width="100%" borderTop={"2px"} p={8}>
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
        <Box
          columnGap=".5rem"
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
          <NavItem onClick={() => toggleMenu()} title={"Menu"} />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
