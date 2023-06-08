import Head from "next/head";
import Navbar from "../components/navigation/navbar";

export default function MainLayout({ children }) {
	return (
		<div>
			<Head>
        		<script src="https://telegram.org/js/telegram-web-app.js"></script>
			</Head>
            <Navbar />
            {children}
		</div>
	);
}
