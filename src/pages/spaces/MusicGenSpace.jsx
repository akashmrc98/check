import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import { useRef } from "react";
import axios from "axios";

import { Audio } from "react-loader-spinner";

import BG from "/public/bg/7.jpg";

function MusicGenSpace() {
  const ref = useRef();
  const [input, setInput] = useState("");
  const [duration, setDuration] = useState(2);
  const checks = ["melody", "medium", "small", "large"];
  const [model, setModel] = useState("melody");
  const [loaded, setLoaded] = useState(false);

  function generateMusic() {
    setLoaded(true);
    axios
      .post(
        "https://opai.renderverse.io/music-gen",
        {
          model: model,
          duration: duration,
          input: input,
        },
        {
          responseType: "blob",
        }
      )

      .then((res) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(res.data);
        fileReader.onload = () => {
          ref.current.src = fileReader.result;
          ref.current.play();
        };
      })
      .then(() => {
        setLoaded(false);
      })
      .catch((e) => console.log(e));
  }

  return (
    <Box
      backgroundImage={BG}
      backgroundColor={`rgba(0,0,0,0.66)`}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundBlendMode="color"
      minH={{ base: "auto", xl: "100vh" }}
      backgroundPosition="center"
      pt={12}
    >
      <Box
        mx="auto"
        width={{ base: "100%", lg: "88%", xl: "75%" }}
        pos="relative"
        border={"2px"}
        boxShadow={`0px 0px 4px ${colors.highLightColor}`}
        borderRadius="md"
        p={12}
      >
        <Box
          py={5}
          borderRadius={"md"}
          bg={`rgba(0,0,0,.7)`}
          display={"grid"}
          px={2}
        >
          <Text
            textAlign={"left"}
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            color={colors.highLightColor}
            fontSize={{ base: "3xl" }}
          >
            🎵 MusicGen 🎵
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
            <FormControl
              border="2px"
              px={8}
              py={8}
              borderRadius={"md"}
              bg={`rgba(0,0,0,.7)`}
            >
              <FormLabel
                fontFamily={fonts.headingFont}
                fontSize={{ base: "lg" }}
                fontWeight="bold"
                color={colors.highLightColor}
              >
                Describe Your Music
              </FormLabel>
              <Input
                value={input}
                onChange={(i) => setInput(i.target.value)}
                placeholder="Classic, Pop, Blues, Phonk, Rock..."
                variant={"unstyled"}
                border={`2px groove ${colors.boxBorder}`}
                p={4}
                fontFamily={fonts.parafont}
                fontSize={{ base: "md" }}
                fontWeight="bold"
                color={colors.fontLightColor}
              />
            </FormControl>
            <FormControl
              border="2px"
              px={8}
              py={8}
              borderRadius={"md"}
              bg={`rgba(0,0,0,.7)`}
            >
              <FormLabel
                fontFamily={fonts.headingFont}
                fontSize={{ base: "lg" }}
                fontWeight="bold"
                color={colors.highLightColor}
              >
                Model
              </FormLabel>

              <RadioGroup onChange={setModel} value={model}>
                <Stack direction="row">
                  {checks.map((c, i) => (
                    <Radio value={c} key={i} colorScheme="purple">
                      <Text
                        color={colors.boxBorder}
                        fontWeight="bold"
                        size="lg"
                        fontFamily={fonts.parafont}
                      >
                        {c}
                      </Text>
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl
              borderRadius={"md"}
              bg={`rgba(0,0,0,.7)`}
              border="2px"
              px={8}
              py={8}
            >
              <FormLabel
                fontFamily={fonts.headingFont}
                fontSize={{ base: "lg" }}
                fontWeight="bold"
                color={colors.highLightColor}
              >
                Duration in seconds
              </FormLabel>
              <Slider
                onChange={(val) => setDuration(val)}
                defaultValue={2}
                min={2}
                max={120}
                step={2}
              >
                <SliderMark
                  value={duration}
                  textAlign="center"
                  bg={colors.bgColor}
                  color={colors.boxBorder}
                  mt="5"
                  ml="-6"
                  fontFamily={fonts.parafont}
                  fontWeight="bold"
                  w="12"
                >
                  {duration}
                </SliderMark>

                <SliderTrack bg={colors.bgColor}>
                  <SliderFilledTrack bg={colors.highLightColor} />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                  {/* <Box color="tomato" as={MdGraphicEq} /> */}
                </SliderThumb>
              </Slider>
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
                onClick={() => generateMusic()}
              >
                Generate
              </Button>
            </Box>
          </GridItem>

          <GridItem pos="relative" borderRadius={"md"} bg={`rgba(0,0,0,.7)`}>
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
            <Box
              pt={4}
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              flexDirection="column"
              h="100%"
              w="100%"
            >
              <Flex p={4} justifyContent="center">
                <video minW="100%" ref={ref} controls />
                {!loaded ? null : (
                  <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                  />
                )}
              </Flex>
            </Box>
          </GridItem>
        </Grid>
        <Box pb={24}>
          <Table
            bg={`rgba(0,0,0,.7)`}
            borderRadius="md"
            border={`2px solid ${colors.bgColor}`}
            variant={"simple"}
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
                  <Td color={colors.highLightColor} fontFamily={fonts.parafont}>
                    {d.title}
                  </Td>
                  <Td color={colors.highLightColor} fontFamily={fonts.parafont}>
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
