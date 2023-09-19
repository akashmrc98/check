import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  Tag,
  Text,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

import { FaBoxes } from "react-icons/fa";

import axios from "axios";

import BG from "/public/bg/7.jpg";

import Lottie from "lottie-react";
import groovyWalkAnimation from "/public/lottie/i.json";

import { bsc } from "wagmi/chains";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import SpaceNavbar from "./SpaceNavbar";

function ImageGenSpace() {
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { open, setDefaultChain } = useWeb3Modal();
  const { data: balance, isFetched: balanceFeteched } = useBalance({
    address,
  });

  function connectWallet() {
    open();
    setDefaultChain(bsc);
  }

  useEffect(() => {
    disconnect();
  }, []);

  useEffect(() => {
    if (address) {
      axios
        .post(
          "https://api.renderverse.io/renderscan/v1/users/op/generate-img/gens",
          { walletAddress: address }
        )
        .then((res) => {
          console.log(res.data);
          setImgs([...res.data.generatedImages]);
        })
        .catch((e) => console.log(e));
    }
  }, [address]);

  const [imgs, setImgs] = useState([]);

  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState("");

  function generateMusic() {
    setSrc("");
    setLoaded(true);
    axios
      .post(
        "https://opai.renderverse.io/image-gen",
        {
          walletAddress: address,
          prompt: input,
        },
        {
          responseType: "blob",
        }
      )

      .then((res) => {
        console.log(res.data);
        blobToBase64(res.data).then((c) => {
          console.log(c);
          setSrc(c);
        });
      })
      .then(() => {
        setLoaded(false);
      })
      .catch((e) => console.log(e));
  }

  function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      console.log(_);
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
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
    >
      <SpaceNavbar
        balance={balanceFeteched ? balance.formatted : ""}
        address={address ? address : ""}
        isConnected={isConnected}
      />
      <Box
        mx="auto"
        width={{ base: "100%", lg: "88%", xl: "75%" }}
        pos="relative"
        p={{ base: 2, lg: 12 }}
        bg={`rgba(0,0,0,0.7)`}
        border="2px"
        mt={12}
        boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
      >
        <Box
          display={"grid"}
          px={2}
          pt={8}
          bg={`rgba(0,0,0,.7)`}
          borderRadius="md"
        >
          <Text
            textAlign={"left"}
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            color={colors.highLightColor}
            fontSize={{ base: "3xl" }}
          >
            Image Gen Space
          </Text>
          <Text
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            width="auto"
            color={colors.fontLightColor}
            mx="auto"
            fontSize={{ base: "md" }}
          >
            This app generates Images, Simply enter a any text that you want the
            prompt to be generated based on.
          </Text>
        </Box>
        <Box
          my={8}
          h={2}
          width="100%"
          border={`1px solid ${colors.boxBorder}`}
        ></Box>

        {isConnected ? (
          <Box>
            <Grid
              rowGap="1rem"
              columnGap={"2rem"}
              mx="auto"
              gridTemplateColumns={{
                base: "1fr",
                lg: "1fr 1fr",
              }}
            >
              <GridItem
                boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
              >
                <FormControl
                  border="2px"
                  px={8}
                  py={8}
                  bg={`rgba(0,0,0,.7)`}
                  borderRadius="md"
                >
                  <FormLabel
                    fontFamily={fonts.headingFont}
                    fontSize={{ base: "lg" }}
                    fontWeight="bold"
                    color={colors.highLightColor}
                  >
                    Input
                  </FormLabel>
                  <Input
                    value={input}
                    onChange={(i) => setInput(i.target.value)}
                    placeholder="Muskmelon"
                    variant={"unstyled"}
                    boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
                    p={4}
                    fontFamily={fonts.parafont}
                    fontSize={{ base: "md" }}
                    fontWeight="bold"
                    color={colors.fontLightColor}
                  />
                  <Box pb={24}>
                    <Flex py={4} columnGap=".4rem" alignItems={"center"}>
                      <FaBoxes color={colors.fontLightColor} size={18} />
                      <Text
                        size={"lg"}
                        bg={`rgba(0,0,0,.7)`}
                        borderRadius="md"
                        fontFamily={fonts.parafont}
                        color={colors.highLightColor}
                        fontWeight="bold"
                      >
                        Examples
                      </Text>
                    </Flex>

                    {headers.map((h, i) => (
                      <Tag
                        size={"lg"}
                        bg={colors.bgColor}
                        fontFamily={fonts.headingFont}
                        color={colors.highLightColor}
                        boxShadow={`0 0 4px ${colors.highLightColor}`}
                        fontWeight="bold"
                        mx={2}
                        my={2}
                        cursor="pointer"
                        onClick={() => setInput(h)}
                        key={i}
                      >
                        {h}
                      </Tag>
                    ))}
                  </Box>
                </FormControl>

                <Box mx="auto" w="80%" py={4}>
                  <Button
                    width={"100%"}
                    size="lg"
                    fontSize={{ base: "4xl" }}
                    p={8}
                    bg={colors.bgColor}
                    boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
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

              <GridItem
                pos="relative"
                minH="240px"
                bg={`rgba(0,0,0,.7)`}
                borderRadius="md"
                boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
              >
                <Box
                  bg={colors.bgColor}
                  px={2}
                  py={1}
                  pos="absolute"
                  border="2px"
                >
                  <Text
                    fontFamily={fonts.parafont}
                    fontWeight="bold"
                    color={colors.fontLightColorV2}
                    fontSize={{ base: "xs" }}
                  >
                    Image Output
                  </Text>
                </Box>
                <Flex
                  pos={"absolute"}
                  zIndex={8}
                  alignItems={"center"}
                  height="100%"
                  width="100%"
                  justifyContent={"center"}
                >
                  {loaded ? (
                    <Lottie animationData={groovyWalkAnimation} />
                  ) : null}
                </Flex>
                <Image width="100%" objectFit={"contain"} src={src} />
              </GridItem>
            </Grid>
            <Box mt={12}>
              <Text
                textAlign={"left"}
                fontWeight={"bold"}
                fontFamily={fonts.parafont}
                color={colors.highLightColor}
                fontSize={{ base: "3xl" }}
                my={12}
              >
                Generated Images
              </Text>
              <Grid
                gridTemplateColumns={{
                  base: "1fr",
                  lg: "1fr 1fr",
                  xl: "1fr 1fr 1fr",
                }}
                rowGap="1rem"
                columnGap={"1rem"}
              >
                {imgs.map((i, s) => (
                  <Flex
                    borderRadius={"xl"}
                    pos="relative"
                    transition={"all 200ms"}
                    boxShadow={``}
                    _hover={{
                      boxShadow: `-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`,
                      filter: `contrast(150%)`,
                      transform: `scale(.95)`,
                    }}
                    key={s}
                  >
                    <Image
                      borderRadius={"xl"}
                      src={`data:image/png;base64,` + i.img}
                    />
                  </Flex>
                ))}
              </Grid>
            </Box>
          </Box>
        ) : (
          <Flex justifyContent={"center"}>
            <Button
              fontFamily={fonts.headingFont}
              fontWeight="bold"
              bg={colors.bgColor}
              boxShadow={`0px 0px 4px ${colors.boxBorder}`}
              color={colors.highLightColor}
              _hover={{ color: colors.bgColor, bg: colors.highLightColor }}
              fontSize={{ base: "xl" }}
              textTransform="uppercase"
              onClick={connectWallet}
            >
              Connect Wallet
            </Button>
          </Flex>
        )}
      </Box>
    </Box>
  );
}

const headers = [
  "Elon Musk with tesla",
  "Monkey with banana",
  "Tiger with Hat",
  "Apple Tree",
  "Andriod",
  "AI",
];

export default ImageGenSpace;
