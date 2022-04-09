import { AppProps } from 'next/app';
import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	const queryClient = useRef(new QueryClient()).current;

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<Component {...pageProps} />
			</Hydrate>

			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
