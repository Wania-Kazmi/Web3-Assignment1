// "use client";

// import { web3ModalConfig } from '@zerodevapp/wagmi/web3modal'
// import { 
//   SocialWalletConnector,
//   GoogleSocialWalletConnector, 
//   FacebookSocialWalletConnector, 
//   GithubSocialWalletConnector,
//   DiscordSocialWalletConnector,
//   TwitchSocialWalletConnector,
//   TwitterSocialWalletConnector,
// } from '@zerodevapp/wagmi'

// import {
//   EthereumClient,
//   w3mConnectors,
//   walletConnectProvider,
// } from "@web3modal/ethereum";

// import { Web3Modal, Web3Button } from "@web3modal/react";
// import { polygonMumbai } from 'wagmi/dist/chains';
// import { WagmiConfig, configureChains } from 'wagmi';

// function Web3ModalExample() {
//     const defaultWalletConenctProjectId = "14966fd4-83b1-4c71-989c-fd7a2142addf";
//     const { chains, provider, webSocketProvider } = configureChains(
//       [polygonMumbai],
//       [
//         walletConnectProvider({ projectId: defaultWalletConenctProjectId }),
//       ],
//     )
//     const client = createClient({
//       autoConnect: false,
//       connectors: [
//         new SocialWalletConnector({options: {
//           projectId: "14966fd4-83b1-4c71-989c-fd7a2142addf",
//         }}),
//         new GoogleSocialWalletConnector({options: {
//           projectId: "14966fd4-83b1-4c71-989c-fd7a2142addf",
//         }}),
//         ...w3mConnectors({
//           projectId: defaultWalletConenctProjectId,
//           version: "2",
//           appName: "web3Modal",
//           chains,
//         }),
//       ],
//       provider,
//       webSocketProvider,
//     })
  
//     const ethereumClient = new EthereumClient(client, chains);
  
//     return (
//       <>
//         <WagmiConfig client={client}>
//           <Web3Button />
//         </WagmiConfig>
//         <Web3Modal
//             {...web3ModalConfig}
//             projectId={defaultWalletConenctProjectId}
//             ethereumClient={ethereumClient}
//         />
//       </>
//     )
//   }