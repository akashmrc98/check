import { Box, Container } from "@chakra-ui/react";

import TokenForm from "../components/sale/TokenForm";
import TokenInfoComponent from "../components/sale/TokenInfoComponent";

export default function SalePage() {
  return (
    <Box pb={32} minH="100vh" className="bg_img">
      <Container minW="80%" pt={32}>
        <Box justifyContent={"center"} display={"flex"} py={24}>
          <TokenForm />
        </Box>
        <TokenInfoComponent />
      </Container>
    </Box>
  );
}
