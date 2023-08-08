import { Box, Divider, Grid, GridItem } from "@chakra-ui/react";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

import HeadLines from "../../common/HeadLine";

import { colors } from "../../../theme/colors";
import { tokenomicsData } from "../../../data/tokenomicsData";

import TokenomicsCardComponent from "./TokenomicCardComponent";

function TokenComponent() {
  return (
    <Box width="100%">
      <Grid
        justifyContent={"flex-end"}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      >
        <GridItem></GridItem>
        <GridItem display={"flex"} justifyContent="flex-end" p={12}>
          <HeadLines
            x={"80px"}
            y="30px"
            s={1.1}
            desc=""
            subTitle="$OPAI"
            title="TOKENOMICS"
          />
        </GridItem>
      </Grid>
      <Box
        display={{ base: "grid" }}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        alignItems="center"
        width={"100%"}
      >
        <Box
          bg={colors.bgColor}
          width={"100%"}
          mx="auto"
          border={`1px groove ${colors.boxBorder}`}
          py={4}
          px={{ base: 4, lg: 8 }}
        >
          {tokenomicsData.map((t, i) => (
            <Box key={i}>
              <TokenomicsCardComponent value={t.value} keyv={t.key} />
            </Box>
          ))}
          <Divider />
          <Box>
            <TokenomicsCardComponent keyv="SELL TAX" value="3%" />
            <TokenomicsCardComponent keyv="BUY TAX" value="3%" />
          </Box>
        </Box>
        <Box h="60vh"></Box>
      </Box>
    </Box>
  );
}

export default TokenComponent;
