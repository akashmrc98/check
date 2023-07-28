import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";
import { emojisData, sGradientData, spacesData } from "../data/spacesData";

import Star from "/public/dapp/star.png";
import { useNavigate } from "react-router";

function SpacesPage() {
  const navigate = useNavigate();

  return (
    <Box bg={colors.bgColor}>
      <Box mx="auto" width={{ base: "100%", lg: "88%" }} pos="relative">
        <Box px={2} pt={8}>
          <Text
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            width="auto"
            color={colors.highLightColor}
            mx="auto"
            fontSize={{ base: "5xl" }}
          >
            Spaces
          </Text>
          <Text
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            width="auto"
            color={colors.fontLightColor}
            mx="auto"
            fontSize={{ base: "2xl" }}
          >
            Discover amazing ML apps made by the community!
          </Text>
        </Box>
        <Box
          my={8}
          h={2}
          width="100%"
          border={`1px solid ${colors.boxBorder}`}
        ></Box>
        <Grid
          rowGap="1rem"
          columnGap={"1rem"}
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            xl: "1fr 1fr 1fr 1fr",
          }}
        >
          {spacesData.map((d, i) => (
            <GridItem
              onClick={() => navigate(`/dapp/spaces/${d.link}`)}
              cursor={"pointer"}
              borderRadius={"lg"}
              pos={"relative"}
              key={i}
            >
              <Box
                borderRadius={"xl"}
                backgroundImage={sGradientData[i].gradient}
                pos="relative"
                minH="200px"
              >
                <Box
                  bg={`rgba(0, 0, 0, 0.5)`}
                  borderBottomLeftRadius="xl"
                  left={0}
                  pos="absolute"
                  display={"flex"}
                  alignItems="center"
                  px={4}
                >
                  <Image w={"20px"} height="20px" src={Star} />
                  <Text
                    textAlign={"center"}
                    zIndex={2}
                    fontWeight={"bold"}
                    fontFamily={fonts.headingFont}
                    textTransform="uppercase"
                    color={colors.fontLightColor}
                    mx="auto"
                    fontSize={{ base: "sm" }}
                    p={2}
                  >
                    Running on{" "}
                    <Box
                      fontStyle={"italic"}
                      color={colors.highLightColor}
                      fontWeight="bold"
                      fontFamily={fonts.parafont}
                      display={"inline"}
                      fontSize={{ base: "xl" }}
                    >
                      CPU
                    </Box>
                  </Text>{" "}
                </Box>
                <Box zIndex={2} width="100%" top={"33%"} pos="absolute">
                  <Text
                    textAlign={"center"}
                    fontWeight={"bold"}
                    fontFamily={fonts.headingFont}
                    textTransform="uppercase"
                    color={colors.fontLightColorV2}
                    mx="auto"
                    width="80%"
                    borderRadius={"xl"}
                    bg={`rgba(0, 0, 0, 0.3)`}
                    fontSize={{ base: "xl" }}
                    p={2}
                    zIndex={8}
                  >
                    {d.display_name}
                  </Text>{" "}
                </Box>

                <Box
                  top={"10%"}
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  width="100%"
                  pos="absolute"
                  zIndex={0}
                >
                  <Text fontSize={{ base: "8xl" }}>{emojisData[i]}</Text>
                </Box>
                <Box
                  pos={"absolute"}
                  bottom={0}
                  right={0}
                  alignItems={"flex-end"}
                  display={"flex"}
                  justifyContent="flex-end"
                  p={4}
                >
                  <Button
                    _hover={{
                      bg: colors.highLightColor,
                      color: colors.bgColor,
                    }}
                    variant={"outline"}
                    bg={colors.bgColor}
                    color={colors.highLightColor}
                    fontWeight="bold"
                    fontFamily={fonts.headingFont}
                    size="sm"
                    boxShadow={`0px 0px 4px ${colors.highLightColor}`}
                    border={0}
                  >
                    {d.tags[0]}
                  </Button>
                </Box>
              </Box>
              <Flex py={2} justifyContent={"space-between"}>
                <Text
                  zIndex={2}
                  pl={2}
                  color={colors.fontLightColorV2}
                  fontFamily={fonts.parafont}
                  width="100%"
                >
                  Overpoweredai-project
                </Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default SpacesPage;
