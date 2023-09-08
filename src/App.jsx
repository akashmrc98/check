import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { useEffect, useState } from "react";
import { colors } from "./theme/colors";

import Lottie from "lottie-react";
import groovyWalkAnimation from "/public/lottie/loader_3.json";

const HomePage = lazy(() => import("./pages/HomePage"));
const ModelsPage = lazy(() => import("./pages/ModelsPage"));
const SpacesPage = lazy(() => import("./pages/SpacesPage"));
const SpaceFactory = lazy(() => import("./pages/spaces/SpacesFactory"));
const ModelPage = lazy(() => import("./pages/ModelPage"));
const SalePage = lazy(() => import("./pages/SalePage"));

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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3500);
    }
  }, [loading]);

  const Loader = () => (
    <div
      style={{
        background: colors.bgColor,
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Lottie animationData={groovyWalkAnimation} />
    </div>
  );

  return loading ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}

export default App;
