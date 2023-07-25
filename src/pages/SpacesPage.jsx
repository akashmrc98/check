import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";
import BG from "/public/ai_section/1.jpg";

function SpacesPage() {
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
            lg: "1fr 1fr 1fr",
            xl: "1fr 1fr 1fr 1fr",
          }}
        >
          {data.map((d, i) => (
            <GridItem
              objectFit={"contain"}
              backgroundSize="cover"
              backgroundRepeat={"no-repeat"}
              backgroundImage={BG}
              p={{ base: 4, lg: 8 }}
              key={i}
              display="grid"
              rowGap="1rem"
            >
              <Text
                px={2}
                fontWeight={"bold"}
                fontFamily={fonts.parafont}
                bg={colors.fontLightColorV2}
                width="auto"
                mx="auto"
                fontSize={{ base: "xs" }}
              >
                {d.tag}
              </Text>
              <Text
                textAlign={"center"}
                fontSize={{ base: "2xl" }}
                color={colors.highLightColor}
                fontWeight="bold"
                fontFamily={fonts.headingFont}
              >
                {d.title}
              </Text>
              <Flex justifyContent={"space-between"}>
                <Text fontFamily={fonts.parafont} color={colors.fontLightColor}>
                  {d.author}
                </Text>
                <Text
                  color={colors.fontLightColorV2}
                  fontFamily={fonts.parafont}
                >
                  {d.day}
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

const data = [
  {
    title: "Llama2 70B Chatbot",
    tag: "Running on CPU UPGRADE",
    author: "ysharma",
    day: "5 days ago",
  },
  {
    title: "Llama2 70B Chatbot",
    tag: "Running on CPU UPGRADE",
    author: "ysharma",
    day: "5 days ago",
  },
  {
    title: "Llama2 70B Chatbot",
    tag: "Running on CPU UPGRADE",
    author: "ysharma",
    day: "5 days ago",
  },
  {
    title: "Llama2 70B Chatbot",
    tag: "Running on CPU UPGRADE",
    author: "ysharma",
    day: "5 days ago",
  },
  {
    title: "Llama2 70B Chatbot",
    tag: "Running on CPU UPGRADE",
    author: "ysharma",
    day: "5 days ago",
  },
  {
    title: "Llama2 70B Chatbot",
    tag: "Running on CPU UPGRADE",
    author: "ysharma",
    day: "5 days ago",
  },
  {
    title: "Llama2 70B Chatbot",
    tag: "Running on CPU UPGRADE",
    author: "ysharma",
    day: "5 days ago",
  },
];
