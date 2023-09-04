import { Box, Container, Flex, Image } from "@chakra-ui/react";
import Mainbutton from "../components/common/MainButton";

import TokenForm from "../components/sale/TokenForm";
import TokenInfoComponent from "../components/sale/TokenInfoComponent";

import BG from "/public/bg/11.jpg";
import Logo from "/public/logo_main.png";

import { bsc } from "wagmi/chains";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import { useEffect } from "react";

export default function SalePage() {
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { open, setDefaultChain } = useWeb3Modal();
  const { data: balance, isFetched: balanceFeteched } = useBalance({
    address,
  });

  function addressStrip(str) {
    return (
      str.substring(0, 4) + "...." + str.substring(str.length - 4, str.length)
    );
  }

  function connectWallet() {
    open();
    setDefaultChain(bsc);
  }

  useEffect(() => {
    disconnect();
  }, []);

  // const {
  //   write: mintWrite,
  //   data: mintData,
  //   error: mintError,
  //   isError: mintIsError,
  //   isSuccess: mintIsSuccess,
  //   status: mintStatus,
  // } = useContractWrite({
  //   address: contractAddress,
  //   abi: contractAbi,
  //   functionName: "mintMultiple",
  //   args: [address, getTickets()],
  //   chainId: bsc.chainId,
  //   account: address,
  //   value: BigInt(totalPrice() * 10 ** 18),
  // });

  return (
    <Box
      width="100%"
      pos="relative"
      w="100vw"
      backgroundImage={BG}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundBlendMode="color"
      minH={{ base: "100vh", xl: "100vh" }}
      backgroundPosition="center"
      pb={32}
    >
      <Box zIndex={9999999999} pos="absolute" top="4%" right="5%">
        <Flex cursor={"pointer"}>
          <Mainbutton />
        </Flex>
      </Box>

      <Box pos="absolute" top="2%" left="5%">
        <Flex
          display={{ base: "none", xl: "flex" }}
          justifyContent={"flex-end"}
        >
          <Image maxW="180px" src={Logo} />
        </Flex>
      </Box>
      <Container minW="80%" pt={32}>
        <Box
          justifyContent={"center"}
          columnGap="1rem"
          display={"flex"}
          py={24}
        >
          <TokenForm
            isConnected={isConnected}
            disconnect={disconnect}
            address={address}
            onClick={connectWallet}
          />
        </Box>
        <TokenInfoComponent />
      </Container>
    </Box>
  );
}
