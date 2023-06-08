import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<ConnectButton></ConnectButton>
			<a href="https://www.ois.dev/" target={"_blank"}>
				<img className={styles.alchemy_logo} src="/ois-dev-logo.png"></img>
			</a>
		</nav>
	);
}
