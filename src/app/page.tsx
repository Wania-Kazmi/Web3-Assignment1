import RainbowKitExample from "./components/rainbowKit/RainbowKit";
import WagmiGoogleExample from "./components/wagmiApi/WagmiAPI";
import ConnectKitExample from "./components/connectKit/ConnectKit";
import RpcProviderExample from "./components/etherApi/EtherAPI";
import Image from "next/image";
import Logo from "/public/w-logo.png";
import Etherum from "/public/etherum.webp";
import ERC721Token from "/public/mintNFT.png";
import ERC20Token from "/public/ERC20Token.jpg";


export default function Home() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 -mt-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex flex-col items-center">
            <Image src={Logo} alt="logo" className="h-8 w-14 mr-3" />
            <span className="self-center text-md font-semibold whitespace-nowrap dark:text-white">
              Wania Kazmi
            </span>
          </div>
          <div className="hidden w-full md:block md:w-auto">
            <h2 className="self-center text-2xl font-semibold whitespace-nowrap text-[#7562e0] hover:scale-105 transition-transform duration-200 animate-bounce animation: bounce 1s infinite">
            PIAIC172140
            </h2>
          </div>
        </div>
      </nav>

{/* Step 1 */}

      <main className="">
        {/* <h1 className="text-black text-2xl font-semibold whitespace-nowrap dark:text-white">Basic Account Creation and Transaction</h1> */}
        <h2 className="text-[#7562e0] text-2xl font-bold whitespace-nowrap text-center m-6">
          1. Basic Account Creation and Transaction
        </h2>

        <div className=" flex justify-center space-x-32 overflow-hidden">
          <div className="w-96 bg-base-100 shadow-xl bg-slate-600 rounded-xl m-4">
            <Image src={Etherum} alt="" className="rounded-2xl p-1 h-[290px] w-96" />
            <div>
              <h2 className="text-slate-200 p-4 font-bold text-xl">
                Transfer Etherum:
              </h2>
              <p className="text-slate-200 px-4 font-medium">
                Initiate a simple and batch transaction of Etherum on the Ethereum Goerli
                testnet
              </p>
              <div className="flex justify-around p-4 rounded-xl ">
                <a
                  href="https://goerli.etherscan.io/tx/0xe6eff6abb8d85a43cd0cdc5857d60125dd088166c84be4c3f6de4513148d8956"
                  target="_blank"
                >
                  <button className="bg-[#44119c] text-white font-semibold rounded-xl text-lg px-4 py-2 hover:bg-[#300c6e] hover:scale-105 transition-transform duration-200">
                    Transfer Eth
                  </button>
                </a>
                <a
                  href="https://goerli.etherscan.io/tx/0x0a0b6152808c25d303dea799c7aacf88520ef8924ad7ffdd277f3a467aaef751"
                  target="_blank"
                >
                  <button className="bg-[#44119c] text-white font-semibold rounded-xl text-lg px-4 py-2 hover:bg-[#300c6e] hover:scale-105 transition-transform duration-200">
                    Batch Transfer Eth
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="w-96 bg-base-100 shadow-xl bg-slate-600 rounded-xl m-4">
            <Image src={ERC20Token} alt="" className="rounded-2xl p-1 h-[290px] w-96" />
            <div>
              <h2 className="text-slate-200 p-4 font-bold text-xl">
                Transfer ERC20 Token:
              </h2>
              <p className="text-slate-200 px-4 font-medium">
                Initiate a simple and batch transaction of ERC20 Token on
                Ethereum Goerli testnet
              </p>
              <div className="flex justify-around p-4 rounded-xl ">
                <a
                  href="https://goerli.etherscan.io/tx/0xc4606be5e4d4b3ab76301bb4fc474149586ec83f37310f1f45e3c66633926324"
                  target="_blank"
                >
                  <button className="bg-[#44119c] text-white font-semibold rounded-xl text-lg px-4 py-2 hover:bg-[#300c6e] hover:scale-105 transition-transform duration-200">
                    ERC20
                  </button>
                </a>
                <a
                  href="https://goerli.etherscan.io/tx/0xb78cbf084097e447f77f29c471da42a040763443b998604d6d85758c02471ce9"
                  target="_blank"
                >
                  <button className="bg-[#44119c] text-white font-semibold rounded-xl text-lg px-4 py-2 hover:bg-[#300c6e] hover:scale-105 transition-transform duration-200">
                    Batch ERC20
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

{/* Step 2 */}

        <h2 className="text-[#7562e0] text-2xl font-bold whitespace-nowrap text-center m-6">
          2. Mint NFT
        </h2>
        <div className="flex justify-center">
        <div className=" w-96 bg-base-100 shadow-xl bg-slate-600 rounded-xl m-4">
            <Image src={ERC721Token} alt="" className="rounded-2xl p-1 h-[290px] w-96" />
            <div>
              <h2 className="text-slate-200 p-4 font-bold text-xl">
                Mint NFT Token:
              </h2>
              <p className="text-slate-200 px-4 font-medium">
              Create a smart contract account and mint a NFT.
              </p>
              <div className="flex justify-end p-4 rounded-xl ">
                <a
                  href="https://mumbai.polygonscan.com/address/0xd3e2620F1E4c38E57B32df32778AaD00bE7148a3#tokentxnsErc721"
                  target="_blank"
                >
                  <button className="bg-[#44119c] text-white font-semibold rounded-xl text-lg px-4 py-2 hover:bg-[#300c6e] hover:scale-105 transition-transform duration-200">
                    ERC721 Token
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* step 3 */}
        <h2 className="text-[#7562e0] text-2xl font-bold whitespace-nowrap text-center m-6">
          3. Create and Connect wallet through
        </h2>

        
        <div className="flex flex-col justify-center items-center space-y-6 space-x-6 my-6">
          {/* Ether  */}
          <div className="block max-w-sm px-10 py-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ether</h2>
          <div className="flex flex-wrap break-all bg-sky-800 hover:scale-105 transition-transform duration-200 text-white font-bold text-lg py-4 px-9 rounded-xl"><RpcProviderExample /></div>
          </div>
          {/* RainbowKit  */}
          <div className="block max-w-sm px-10 py-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">RainbowKit</h2>
          <div className="flex flex-wrap break-all bg-sky-800 text-white font-bold text-lg p-4 m-3 rounded-xl hover:scale-105 transition-transform duration-200"><RainbowKitExample /></div>
          </div>
          {/* Wagmi */}
          <div className="block max-w-sm px-10 py-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wagmi</h2>
          <div className="flex flex-wrap break-all bg-sky-800 text-white font-bold text-lg p-4 m-3 rounded-xl hover:scale-105 transition-transform duration-200"><WagmiGoogleExample /></div>
          </div>
          {/* ConnectKit */}
          <div className="block max-w-sm px-10 py-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ConnectKit</h2>
          <div className="flex flex-wrap break-all bg-sky-800 text-white font-bold text-lg p-4 m-3 rounded-xl hover:scale-105 transition-transform duration-200"><ConnectKitExample /></div>
          </div>
        </div>

      </main>
    </div>
  );
}
// 5114B9

{
  /* <div className="flex flex-row gap-6">
        <RainbowKitExample />
        <WagmiGoogleExample />
        <ConnectKitExample />
        <RpcProviderExample />
      </div> */
}
