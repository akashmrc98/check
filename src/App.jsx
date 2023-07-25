import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./pages/HomePage";
import ModelPage from "./pages/ModelPage";
import ModelsPage from "./pages/ModelsPage";
import SpacesPage from "./pages/SpacesPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SpaceFactory from "./pages/spaces/SpacesFactory";
import Navbar from "./components/common/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dapp/models",
    element: <ModelsPage />,
  },
  {
    path: "/dapp/spaces",
    element: <SpacesPage />,
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
