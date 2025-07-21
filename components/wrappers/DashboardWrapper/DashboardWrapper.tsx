"use client";

import { ReactNode, useState } from "react";
import { Footer, Header, Nav } from "@/components/organisms";

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = () => setDrawerOpen((prev) => !prev);

	return (
		<div className="flex w-full">
			<Header drawerOpen={drawerOpen} onToogleDrawer={toggleDrawer} />
			{/**
			 */}
			<Nav drawerOpen={drawerOpen} onToogleDrawer={toggleDrawer} />
			<main
				className="flex-grow-1 p-2 md:p-6"
				style={{ width: "calc(100% - 280px)" }}
			>
				<div className="flex items-center min-h-[74px] px-4 py-2 md:px-6"></div>

				<div
					className="box-border flex flex-col mx-auto px-4 relative w-full md:px-6"
					style={{ minHeight: "calc(100vh - 124px)" }}
				>
					<>{children}</>
					<Footer />
				</div>
			</main>
		</div>
	);
};

export default DashboardWrapper;
