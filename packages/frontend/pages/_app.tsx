import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

function CustomApp({ Component, pageProps }: AppProps) {
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache,
  });

  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app">
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </main>
    </>
  );
}

export default CustomApp;
