import { Box } from "@chakra-ui/react";

import ModelsPage from "./ModelsPage";
import SpacesPage from "./SpacesPage.jsx";

function DappPage() {
  return (
    <Box>
      <Box width={{ base: "100%", lg: "100%" }} mx="auto">
        <SpacesPage />
        <ModelsPage />
      </Box>
    </Box>
  );
}

export default DappPage;
