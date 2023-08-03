import { Box, Grid, GridItem, Input, Text } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import HighLightButton from "../common/HighLightButton";

export default function Footer() {
  return (
    <Box
      bg={colors.bgColor}
      zIndex={999}
      borderTopRadius="3xl"
      width={{ base: "95%" }}
      mx="auto"
      border={{ base: "none", md: `2px solid ${colors.boxBorder}` }}
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
              fontFamily={fonts.headingFont}
              color={colors.highLightColor}
              fontWeight="bold"
              fontSize={{ base: "3xl", lg: "5xl" }}
            >
              Subscribe to be in touch*
            </Text>
            <Text
              cursor={"pointer"}
              _hover={{ color: colors.highLightColor }}
              fontFamily={fonts.parafont}
              color={colors.boxBorder}
              fontWeight="bold"
              fontSize={{ base: "md", lg: "lg" }}
            >
              *Only valuable resources, no bullshit.
            </Text>
          </GridItem>
          <GridItem>
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
                bg={"gray.900"}
                minH={{ base: "52px", lg: "80px" }}
                px={4}
                fontSize={{ base: "md", lg: "xl" }}
              />
              <Box
                pos={{ base: "relative", lg: "absolute" }}
                mt={{ base: 0, lg: 2 }}
                mr={2}
                right={0}
              >
                <HighLightButton title={"Subscribe"} />
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
                      fontSize={{ base: "xl", lg: "3xl" }}
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
                        fontSize={{ base: "md", lg: "lg" }}
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
                  <GridItem key={k}>
                    <Text
                      cursor={"pointer"}
                      _hover={{ color: colors.highLightColor }}
                      fontFamily={fonts.parafont}
                      color={colors.fontLightColorV2}
                      fontWeight="bold"
                      fontSize={{ base: "md", lg: "lg" }}
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
