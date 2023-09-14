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
import { emojis, gradientData, modelsData } from "../data/modelsData";
import { slice } from "lodash";
import G from "/public/eco_system/grid.png";

import { useNavigate } from "react-router";
import { useState } from "react";
import ModelSpaceNavbar from "../components/common/ModelSpaceNavbar";

import BG from "/public/bg/7.jpg";
import Logo from "/public/logos/icon_text.webp";

function ModelsPage() {
  const navigate = useNavigate();

  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(7);
  const initialModels = slice(modelsData, 0, index);
  const loadMore = () => {
    setIndex(index + 4);
    console.log(index);
    if (index >= modelsData.length - 1) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  return (
    <Box
      backgroundImage={BG}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundBlendMode="color"
      backgroundColor={`rgba(0,0,0,0.8)`}
      pos="relative"
      minH="100vh"
    >
      <Box pos="absolute" top="3%" left="5%">
        <Flex
          display={{ base: "none", xl: "flex" }}
          justifyContent={"flex-end"}
        >
          <Image maxW="180px" src={Logo} />
        </Flex>
      </Box>
      <ModelSpaceNavbar />
      <Box
        mt={{ base: 8, lg: 24 }}
        mx="auto"
        width={{ base: "100%", lg: "88%" }}
        pos="relative"
      >
        <Box
          alignItems={"center"}
          display={"flex"}
          justifyContent="space-between"
          flexDir={{ base: "column", lg: "row" }}
          rowGap={{ base: "2rem" }}
          py={{ base: 8, lg: 0 }}
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
        </Box>
        <Box
          mb={12}
          h={4}
          width="100%"
          borderRadius={"xl"}
          border={`1px solid ${colors.bgColor}`}
          opacity={0.8}
          backgroundImage={`linear-gradient(to right, #e63e6d, #f04760, #f85451, #fb6242, #fc7231, #fc7c28, #fb861d, #f9900e, #fb960a, #fc9c06, #fea303, #ffa900)`}
        ></Box>
        <Grid
          rowGap="2rem"
          columnGap={"2rem"}
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            xl: "1fr 1fr 1fr 1fr",
          }}
          pb={24}
        >
          {initialModels.map((d, i) => (
            <GridItem
              onClick={() => navigate("/dapp/models/" + d.service_id)}
              cursor={"pointer"}
              borderRadius={"lg"}
              opacity={0.95}
              pos={"relative"}
              key={i}
              transition={`all 100ms ease-in-out`}
            >
              <Box
                borderRadius={"xl"}
                backgroundImage={gradientData[i].gradient}
                pos="relative"
                minH="200px"
                transition={"all 200ms"}
                _hover={{
                  boxShadow: `-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`,
                  filter: `contrast(150%)`,
                  transform: `scale(.95)`,
                }}
              >
                <Box zIndex={2} width="100%" top={"0%"} pos="absolute">
                  <Text
                    textAlign={"center"}
                    fontWeight={"bold"}
                    fontFamily={fonts.headingFont}
                    textTransform="uppercase"
                    color={colors.fontLightColorV2}
                    mx="auto"
                    width="100%"
                    borderRadius={"xl"}
                    bg={`rgba(0, 0, 0, 0.6)`}
                    fontSize={{ base: "sm", xl: "md", "2xl": "lg" }}
                    p={2}
                    zIndex={8}
                    borderBottomRadius={0}
                  >
                    {emojis[i]} {` `}
                    {d.display_name}
                  </Text>{" "}
                </Box>

                <Box
                  top={"16%"}
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  width="100%"
                  pos="absolute"
                  zIndex={0}
                >
                  <Text fontSize={{ base: "8xl" }}>{emojis[i]}</Text>
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
            </GridItem>
          ))}
          {!isCompleted ? (
            <GridItem
              transition={`all 100ms ease-in-out`}
              _hover={{
                transform: `scale(1.04)`,
              }}
              borderRadius={"xl"}
              backgroundImage={gradientData[8].gradient}
              pos="relative"
              minH="200px"
              maxH="200px"
              cursor={"pointer"}
              onClick={loadMore}
            >
              <Box w="100%" pos="absolute" top={"40%"}>
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontFamily={fonts.headingFont}
                  textTransform="uppercase"
                  color={colors.fontLightColorV2}
                  mx="auto"
                  width="80%"
                  borderRadius={"xl"}
                  fontSize={{ base: "xl" }}
                  p={2}
                  zIndex={8}
                >
                  Load more...
                </Text>{" "}
              </Box>
            </GridItem>
          ) : null}
        </Grid>
      </Box>
    </Box>
  );
}

export default ModelsPage;
