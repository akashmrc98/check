import { Box, ChakraProvider } from "@chakra-ui/react";

import HomePage from "./pages/HomePage";
import ModelPage from "./pages/ModelPage";
import Dapp from "./pages/DappPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SpaceFactory from "./pages/spaces/SpacesFactory";
import Navbar from "./components/common/Navbar";
import { colors } from "./theme/colors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dapp",
    element: <Dapp />,
  },
  {
    path: "/dapp/models/:model",
    element: <ModelPage />,
  },
  {
    path: "/dapp/spaces/:space",
    element: <SpaceFactory />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
