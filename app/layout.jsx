import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Hafidz | Portofolio",

    description:
		"My name is Hafidz, I'm a Digital Marketer and I'm passionate about it. I'm currently studying at UPN Veteran Jawa Timur.",

    author: "Hafidz Agung",
    siteUrl: "https://www.hafidagung.my.id",
    applicationName: "Hafidz",

    keywords: [
		"hafid",
		"hafid agung",
		"hafidz",
		"hafidz agung trianto",
		"muhammad hafidz agung trianto",
		"hafidz agung",
		"scdphnm",
		"hafidz porto",
		"hafid upn",
	],

    openGraph: {
		type: "website",
		url: "https://www.hafidagung.my.id",
		title: "Hafidz | Portofolio",
		site_name: "Hafidz | Portofolio",
		description: "My name is Hafidz, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Hafidz Portofolio",
			},
		],
		site_name: "HAfidz | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
