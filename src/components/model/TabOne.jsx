import {
  Box,
  Text,
  Flex,
  Tag,
  GridItem,
  Grid,
  Image,
  Button,
} from "@chakra-ui/react";

import { colors } from "../../theme/colors.js";
import { fonts } from "../../theme/fonts";
import BG from "/public/dapp/cs.svg";

function TabOne({ description, tags }) {
  return (
    <Grid
      p={4}
      boxShadow={`0px 0px 4px ${colors.highLightColor}`}
      className="bg_img"
      pb={{ base: 0, lg: 12 }}
      rowGap={{ base: "2rem" }}
    >
      <GridItem>
        <Box width="100%" display="grid" rowGap="2rem">
          <Text
            fontFamily={fonts.headingFont}
            fontSize={"2xl"}
            color={colors.highLightColor}
          >
            Overview
          </Text>
          <Text
            fontSize={{ base: "xx-small", sm: "sm", md: "md" }}
            fontFamily={fonts.parafont}
            color={colors.fontLightColorV2}
          >
            <span
              style={{ display: "inline-block", lineBreak: "anywhere" }}
              dangerouslySetInnerHTML={{ __html: description }}
            ></span>
          </Text>
          <Flex
            p={2}
            flexDir={{ base: "column", lg: "row" }}
            columnGap={"2rem"}
          >
            <Text
              fontWeight={"bold"}
              fontSize={{ base: "xs", sm: "sm", md: "md" }}
              fontFamily={fonts.parafont}
              color={colors.fontLightColorV2}
            >
              Tags :
            </Text>
            <Box
              columnGap={"1rem"}
              display="grid"
              gridTemplateColumns={{
                base: "1fr",
                lg: "1fr 1fr 1fr",
                xl: "1fr 1fr 1fr 1fr 1fr",
              }}
              rowGap="1rem"
              justifyContent={"space-evenly"}
            >
              {tags.map((tag, i) => (
                <Tag
                  bg={colors.highLightColor}
                  fontWeight={"bold"}
                  fontFamily={fonts.parafont}
                  color={colors.fontLightColorV2}
                  key={i}
                >
                  {tag}
                </Tag>
              ))}
            </Box>
          </Flex>
        </Box>
      </GridItem>
      <Box borderTop="2px" py={4}>
        <Box>
          <Text
            fontFamily={fonts.headingFont}
            fontSize={"2xl"}
            color={colors.highLightColor}
          >
            Demo Example
          </Text>
          <Flex pt={8} justifyContent={"center"}>
            <Image p={4} maxW="556px" src={BG} />
          </Flex>
          <Text
            fontFamily={fonts.parafont}
            fontSize={"8xl"}
            fontWeight="bold"
            textAlign={"center"}
            color={colors.highLightColor}
          >
            Comming Soon
          </Text>
        </Box>
        <Grid mt={8} p={4} gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
          <Flex rowGap=".5rem" flexDir={"column"}>
            <Text
              fontFamily={fonts.parafont}
              fontSize={"2xl"}
              fontWeight="bold"
              color={colors.fontLightColor}
            >
              Looking for a different AI Service?
            </Text>
            <Text
              fontFamily={fonts.parafont}
              fontWeight="bold"
              color={colors.fontLightColorV2}
            >
              {" "}
              If you have a need for a specific AI service, we would love to
              know! We will discuss the details with you or use your suggestion
              to incentivize our network.
            </Text>
          </Flex>
        </Grid>
        <Button
          mx={4}
          bg={colors.bgColor}
          boxShadow={`0 0 4px ${colors.highLightColor}`}
          color={colors.highLightColor}
          _hover={{
            color: colors.bgColor,
            bg: colors.highLightColor,
          }}
          fontFamily={fonts.headingFont}
        >
          REQUEST A FORM
        </Button>
      </Box>
    </Grid>
  );
}
export default TabOne;
