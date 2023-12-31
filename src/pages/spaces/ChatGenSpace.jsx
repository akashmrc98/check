import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import axios from "axios";

import { FaForward, FaRobot, FaUser } from "react-icons/fa";
import { useRef } from "react";
import { useEffect } from "react";

import { bsc } from "wagmi/chains";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useDisconnect } from "wagmi";

import EM from "/public/chat/Elon Musk.png";
import VB from "/public/chat/Vitalik Buterin.png";
import CZ from "/public/chat/Changpeng Zhao.webp";
import JS from "/public/chat/Justin Sun.webp";
import BA from "/public/chat/Brian Armstrong.webp";
import MJS from "/public/chat/Michael J. Saylor.webp";
import TD from "/public/chat/Tim Draper.png";
import TW from "/public/chat/Tyler Winklevoss.webp";
import BG from "/public/bg/10.jpg";
import SpaceNavbar from "./SpaceNavbar";
import ConnectWalletButton from "../../components/common/ConnectWalletButton";

let imgs = [EM, VB, CZ, JS, BA, MJS, TD, TW];

const options = [
  "Elon Musk",
  "Vitalik Buterin",
  "Changpeng Zhao",
  "Justin Sun",
  "Brian Armstrong",
  "Michael J. Saylor",
  "Tim Draper",
  "Tyler Winklevoss",
];

