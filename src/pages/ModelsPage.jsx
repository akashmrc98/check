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
import { modelsData } from "../data/modelsData";

import Star from "/public/dapp/star.png";

function Stars(props) {
  let arr = [...Array(Math.round(props.ratings)).keys()] ?? [0];
  return (
    <Flex>
      {arr.map((i) => (
        <Image zIndex={8} key={i} height="6" src={Star} />
      ))}
    </Flex>
  );
}

function ModelsPage() {
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
            Models
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
            lg: "1fr 1fr 1fr",
            xl: "1fr 1fr 1fr 1fr",
          }}
        >
          {modelsData.map((d, i) => (
            <GridItem border={`2px solid ${colors.boxBorder}`} key={i}>
              <Box
                objectFit={"contain"}
                backgroundSize="cover"
                backgroundRepeat={"no-repeat"}
                backgroundImage={d.media.url}
                minH="160px"
                display="grid"
                rowGap="1rem"
                pos="relative"
              ></Box>
              <Text
                fontWeight={"bold"}
                fontFamily={fonts.parafont}
                bg={colors.bgColor}
                color={colors.fontLightColor}
                width="auto"
                mx="auto"
                fontSize={{ base: "md" }}
                p={2}
              >
                {d.display_name}
              </Text>{" "}
              <Flex
                bottom={0}
                border="2px"
                bg={colors.bgColor}
                p={1}
                width="100%"
                alignItems={"center"}
              >
                <Stars ratings={d.service_rating.rating} />
                <Text
                  pl={2}
                  color={colors.fontLightColorV2}
                  fontFamily={fonts.parafont}
                >
                  {`${d.service_rating.rating}.0 (${d.service_rating.total_users_rated})`}
                </Text>
              </Flex>
              <Flex>
                <Text
                  p={2}
                  color={colors.fontLightColorV2}
                  fontFamily={fonts.parafont}
                  fontSize={{ base: "xs" }}
                  pt={2}
                >
                  {d.short_description}
                </Text>
              </Flex>
              <Box
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
                  View Demo
                </Button>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ModelsPage;
