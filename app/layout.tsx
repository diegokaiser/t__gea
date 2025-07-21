import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProviders } from "@/providers/AppProviders";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Gea",
	description: "by    d i e g o ;)",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactElement;
}) {
	return (
		<html lang="es">
			<body className={`${inter.className} relative`}>
				<AppProviders>{children}</AppProviders>
			</body>
		</html>
	);
}