function ChatGenSpace() {
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
    setChats([]);
    setChatHistory([]);
    setShowChat(false);
  }, []);

  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [promp, setPromp] = useState([]);
  const [person, setPerson] = useState("Elon Musk");
  const [isSelected, setIsSelected] = useState(false);
  const [index, setIndex] = useState(0);
  const [m, setM] = useState(0);
  const ref = useRef();

  const [chats, setChats] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const namedMonths = [
    "January",
    "Feburary",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [chatHistory, setChatHistory] = useState([]);
  const [viewHistory, setViewHistory] = useState([]);

  function getMonthChats(n) {
    setM(n);
    const monthChats = [];
    for (let i = 0; i < chats.length; i++) {
      const month = new Date(chats[i].createdAt).getUTCMonth() - 1;
      if (n === month) {
        monthChats.push(chats[i]);
      }
      setViewHistory([...monthChats]);
    }
  }

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [promp, input, isSelected]);

  function generateMusic() {
    if (!loaded) {
      setLoaded(true);
      setPromp([...promp, input]);
      axios
        .post("https://opai.renderverse.io/chat-gen", {
          question: input,
          person: person,
          walletAddress: address,
        })
        .then((res) => {
          setPromp([...promp, input, res.data.ans]);
          setInput("");
        })
        .then(() => {
          setLoaded(false);
        })
        .catch((e) => console.log(e));
    }
  }

  useEffect(() => {
    axios
      .post(
        "https://api.renderverse.io/renderscan/v1/users/op/generate-chat/gens",
        {
          walletAddress: address,
        }
      )
      .then((res) => {
        const chats = res.data.generatedImages;
        let months = [];
        for (let i = 0; i < chats.length; i++) {
          const month = new Date(chats[i].createdAt).getUTCMonth() - 1;
          months.push(month);
        }
        months = [...new Set(months)];
        setChatHistory(months);
        setChats([...chats]);
      });
  }, [isConnected]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function ChatModal() {
    return (
      <Modal
        size="4xl"
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <ModalOverlay />
        <ModalContent
          py={4}
          boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
          bg={colors.bgColor}
        >
          <ModalHeader mt={4}>
            <Text
              my={4}
              boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
              p={3}
              bg={`rgba(0,0,0,.7)`}
              borderRadius="md"
              fontWeight={"bold"}
              fontFamily={fonts.parafont}
              color={colors.fontLightColor}
              fontSize={{ base: "3xl" }}
            >
              {namedMonths[m]} Chats
            </Text>
          </ModalHeader>
          <ModalCloseButton color={colors.highLightColor} />
          <ModalBody>
            <ChatHistoryComponent />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => setModalIsOpen(false)}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }

  function ChatHistoryComponent() {
    return (
      <Box>
        {isConnected && showChat ? (
          <Box my={5} px={4} pt={4} display={"flex"} flexDirection="column">
            {viewHistory.map((p, i) => (
              <Box flexDir={"column"} columnGap={"2rem"} key={i} display="flex">
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"flex-start"}
                  columnGap="1rem"
                >
                  <FaUser size={32} color={colors.highLightColor} />
                  <Text
                    my={4}
                    boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
                    p={3}
                    bg={`rgba(0,0,0,.7)`}
                    borderRadius="md"
                    fontWeight={"bold"}
                    fontFamily={fonts.parafont}
                    width="100%"
                    color={colors.fontLightColor}
                    mx="auto"
                    fontSize={{ base: "sm" }}
                  >
                    {p.question}
                  </Text>
                </Box>

                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"flex-end"}
                  columnGap="1rem"
                >
                  <Text
                    boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
                    my={4}
                    p={3}
                    bg={`rgba(0,0,0,.7)`}
                    borderRadius="md"
                    fontWeight={"bold"}
                    fontFamily={fonts.parafont}
                    textAlign="right"
                    width="100%"
                    color={colors.fontLightColor}
                    mx="auto"
                    fontSize={{ base: "sm" }}
                  >
                    {p.anwser}
                  </Text>

                  <FaRobot size={32} color={colors.highLightColor} />
                </Box>
              </Box>
            ))}
          </Box>
        ) : null}
      </Box>
    );
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
      ref={ref}
    >
      <ChatModal />
      <SpaceNavbar
        disconnect={disconnect}
        balance={balanceFeteched ? balance.formatted : ""}
        address={address ? address : ""}
        isConnected={isConnected}
      />

      <Box
        mt={24}
        mx="auto"
        width={{ base: "100%", lg: "88%", xl: "75%" }}
        pos="relative"
        bg={`rgba(0,0,0,.7)`}
        p={{ base: 2, lg: 12 }}
        boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
        py={12}
      >
        <Box display={"grid"} px={2} pt={2}>
          <Text
            textAlign={"left"}
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            color={colors.highLightColor}
            fontSize={{ base: "3xl" }}
          >
            👨🏻‍🎤 ChatGPT Assistant 👨🏻‍🎤
          </Text>
          <Text
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            width="auto"
            color={colors.fontLightColor}
            mx="auto"
            fontSize={{ base: "md" }}
            my={4}
          >
            AI Assistant powered By {person}
          </Text>
        </Box>
        {isSelected ? (
          <Flex justifyContent={"center"} mb={8}>
            <Button
              onClick={() => {
                setIsSelected(false);
                setPromp([]);
              }}
            >
              Change AI Assitant
            </Button>
          </Flex>
        ) : null}

        {!isSelected ? (
          <FormControl
            boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
            bg={`rgba(0,0,0,.7)`}
            borderRadius="md"
            border="2px"
            px={4}
            py={2}
          >
            <FormLabel
              variant={"unstyled"}
              p={4}
              fontFamily={fonts.parafont}
              fontSize={{ base: "md" }}
              fontWeight="bold"
              bg={`rgba(0,0,0,.7)`}
              color={colors.fontLightColor}
            >
              Choose your AI assitance
            </FormLabel>
            <Grid
              rowGap={"2rem"}
              columnGap="2rem"
              gridTemplateColumns={{
                base: "1fr",
                lg: "1fr 1fr",
                xl: "1fr 1fr 1fr 1fr",
              }}
              p={5}
            >
              {options.map((o, i) => (
                <Flex
                  boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
                  className="bg_img"
                  p={0}
                  m={0}
                  onClick={() => {
                    setPerson(o);
                    setIndex(i);
                    setIsSelected(true);
                  }}
                  cursor={"pointer"}
                  alignItems={"center"}
                  columnGap={"1rem"}
                  key={i}
                  borderRadius="md"
                >
                  <Image
                    borderRadius="md"
                    borderRightRadius={"none"}
                    minW="64px"
                    minH="64px"
                    maxW="64px"
                    maxH="64px"
                    objectFit={"cover"}
                    src={imgs[i]}
                  ></Image>
                  <Text
                    fontFamily={fonts.headingFont}
                    color={colors.highLightColor}
                    fontWeight="bold"
                  >
                    {o}
                  </Text>
                </Flex>
              ))}
            </Grid>
          </FormControl>
        ) : null}

        {isConnected ? (
          <Grid>
            <GridItem pos="relative">
              <Box my={5} px={4} pt={4} display={"flex"} flexDirection="column">
                {promp.map((p, i) => (
                  <Box columnGap={"2rem"} key={i} display="flex">
                    {i % 2 === 0 ? (
                      <Box
                        display={"flex"}
                        alignItems="center"
                        justifyContent={"flex-end"}
                      >
                        <FaUser size={32} color={colors.highLightColor} />
                      </Box>
                    ) : null}

                    <Text
                      boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
                      my={4}
                      p={3}
                      bg={`rgba(0,0,0,.7)`}
                      borderRadius="md"
                      fontWeight={"bold"}
                      fontFamily={fonts.parafont}
                      width="100%"
                      color={colors.fontLightColor}
                      mx="auto"
                      fontSize={{ base: "sm" }}
                    >
                      {p}
                    </Text>

                    {i % 2 === 0 ? null : (
                      <Box
                        display={"flex"}
                        alignItems="center"
                        justifyContent={"flex-end"}
                      >
                        <Image
                          borderRadius={"md"}
                          maxW="48px"
                          maxH="48px"
                          objectFit={"contain"}
                          src={imgs[index]}
                        ></Image>
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            </GridItem>
            <GridItem>
              {loaded ? (
                <Flex
                  pb={8}
                  fontSize={{ base: "sm", lg: "lg" }}
                  pr={12}
                  justifyContent={"flex-end"}
                  alignItems="center"
                  columnGap={".5rem"}
                >
                  <Text
                    fontFamily={fonts.parafont}
                    fontSize={{ base: "md" }}
                    fontWeight="bold"
                    color={colors.highLightColor}
                  >
                    {person} is typing
                  </Text>
                  <div className="typing">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </Flex>
              ) : null}
            </GridItem>

            <GridItem>
              <FormControl
                border="2px"
                borderRadius={"xl"}
                bg={`rgba(0,0,0,.7)`}
              >
                <Input
                  value={input}
                  onChange={(i) => setInput(i.target.value)}
                  placeholder="send"
                  variant={"unstyled"}
                  border={`2px groove ${colors.boxBorder}`}
                  p={4}
                  fontFamily={fonts.parafont}
                  fontSize={{ base: "md" }}
                  fontWeight="bold"
                  color={colors.fontLightColor}
                  onKeyDown={(e) => {
                    console.log(e);
                    if (e.key === "Enter") {
                      generateMusic();
                    }
                  }}
                />
                <Box
                  cursor={"pointer"}
                  pos="absolute"
                  zIndex={999}
                  right={{ base: "8%", lg: "4%", xl: "2%" }}
                  top={"30%"}
                  onClick={() => generateMusic()}
                >
                  <FaForward size={32} color={colors.highLightColor} />
                </Box>
              </FormControl>
            </GridItem>
          </Grid>
        ) : (
          <Flex mt={12} justifyContent={"center"}>
            <ConnectWalletButton
              onClick={connectWallet}
              title="Connect Wallet"
            />
          </Flex>
        )}
      </Box>

      {isConnected ? (
        <Box
          mx="auto"
          width={{ base: "100%", lg: "88%", xl: "75%" }}
          bg={`rgba(0,0,0,.7)`}
          p={{ base: 2, lg: 12 }}
          boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
        >
          <Text
            textAlign={"left"}
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            color={colors.highLightColor}
            fontSize={{ base: "3xl" }}
          >
            Previous Chats
          </Text>
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1fr 1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            }}
          >
            {chatHistory.map((c, l) => (
              <Box
                onClick={() => {
                  setModalIsOpen(true);
                  setShowChat(true);
                  getMonthChats(c);
                }}
                my={4}
                cursor="pointer"
                p={3}
                boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
                bg={`rgba(0,0,0,.7)`}
                borderRadius="md"
                fontWeight={"bold"}
                fontFamily={fonts.parafont}
                width="100%"
                color={colors.fontLightColor}
                mx="auto"
                fontSize={{ base: "sm" }}
                textAlign="center"
                key={l}
              >
                {namedMonths[c]}
              </Box>
            ))}
          </Grid>
        </Box>
      ) : null}
    </Box>
  );
}

export default ChatGenSpace;
