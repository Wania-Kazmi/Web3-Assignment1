"use client";

import {
  GoogleSocialWalletConnector,
  FacebookSocialWalletConnector,
  GithubSocialWalletConnector,
  DiscordSocialWalletConnector,
  TwitchSocialWalletConnector,
  TwitterSocialWalletConnector,
} from "@zerodevapp/wagmi";
import { useState } from "react";
import {
  WagmiConfig,
  configureChains,
  createClient,
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
} from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const connector = new GoogleSocialWalletConnector({
  options: {
    projectId: "14966fd4-83b1-4c71-989c-fd7a2142addf",
    shimDisconnect: true,
  },
});

function WagmiGoogleExample() {
  const { chains, provider, webSocketProvider } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  const client = createClient({
    autoConnect: false,
    provider,
    webSocketProvider,
  });

  const ConnectButton = () => {
    const [loading, setLoading] = useState(false);
    const { connect, error, isLoading, pendingConnector } = useConnect();
    const { address, connector, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { chain } = useNetwork();

    const connectWallet = async () => {
      setLoading(true);
      await connect({
        connector: new GoogleSocialWalletConnector({
          options: {
            projectId: "14966fd4-83b1-4c71-989c-fd7a2142addf",
          },
        }),
      });
      setLoading(false);
    };

    if (isConnected) {
      return (
        <div>
          <div>{address}</div>
          <div>Connected to {connector?.name}</div>
          <a
            href={`${chain?.blockExplorers?.default.url}/address/${address}`}
            target="_blank"
          >
            Explorer
          </a>
          <br />
          <button onClick={() => disconnect}>Disconnect</button>
        </div>
      );
    }
    return (
      <button disabled={isLoading || loading} onClick={connectWallet}>
        {isLoading || loading ? "loading..." : "Connect to Google"}
      </button>
    );
  };
  return (
    <WagmiConfig client={client}>
      <ConnectButton />
    </WagmiConfig>
  );
}
export default WagmiGoogleExample;
