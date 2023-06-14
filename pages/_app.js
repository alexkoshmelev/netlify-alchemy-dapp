import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, useAccount, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  goerli,
  polygonMumbai,
  optimismGoerli,
  arbitrumGoerli,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import MainLayout from "../layout/mainLayout";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";

const { chains, provider } = configureChains(
  [
    mainnet,
    goerli,
    polygon,
    polygonMumbai,
    optimism,
    optimismGoerli,
    arbitrum,
    arbitrumGoerli,
  ],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_PROJECT_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My Alchemy DApp",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export { WagmiConfig, RainbowKitProvider };

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      if (!isReconnected) router.reload();
      if (address) {
        axios
          .post('https://tg-bot.skbi.tech/users', {
            tg_id: window?.Telegram?.WebApp?.initDataUnsafe?.user?.id,
            wallet: address
          }
          )
          .then(res => {
            console.log('res', res.data);
          })
          .catch(err => {
            console.log('error in request', err);
          });
      }
    },
  });

  useEffect(() => {
    if (account.isConnected) {
      axios
        .post('https://tg-bot.skbi.tech/users', {
          tg_id: window?.Telegram?.WebApp?.initDataUnsafe?.user?.id,
          wallet: account.address
        }
        )
        .then(res => {
          console.log('res', res.data);
        })
        .catch(err => {
          console.log('error in request', err);
        });
    }
  }, [account])


  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        modalSize="compact"
        overlayBlur="small"
        initialChain={process.env.NEXT_PUBLIC_DEFAULT_CHAIN}
        chains={chains}
      >
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
