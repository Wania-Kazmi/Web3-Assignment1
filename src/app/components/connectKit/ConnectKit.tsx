"use client";

import { supportedSocialConnectors } from "@zerodevapp/wagmi/connectkit";
import {
  ConnectKitButton,
  ConnectKitProvider,
  supportedConnectors,
} from "connectkit";
supportedConnectors.push(...supportedSocialConnectors);

import {
  SocialWalletConnector,
  GoogleSocialWalletConnector,
  FacebookSocialWalletConnector,
  GithubSocialWalletConnector,
  DiscordSocialWalletConnector,
  TwitchSocialWalletConnector,
  TwitterSocialWalletConnector,
} from "@zerodevapp/wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultClient } from "connectkit";
import { polygonMumbai } from "wagmi/chains";

function ConnectKitExample() {
  const options = {
    options: { projectId: "14966fd4-83b1-4c71-989c-fd7a2142addf" },
  };

  const client = createClient(
    getDefaultClient({
      appName: "Your App Name",
      chains: [polygonMumbai],
      connectors: [
        new GoogleSocialWalletConnector(options),
        new FacebookSocialWalletConnector(options),
        new GithubSocialWalletConnector(options),
        new DiscordSocialWalletConnector(options),
        new TwitchSocialWalletConnector(options),
        new TwitterSocialWalletConnector(options),
        new MetaMaskConnector(),
      ],
      autoConnect: false,
    })
  );

  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="midnight">
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
export default ConnectKitExample;