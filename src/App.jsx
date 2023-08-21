import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./pages/HomePage";
import ModelPage from "./pages/ModelPage";
import Dapp from "./pages/DappPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpaceFactory from "./pages/spaces/SpacesFactory";
import SalePage from "./pages/SalePage";

const router = [
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
  {
    path: "/sale",
    element: <SalePage />,
  },
];

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {router.map((route, index) => (
            <Route key={index} element={route.element} path={route.path} />
          ))}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
