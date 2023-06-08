import axios from "axios";
import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useAccount } from "wagmi";

export default function InstructionsComponent() {
	const router = useRouter();
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
	  
	const sendData = () => {
		axios
        .post('http://176.9.101.209:5000/users', {
          tg_id: window?.Telegram?.WebApp?.initDataUnsafe?.user?.id,
          wallet: account?.address
        }
        )
        .then(res => {
          console.log('res', res.data);
        })
        .catch(err => {
          console.log('error in request', err);
        });
	  };

	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					telegram<span>-sniper-bot</span>
				</h1>
			</header>

			<div className={styles.buttons_container}>
				<button 
					onClick={sendData}
				>
					SEND DATA
				</button>
			</div>
			<div className={styles.footer}>
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://clutch.co/profile/ois-solutions#summary"
							target={"_blank"}
						>
							Leave us a star on Clutch
						</a>
					</div>
					<div>
						<a
							href="https://www.linkedin.com/company/ois-solutions-dev/"
							target={"_blank"}
						>
							Follow us on LinkedIn
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
