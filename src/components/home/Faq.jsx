import { Box, Button, Flex, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import HeadLines from "../common/HeadLine";
import { FaMinus, FaPlus } from "react-icons/fa";

import Faq from "/public/icons/faq.png";
import Question from "/public/icons/question.png";

export default function FaqComponent() {
  const [index, setIndex] = useState(0);
  return (
    <Box>
      <Grid
        justifyContent={"flex-end"}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      >
        <GridItem display={"flex"}>
          <HeadLines
            x={"80px"}
            y="30px"
            s={1.1}
            desc=""
            subTitle="$OPAI"
            title="FAQ's"
          />
        </GridItem>
        <GridItem></GridItem>
      </Grid>
      <Grid
        py={8}
        px={4}
        columnGap="4rem"
        templateColumns={{ base: "1fr ", lg: "1fr 1fr 1fr" }}
        justifyContent="center"
        alignItems={"center"}
        maxW={{ base: "100%", lg: "80%", xl: "70%" }}
        minW={{ base: "100%", lg: "80%", xl: "70%" }}
        mx="auto"
      >
        {faqs.map((f, i) => (
          <Box position={"relative"} textAlign={"center"} key={i}>
            <Box
              transition={"all 200ms ease"}
              display={i === index ? "block" : "none"}
            >
              <Box
                bottom={0}
                right={0}
                borderRadius="xl"
                width="24px"
                pos={"absolute"}
                border={`2px solid ${colors.fontLightColor}`}
              ></Box>
              <Box
                right={0}
                bottom={0}
                width="3px"
                height={"24px"}
                borderRadius="xl"
                pos={"absolute"}
                border={`2px solid ${colors.fontLightColor}`}
              ></Box>
              <Box
                bottom={0}
                borderRadius="xl"
                width="24px"
                pos={"absolute"}
                border={`2px solid ${colors.fontLightColor}`}
              ></Box>
              <Box
                bottom={0}
                width="3px"
                height={"24px"}
                borderRadius="xl"
                pos={"absolute"}
                border={`2px solid ${colors.fontLightColor}`}
              ></Box>
              <Box
                borderRadius="xl"
                width="24px"
                pos={"absolute"}
                border={`2px solid ${colors.fontLightColor}`}
              ></Box>
              <Box
                width="3px"
                height={"24px"}
                borderRadius="xl"
                pos={"absolute"}
                border={`2px solid ${colors.fontLightColor}`}
              ></Box>
              <Box
                right={0}
                borderRadius="xl"
                width="24px"
                pos={"absolute"}
                border={`2px solid ${colors.fontLightColor}`}
              ></Box>
              <Box
                right={0}
                width="3px"
                height={"24px"}
                borderRadius="xl"
                pos={"absolute"}
                border={`2px solid ${colors.fontLightColor}`}
              ></Box>
            </Box>

            <Flex
              justifyContent={"center"}
              px={4}
              alignItems={"center"}
              columnGap=".2rem"
            >
              <Image maxW="24px" maxH="24px" src={Faq} />
              <Button
                my={4}
                mx={2}
                fontFamily={fonts.headingFont}
                fontSize={{ base: "xl", xl: "2xl" }}
                color={i === index ? colors.fontLightColorV2 : colors.boxBorder}
                variant={"unstyled"}
                textAlign="center"
                onClick={() => {
                  setIndex(i);
                }}
              >
                {f.title}
              </Button>
            </Flex>
          </Box>
        ))}
      </Grid>
      <Accordion
        maxW={{ base: "100%", lg: "80%", xl: "70%" }}
        minW={{ base: "100%", lg: "80%", xl: "70%" }}
        mx="auto"
        allowMultiple
      >
        {faqs[index].faqs.map((f, i) => (
          <AccordionItem
            border={"2px"}
            borderTopRadius={i === 0 ? "3xl" : ""}
            borderBottom={i === faqs[index].faqs.length - 1 ? "2px" : "0"}
            borderColor={colors.highLightColor}
            p={3}
            className="bg_img"
            key={i}
          >
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  {" "}
                  <Box flex="1" textAlign="left">
                    <Flex alignItems={"center"} columnGap="1rem">
                      <Image maxW="24px" maxH="24px" src={Question} />
                      <Text
                        cursor={"pointer"}
                        fontFamily={fonts.headingFont}
                        color={colors.fontLightColor}
                        fontWeight="bold"
                        fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
                      >
                        {f.title}
                      </Text>
                    </Flex>
                  </Box>
                  {!isExpanded ? (
                    <FaPlus color={colors.highLightColor} size="24px" />
                  ) : (
                    <FaMinus color={colors.highLightColor} size="24px" />
                  )}
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text
                    cursor={"pointer"}
                    color={colors.fontLightColorV2}
                    fontFamily={fonts.parafont}
                    fontWeight="bold"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {f.sub}
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>

      <Box
        border={`2px solid ${colors.highLightColor}`}
        py={24}
        borderTopRadius="2xl"
      >
        <Grid justifyContent={"center"} flexDir={"column"}>
          <Text
            cursor={"pointer"}
            fontFamily={fonts.parafont}
            color={colors.fontLightColorV2}
            textAlign="left"
            fontWeight="bold"
            fontSize={{ base: "xl", xl: "2xl" }}
            mb={2}
          >
            .. Join The
          </Text>
          <Box className="gbox">
            <Text
              cursor={"pointer"}
              fontFamily={fonts.headingFont}
              fontWeight="bold"
              fontSize={{ base: "4xl", xl: "6xl" }}
              className="grad_txt"
              textShadow={`2px 2px 1px ${colors.bgColor}`}
            >
              AI Revolution
            </Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

const faqs = [
  {
    title: "About OverPowered AI",
    faqs: [
      {
        title: "What is ChainGPT?",
        sub: "ChainGPT is an advanced AI model that assists individuals and businesses with everything related to Crypto and Blockchain technology. Access complete solutions and use cases using our advanced AI model: Blockchain analytics, AI trading, smart-contract development, AI auditing, risk management, crypto news source, etc.",
      },
      {
        title: "Is ChainGPT free?",
        sub: "ChainGPT is currently in its beta stages, and we're working diligently to expand our final AI model. In its beta stage, ChainGPT is free for individuals and not yet accessible for developers and businesses via API. Once our utility token is released, we will make the 1.0 version available and SDK & API available for individuals, developers, and businesses. At that stage, ChainGPT will no longer be free, and users will have various pricing options.",
      },
      {
        title: "Is ChainGPT currently available for use?",
        sub: "We have developed an early beta model for ChainGPT's AI. As a result, individuals and businesses can begin exploring the use cases and solutions our advanced AI model can offer.",
      },
      {
        title: "How does ChainGPT work?",
        sub: "ChainGPT is a pre-trained language model that uses deep learning techniques such as transformer networks to generate human-like text. It has been trained on a large dataset of text related to crypto and blockchain technology, which allows it to understand and respond to natural language queries about the subject. When a user inputs a query, the model processes it and generates a response based on the information it has learned from the training data. In addition, the model uses advanced techniques such as attention mechanisms to weigh the importance of different input parts and generate a more relevant and accurate response.",
      },
      {
        title: "Can ChainGPT help me program a smart contract?",
        sub: "Yes, ChainGPT can assist with programming smart contracts and other tasks related to decentralized applications and AI trading bots.",
      },
      {
        title: "How is ChainGPT different from ChatGPT?",
        sub: "ChatGPT is very limited regarding new resources, as it is not connected to the internet. ChainGPT, on the other hand, can pull on-chain live data, crypto prices, the latest news, and the newest research about technologies and generally stay up-to-date with accurate information. On top of that, ChatGPT has trained its model with approximately 1% of the information about Crypto & Blockchain; therefore, it tends to provide users with wrong information. ChainGPT V1 is trained with over 95%+ data specific to Blockchain & Crypto, and the remaining being data like Technical Analysis. If that's not enough, ChainGPT is designed to write smart contracts, audit smart contracts, analyze charts, technical analysis, AML solutions, and much more. An advanced AI model explicitly designed for blockchain can provide many use cases to developers, businesses, and individuals in this field. ChatGPT was not intended for the use cases we aim to deliver with V1.",
      },
    ],
  },
  {
    title: "About OverPowered AI",
    faqs: [
      {
        title: "What is ChainGPT?",
        sub: "ChainGPT is an advanced AI model that assists individuals and businesses with everything related to Crypto and Blockchain technology. Access complete solutions and use cases using our advanced AI model: Blockchain analytics, AI trading, smart-contract development, AI auditing, risk management, crypto news source, etc.",
      },
      {
        title: "Is ChainGPT free?",
        sub: "ChainGPT is currently in its beta stages, and we're working diligently to expand our final AI model. In its beta stage, ChainGPT is free for individuals and not yet accessible for developers and businesses via API. Once our utility token is released, we will make the 1.0 version available and SDK & API available for individuals, developers, and businesses. At that stage, ChainGPT will no longer be free, and users will have various pricing options.",
      },
      {
        title: "Is ChainGPT currently available for use?",
        sub: "We have developed an early beta model for ChainGPT's AI. As a result, individuals and businesses can begin exploring the use cases and solutions our advanced AI model can offer.",
      },
      {
        title: "How does ChainGPT work?",
        sub: "ChainGPT is a pre-trained language model that uses deep learning techniques such as transformer networks to generate human-like text. It has been trained on a large dataset of text related to crypto and blockchain technology, which allows it to understand and respond to natural language queries about the subject. When a user inputs a query, the model processes it and generates a response based on the information it has learned from the training data. In addition, the model uses advanced techniques such as attention mechanisms to weigh the importance of different input parts and generate a more relevant and accurate response.",
      },
      {
        title: "Can ChainGPT help me program a smart contract?",
        sub: "Yes, ChainGPT can assist with programming smart contracts and other tasks related to decentralized applications and AI trading bots.",
      },
      {
        title: "How is ChainGPT different from ChatGPT?",
        sub: "ChatGPT is very limited regarding new resources, as it is not connected to the internet. ChainGPT, on the other hand, can pull on-chain live data, crypto prices, the latest news, and the newest research about technologies and generally stay up-to-date with accurate information. On top of that, ChatGPT has trained its model with approximately 1% of the information about Crypto & Blockchain; therefore, it tends to provide users with wrong information. ChainGPT V1 is trained with over 95%+ data specific to Blockchain & Crypto, and the remaining being data like Technical Analysis. If that's not enough, ChainGPT is designed to write smart contracts, audit smart contracts, analyze charts, technical analysis, AML solutions, and much more. An advanced AI model explicitly designed for blockchain can provide many use cases to developers, businesses, and individuals in this field. ChatGPT was not intended for the use cases we aim to deliver with V1.",
      },
    ],
  },
  {
    title: "About OverPowered AI",
    faqs: [
      {
        title: "What is ChainGPT?",
        sub: "ChainGPT is an advanced AI model that assists individuals and businesses with everything related to Crypto and Blockchain technology. Access complete solutions and use cases using our advanced AI model: Blockchain analytics, AI trading, smart-contract development, AI auditing, risk management, crypto news source, etc.",
      },
      {
        title: "Is ChainGPT free?",
        sub: "ChainGPT is currently in its beta stages, and we're working diligently to expand our final AI model. In its beta stage, ChainGPT is free for individuals and not yet accessible for developers and businesses via API. Once our utility token is released, we will make the 1.0 version available and SDK & API available for individuals, developers, and businesses. At that stage, ChainGPT will no longer be free, and users will have various pricing options.",
      },
      {
        title: "Is ChainGPT currently available for use?",
        sub: "We have developed an early beta model for ChainGPT's AI. As a result, individuals and businesses can begin exploring the use cases and solutions our advanced AI model can offer.",
      },
      {
        title: "How does ChainGPT work?",
        sub: "ChainGPT is a pre-trained language model that uses deep learning techniques such as transformer networks to generate human-like text. It has been trained on a large dataset of text related to crypto and blockchain technology, which allows it to understand and respond to natural language queries about the subject. When a user inputs a query, the model processes it and generates a response based on the information it has learned from the training data. In addition, the model uses advanced techniques such as attention mechanisms to weigh the importance of different input parts and generate a more relevant and accurate response.",
      },
      {
        title: "Can ChainGPT help me program a smart contract?",
        sub: "Yes, ChainGPT can assist with programming smart contracts and other tasks related to decentralized applications and AI trading bots.",
      },
      {
        title: "How is ChainGPT different from ChatGPT?",
        sub: "ChatGPT is very limited regarding new resources, as it is not connected to the internet. ChainGPT, on the other hand, can pull on-chain live data, crypto prices, the latest news, and the newest research about technologies and generally stay up-to-date with accurate information. On top of that, ChatGPT has trained its model with approximately 1% of the information about Crypto & Blockchain; therefore, it tends to provide users with wrong information. ChainGPT V1 is trained with over 95%+ data specific to Blockchain & Crypto, and the remaining being data like Technical Analysis. If that's not enough, ChainGPT is designed to write smart contracts, audit smart contracts, analyze charts, technical analysis, AML solutions, and much more. An advanced AI model explicitly designed for blockchain can provide many use cases to developers, businesses, and individuals in this field. ChatGPT was not intended for the use cases we aim to deliver with V1.",
      },
    ],
  },
];
