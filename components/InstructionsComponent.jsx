import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					telegram<span>-sniper-bot</span>
				</h1>
			</header>

			<div className={styles.buttons_container}>
				
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
