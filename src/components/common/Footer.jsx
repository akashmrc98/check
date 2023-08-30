import { Box, Grid, GridItem, Image, Input, Text } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

import HighLightButton from "../common/HighLightButton";
import L from "/public/eco_system/link.png";

export default function Footer() {
  return (
    <Box
      zIndex={999}
      borderTopRadius="3xl"
      width={{ base: "95%" }}
      mx="auto"
      border={{ base: "none", md: `2px solid ${colors.boxBorder}` }}
      boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
      bg={colors.bgColor}
    >
      <Box bg={colors.bgColor} width={{ base: "90%", md: "75%" }} mx="auto">
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
              fontFamily={fonts.headingFont}
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
          <GridItem className="bg_img">
            <Box
              display={"flex"}
              alignItems="self-start"
              rowGap={"1rem"}
              pos={"relative"}
              flexDirection="column"
            >
              <Input
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
                      fontFamily={fonts.headingFont}
                      color={colors.highLightColor}
                      fontWeight="bold"
                      fontSize={{ base: "xl", lg: "2xl" }}
                    >
                      {d.title}
                    </Text>
                  </GridItem>
                  {d.sub.map((s, j) => (
                    <GridItem key={j}>
                      <Text
                        fontFamily={fonts.parafont}
                        color={colors.fontLightColorV2}
                        fontWeight="bold"
                        fontSize={{ base: "sm", lg: "md" }}
                        cursor={"pointer"}
                        _hover={{ color: colors.highLightColor }}
                      >
                        {s}
                      </Text>
                    </GridItem>
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
      "ChainGPT Chat Bot",
      "AI NFT Generator",
      "ChainGPT on Telegram",
      "ChainGPT on Discord",
      "Smart Contract Generator",
      "Smart Contract Auditor",
      "ChainGPT Pad",
    ],
  },
  {
    title: "QUICK LINKS",
    sub: [
      "ChainGPT Blog",
      "Documentation",
      "$CGPT Staking (v2)",
      "$CGPT Staking (v1)",

      "DAO Governance",
      "Pricing Model",
      "Contact Us",
      "Our LaunchPad",
    ],
  },
  {
    title: "LEGAL",
    sub: [
      "CGPT Agreement",
      "Privacy Policy",
      "Terms of Service",
      "Cookies Policy",
    ],
  },
];

const links = [
  "TELEGRAM",
  "DISCORD",
  "YOUTUBE",
  "MEDIUM",
  "LINKEDIN",
  "FACEBOOK",
  "INSTAGRAM",
  "GITHUB",
];
