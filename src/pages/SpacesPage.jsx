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

import G from "/public/eco_system/grid.png";

function SpacesPage() {
  const navigate = useNavigate();

  return (
    <Box bg={colors.bgColor}>
      <Box mx="auto" width={{ base: "100%", lg: "88%" }} pos="relative">
        <Box
          alignItems={"center"}
          display={"flex"}
          justifyContent="space-between"
        >
          <Box>
            <Box
              justifyContent={"flex-start"}
              alignItems="center"
              display={"flex"}
            >
              <Image src={G} />
              <Box
                display={"flex"}
                flexDir="column"
                justifyContent={"flex-start"}
                px={2}
                pt={4}
              >
                <Text
                  textAlign={"left"}
                  fontWeight={"bold"}
                  fontFamily={fonts.headingFont}
                  color={colors.highLightColor}
                  fontSize={{ base: "5xl" }}
                >
                  Models
                </Text>
              </Box>
            </Box>
            <Text
              textAlign={"left"}
              fontWeight={"bold"}
              fontFamily={fonts.parafont}
              color={colors.fontLightColor}
              fontSize={{ base: "2xl" }}
              pb={4}
              pl={4}
            >
              Discover amazing ML apps made by the community!
            </Text>
          </Box>
          <Box alignItems={"center"} display={"flex"} columnGap="1rem">
            <Button
              _hover={{
                bg: colors.bgColor,
                boxShadow: `0px 0px 4px ${colors.highLightColor}`,
              }}
              color={colors.highLightColor}
              bg={colors.boxBorder}
            >
              Create New Space
            </Button>
            <Text color={colors.boxBorder}>or</Text>
            <Button variant={"link"}>Learn more about spaces</Button>
          </Box>
        </Box>
        <Box
          mb={12}
          h={4}
          width="100%"
          borderRadius={"xl"}
          border={`1px solid ${colors.highLightColor}`}
          backgroundImage={`linear-gradient(to right, #e63e6d, #f04760, #f85451, #fb6242, #fc7231, #fc7c28, #fb861d, #f9900e, #fb960a, #fc9c06, #fea303, #ffa900)`}
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
                transition={"all 200ms"}
                _hover={{
                  boxShadow: `0px 0px 12px ${colors.fontLightColorV2}`,
                  filter: `contrast(150%)`,
                }}
                minH="200px"
              >
                <Box
                  borderTopLeftRadius={"xl"}
                  bg={`rgba(0, 0, 0, 0.5)`}
                  borderBottomRightRadius="xl"
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
