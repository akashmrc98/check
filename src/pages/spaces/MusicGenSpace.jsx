import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

function MusicGenSpace() {
  return (
    <Box bg={colors.bgColor}>
      <Box
        mx="auto"
        width={{ base: "100%", lg: "88%", xl: "75%" }}
        pos="relative"
      >
        <Box display={"grid"} px={2} pt={8}>
          <Text
            textAlign={"left"}
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            color={colors.highLightColor}
            fontSize={{ base: "3xl" }}
          >
            MusicGen
          </Text>
          <Text
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            width="auto"
            color={colors.fontLightColor}
            mx="auto"
            fontSize={{ base: "md" }}
          >
            This is the demo for MusicGen, a simple and controllable model for
            music generation presented at: “Simple and Controllable Music
            Generation”. Duplicate Space for longer sequences, more control and
            no queue.
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
          mx="auto"
          gridTemplateColumns={{
            base: "1fr 1fr",
          }}
        >
          <GridItem>
            <FormControl border="2px" px={8} py={8} bg={"gray.900"}>
              <FormLabel
                fontFamily={fonts.headingFont}
                fontSize={{ base: "lg" }}
                fontWeight="bold"
                color={colors.highLightColor}
              >
                Describe your music
              </FormLabel>
              <Input
                variant={"unstyled"}
                border={`2px groove ${colors.boxBorder}`}
                p={4}
                fontFamily={fonts.parafont}
                fontSize={{ base: "md" }}
                fontWeight="bold"
                color={colors.fontLightColor}
              />
            </FormControl>

            <FormControl border="2px" px={8} py={8} bg={"gray.900"}>
              <FormLabel
                fontFamily={fonts.headingFont}
                fontSize={{ base: "lg" }}
                fontWeight="bold"
                color={colors.highLightColor}
              >
                Condition on a melody (optional) File or Mic
              </FormLabel>
              <Checkbox
                fontFamily={fonts.parafont}
                size="lg"
                colorScheme="orange"
                defaultChecked
                fontSize={{ base: "2xl" }}
                color={colors.fontLightColor}
                mr={4}
                fontWeight="bold"
              >
                File
              </Checkbox>
              <Checkbox
                fontWeight="bold"
                fontFamily={fonts.parafont}
                color={colors.fontLightColor}
                fontSize={{ base: "2xl" }}
                size="lg"
                colorScheme="orange"
                defaultChecked
              >
                Mic
              </Checkbox>
            </FormControl>
            <FormControl border="2px" px={8} py={8} bg={"gray.900"}>
              <FormLabel
                fontFamily={fonts.headingFont}
                fontSize={{ base: "lg" }}
                fontWeight="bold"
                color={colors.highLightColor}
              >
                File
              </FormLabel>
              <Input
                variant={"unstyled"}
                border={`2px groove ${colors.boxBorder}`}
                p={4}
                fontFamily={fonts.parafont}
                fontSize={{ base: "md" }}
                fontWeight="bold"
                color={colors.fontLightColor}
                type="file"
              />
            </FormControl>
            <Box py={4}>
              <Button
                width={"100%"}
                size="lg"
                fontSize={{ base: "4xl" }}
                p={8}
                bg={colors.bgColor}
                boxShadow={`0 0 1px ${colors.highLightColor}`}
                color={colors.highLightColor}
                _hover={{
                  color: colors.bgColor,
                  bg: colors.highLightColor,
                }}
                fontFamily={fonts.headingFont}
                borderRadius="none"
              >
                Generate
              </Button>
            </Box>
          </GridItem>

          <GridItem pos="relative" minH="440px" bg={"gray.900"}>
            <Box px={2} py={1} pos="absolute" border="2px">
              <Text
                fontFamily={fonts.parafont}
                fontWeight="bold"
                color={colors.fontLightColorV2}
                fontSize={{ base: "xs" }}
              >
                Audio output
              </Text>
            </Box>
          </GridItem>
        </Grid>
        <Box pb={24}>
          <Table
            border="2px"
            colorScheme={"teal"}
            variant={"striped"}
            mt={24}
            py={12}
          >
            <Thead>
              {headers.map((h, i) => (
                <Th fontFamily={fonts.parafont} key={i}>
                  {h}
                </Th>
              ))}
            </Thead>
            <Tbody>
              {data.map((d, i) => (
                <Tr key={i}>
                  <Td
                    color={i % 2 === 0 ? colors.bgColor : colors.highLightColor}
                    fontFamily={fonts.parafont}
                  >
                    {d.title}
                  </Td>
                  <Td
                    color={i % 2 === 0 ? colors.bgColor : colors.highLightColor}
                    fontFamily={fonts.parafont}
                  >
                    {d.file}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}

const headers = ["Describe your music", "File"];

const data = [
  {
    title:
      "An 80s driving pop song with heavy drums and synth pads in the background",
    file: "bach.mp3",
  },
  {
    title: "A cheerful country song with acoustic guitars",
    file: "bolero_ravel.mp3",
  },
  {
    title: "90s rock song with electric guitar and heavy drums",
    file: "bach.mp3",
  },
  {
    title:
      "a light and cheerly EDM track, with syncopated drums, aery pads, and strong emotions bpm: 130",
    file: "music.mp3",
  },
  { title: "lofi slow bpm electro chill with organic samples", file: "lo.mp3" },
];

export default MusicGenSpace;
