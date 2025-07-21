"use client";

import { PrimeReactProvider } from "primereact/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useGlobalAuth } from "@/hooks/useGlobalAuth";

interface Props {
	children: React.ReactNode;
}

const queryClient = new QueryClient();

export const AppProviders = ({ children }: Props) => {
	useGlobalAuth();
	return (
		<PrimeReactProvider>
			<QueryClientProvider client={queryClient}>
				{children}
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</PrimeReactProvider>
	);
};
