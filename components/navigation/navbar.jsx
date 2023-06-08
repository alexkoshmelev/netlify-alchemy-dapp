import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import axios from "axios";

export default function Navbar() {

	const account = useAccount({
		onConnect({ address }) {
		  if (address) {
			axios
			  .post('http://176.9.101.209:5000/users', {
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
			.post('http://176.9.101.209:5000/users', {
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
		<nav className={styles.navbar}>
			<ConnectButton></ConnectButton>
			<a href="https://www.ois.dev/" target={"_blank"}>
				<img className={styles.alchemy_logo} src="/ois-dev-logo.png"></img>
			</a>
		</nav>
	);
}
