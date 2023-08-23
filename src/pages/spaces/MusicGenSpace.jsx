import {
  Box,
  Button,
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

    // fetch("http://127.0.0.1:5000/music-gen", {
    //   method: "POST",
    //   body: {
    //     model: model,
    //     duration: duration,
    //     input: input,
    //   },
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Content-Length": 600,
    //   },
    // })
    //   .then((res) => res.blob())
    //   .then((blob) => {
    //     const fileReader = new FileReader();
    //     fileReader.readAsDataURL(blob);
    //     fileReader.onload = () => {
    //       console.log(fileReader.result);
    //       console.log(ref);
    //       ref.current.src = fileReader.result;
    //       ref.current.play();
    //       setLoaded(true);
    //     };
    //   })
    //   .catch((e) => console.log(e));
  }

  return (
    <Box bg={colors.bgColor}>
      <Box
        mx="auto"
        width={{ base: "100%", lg: "88%", xl: "75%" }}
        pos="relative"
        border={"2px"}
        mt={12}
        className="bg_img"
        boxShadow={`0px 0px 4px ${colors.highLightColor}`}
        p={12}
      >
        <Box display={"grid"} px={2} pt={8}>
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
            <FormControl border="2px" px={8} py={8} bg={"gray.900"}>
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
            <FormControl border="2px" px={8} py={8} bg={"gray.900"}>
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

            <FormControl border="2px" px={8} py={8} bg={"gray.900"}>
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
                <SliderMark value={0}>0%</SliderMark>
                <SliderMark value={60}>50%</SliderMark>
                <SliderMark value={120}>100%</SliderMark>
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

          <GridItem pos="relative" minH="240px" bg={"gray.900"}>
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
            >
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
            </Box>
          </GridItem>
        </Grid>
        <Box pb={24}>
          <Table border="2px" variant={"simple"} mt={24} py={12}>
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
