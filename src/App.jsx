import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./pages/HomePage";
import ModelPage from "./pages/ModelPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpaceFactory from "./pages/spaces/SpacesFactory";
import SalePage from "./pages/SalePage";
import ModelsPage from "./pages/ModelsPage";
import SpacesPage from "./pages/SpacesPage";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";

const chains = [bsc, bscTestnet];
const projectId = "f5dcf20eb66353538219a935685ad5fd";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

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
    <BrowserRouter>
      <ChakraProvider>
        <WagmiConfig config={wagmiConfig}>
          <Routes>
            {router.map((route, index) => (
              <Route key={index} element={route.element} path={route.path} />
            ))}
          </Routes>
        </WagmiConfig>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
