import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Link from 'next/link';
import { appWithTranslation } from 'next-i18next';

function CustomApp({ Component, pageProps }: AppProps) {
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache,
  });

  return (
    <>
      <Head>
        <title>Daniel y Apocalipsis</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-gray-800 text-white p-4">
          <div className="flex items-center justify-between">
            <Link href="/">Home</Link>
          </div>
        </nav>

        <main className="app">
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </main>
      </div>
    </>
  );
}

export default appWithTranslation(CustomApp);
