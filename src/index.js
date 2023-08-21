import React from "react";
import ReactDOM from "react-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Ethereum } from "@thirdweb-dev/chains";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import {
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  trustWallet,
  rainbowWallet,
} from "@thirdweb-dev/react";
require("dotenv").config();
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <BrowserRouter>
    <ThirdwebProvider
      dAppMeta={{
        name: "Scooby Doo",
        description: "Best Crypto Meme Coin Presale.",
        logoUrl: "https://i.ibb.co/vYPQTVb/logo-1.png",
        url: window.location.href,
        isDarkMode: true,
      }}
      supportedWallets={[
        metamaskWallet({
          projectId: process.env.REACT_APP_PROJECT_ID,
        }),

        walletConnect({
          projectId: process.env.REACT_APP_PROJECT_ID,
        }),
        trustWallet({
          projectId: process.env.REACT_APP_PROJECT_ID,
        }),
        coinbaseWallet({
          qrmodal: "coinbase",
        }),
        rainbowWallet({
          projectId: process.env.REACT_APP_PROJECT_ID,
        }),
      ]}
      activeChain={{
        ...Ethereum,

        rpc: [
          `https://eth-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_API}`,
        ], // Override the "rpc" field.
        // ... Override any other fields you want to customize.
      }}
      clientId={process.env.REACT_APP_CLIENT_ID}
    >
      <App />
    </ThirdwebProvider>
  </BrowserRouter>
);