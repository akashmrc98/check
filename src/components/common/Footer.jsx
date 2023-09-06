import { Box, Grid, GridItem, Image, Input, Text } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

import HighLightButton from "../common/HighLightButton";
import L from "/public/eco_system/link.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      className="bg_img"
      zIndex={999999999999999}
      width={{ base: "95%" }}
      mx="auto"
      borderTopRadius={"3xl"}
      pt={12}
      border={{
        base: 0,
      }}
      boxShadow={{
        base: 0,
        xl: `-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`,
      }}
    >
      <Box width={{ base: "90%", md: "75%" }} mx="auto">
        <Grid columnGap={"2rem"} rowGap={"4rem"}>
          <GridItem
            alignItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            flexDirection={{ base: "column", lg: "row" }}
            my={4}
          >
            <Text
              cursor={"pointer"}
              _hover={{ color: colors.highLightColor }}
              fontFamily={fonts.specialFont}
              color={colors.highLightColor}
              fontWeight="bold"
              fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
            >
              Subscribe to be in touch*
            </Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: colors.highLightColor }}
              fontFamily={fonts.parafont}
              color={colors.boxBorder}
              fontWeight="bold"
              fontSize={{ base: "sm", lg: "md" }}
            >
              *Only valuable resources, no bullshit.
            </Text>
          </GridItem>
          <GridItem>
            <Box
              display={"flex"}
              alignItems="self-start"
              rowGap={{ base: 0, xl: "1rem" }}
              pos={"relative"}
              flexDirection="column"
            >
              <Input
                boxShadow={`0px 0px 8px ${colors.highLightColor}`}
                variant={"unstyled"}
                placeholder="Your E-mail"
                width="100%"
                height={"100%"}
                fontFamily={fonts.parafont}
                fontWeight={"bold"}
                color={colors.highLightColor}
                minH={{ base: "52px", lg: "72px" }}
                px={4}
                fontSize={{ base: "md", lg: "lg" }}
              />
              <Box
                pos={{ base: "relative", lg: "absolute" }}
                mt={{ base: 0, lg: 1 }}
                mr={2}
                right={0}
              >
                <Box transform={`scale(0.9)`}>
                  <HighLightButton title={"Subscribe"} />
                </Box>
              </Box>
            </Box>
          </GridItem>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            }}
            rowGap="3rem"
            columnGap={"2rem"}
            my={8}
            justifyContent={{ base: "center" }}
            alignItems={{ base: "center", lg: "start" }}
          >
            {data.map((d, i) => (
              <GridItem key={i}>
                <Grid>
                  <GridItem>
                    <Text
                      fontFamily={fonts.specialFont}
                      color={colors.highLightColor}
                      fontWeight="bold"
                      fontSize={{ base: "xl", lg: "2xl" }}
                    >
                      {d.title}
                    </Text>
                  </GridItem>
                  {d.sub.map((s, j) => (
                    <Box key={j}>
                      {s.isLink ? (
                        <Link
                          to={s.link}
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          <Text
                            fontFamily={fonts.parafont}
                            color={colors.fontLightColorV2}
                            fontWeight="bold"
                            fontSize={{ base: "sm", lg: "md" }}
                            cursor={"pointer"}
                            _hover={{ color: colors.highLightColor }}
                          >
                            {s.display_name}
                          </Text>
                        </Link>
                      ) : (
                        <GridItem
                          onClick={() => navigate(`/dapp/spaces/${s.link}`)}
                        >
                          <Text
                            fontFamily={fonts.parafont}
                            color={colors.fontLightColorV2}
                            fontWeight="bold"
                            fontSize={{ base: "sm", lg: "md" }}
                            cursor={"pointer"}
                            _hover={{ color: colors.highLightColor }}
                          >
                            {s.display_name}
                          </Text>
                        </GridItem>
                      )}
                    </Box>
                  ))}
                </Grid>
              </GridItem>
            ))}
            <GridItem>
              <Grid justifyContent={{ base: "", xl: "flex-end" }}>
                {links.map((l, k) => (
                  <GridItem
                    columnGap={".2rem"}
                    alignItems="center"
                    display={"flex"}
                    key={k}
                  >
                    <Image height={"24px"} width="24px" src={L} />
                    <Text
                      cursor={"pointer"}
                      _hover={{ color: colors.highLightColor }}
                      fontFamily={fonts.parafont}
                      color={colors.fontLightColorV2}
                      fontWeight="bold"
                      fontSize={{ base: "md", lg: "xl" }}
                    >
                      {l}
                    </Text>
                  </GridItem>
                ))}
              </Grid>
            </GridItem>
          </Grid>
        </Grid>
      </Box>
      <Box my={8} display={"flex"} justifyContent="center">
        <Text
          fontWeight={"bold"}
          fontFamily={fonts.parafont}
          color={colors.boxBorder}
          textAlign="center"
        >
          © 2023 ALL RIGHTS RESERVED BY OVERPOWEREDAI
        </Text>
      </Box>
    </Box>
  );
}

const data = [
  {
    title: "AI SOLUTIONS",
    sub: [
      {
        display_name: "🎵 Music Gen Space",
        rating: 5,
        tags: ["music", "named", "recognition"],
        link: "musicgen-space",
        isLink: false,
      },
      {
        display_name: "👋🏻 Chat Assistant",
        rating: 5,
        tags: ["chat", "ai", "elon musk"],
        link: "chatgen-space",
        isLink: false,
      },
      {
        display_name: "💬 ChatGPT Prompt",
        rating: 5,
        tags: ["text", "generation", "text2text"],
        link: "textgen-space",
        isLink: false,
      },
      {
        display_name: "📷 Image Generation",
        rating: 5,
        tags: ["image", "generation", "text2text"],
        link: "imggen-space",
        isLink: false,
      },
    ],
  },
  {
    title: "QUICK LINKS",
    sub: [
      {
        display_name: "Products",
        link: "AI",
        isLink: true,
      },
      {
        display_name: "Eco-System",
        link: "ECO",
        isLink: true,
      },
      {
        display_name: "Roadmap",
        link: "ROAD",
        isLink: true,
      },
      {
        display_name: "Tokenomics",
        link: "TOKEN",
        isLink: true,
      },
      {
        display_name: "Team",
        link: "TEAM",
        isLink: true,
      },
    ],
  },
  {
    title: "LEGAL",
    sub: [
      {
        display_name: "$OPAI Agreement",
      },
      {
        display_name: "Privacy Policy",
      },
      {
        display_name: "Terms of Service",
      },
    ],
  },
];

const links = ["TELEGRAM", "TWITTER", "INSTAGRAM", "MEDIUM", "GITHUB"];
