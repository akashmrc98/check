import { Box, Container, Grid } from "@chakra-ui/react";
import SaleEndSection from "../components/sale/SaleEndSection";
import TokenForm from "../components/sale/TokenForm";
import TokenInfoComponent from "../components/sale/TokenInfoComponent";
import TokenUtilityComponent from "../components/sale/TokenUtilityComponent";

export default function SalePage() {
  return (
    <Box minH="100vh" className="bg_img">
      <Container minW="80%" pt={32}>
        <Grid py={24} templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
          <Box></Box>
          <TokenForm />
        </Grid>
        <TokenInfoComponent />
        <TokenUtilityComponent />
        <SaleEndSection />
      </Container>
    </Box>
  );
}
