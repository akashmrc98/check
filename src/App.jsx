import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./pages/HomePage";
import ModelPage from "./pages/ModelPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpaceFactory from "./pages/spaces/SpacesFactory";
import SalePage from "./pages/SalePage";
import ModelsPage from "./pages/ModelsPage";
import SpacesPage from "./pages/SpacesPage";

const router = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dapp",
    element: <SpacesPage />,
  },
  {
    path: "/dapp/models/:model",
    element: <ModelPage />,
  },
  {
    path: "/dapp/models/",
    element: <ModelsPage />,
  },
  {
    path: "/dapp/spaces/",
    element: <SpacesPage />,
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
