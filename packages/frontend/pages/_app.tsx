import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Link from 'next/link';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SideMenuItem, { RevelationChapters } from '../components/sideMenuItem';
import { Home, Menu } from '../public/assets';
import { useRouter } from 'next/router';
import LanguageSwitcher from '../components/languageSwitcher';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

function CustomApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();
  const router = useRouter();
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache,
  });
  const [displayDaniel, setDisplayDaniel] = useState(false);
  const [displayRevelation, setDisplayRevelation] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Daniel y Apocalipsis</title>
      </Head>

      {isSideMenuOpen && (
        <div className="text-white fixed w-52 top-0 bottom-0 left-0 bg-slate-900 z-20 overflow-auto">
          <Link
            href="/"
            className={`mt-12 pl-4 pr-4 p-2 block w-full text-left font-semibold ${
              router.pathname === '/' && 'text-white bg-slate-900'
            } hover:text-white hover:bg-slate-900 cursor-pointer flex`}
          >
            <Home className="stroke-white h-6 w-6 fill-white mr-4" />
            <span>Home</span>
          </Link>

          <SideMenuItem
            label={t('daniel')}
            onClick={() => setDisplayDaniel(!displayDaniel)}
            isOpen={displayDaniel}
            chapters={Array.from({ length: 12 })}
            basePath="/daniel"
            route={router.pathname}
          />
          <SideMenuItem
            label={t('revelation')}
            onClick={() => setDisplayRevelation(!displayRevelation)}
            isOpen={displayRevelation}
            chapters={Object.values(RevelationChapters)}
            basePath="/revelation"
            route={router.pathname}
          />
        </div>
      )}
      <div className="flex flex-col">
        <nav className="flex justify-between bg-slate-900 text-white fixed top-0 bottom-3 w-full h-12 z-20">
          <button
            className="center h-full p-2"
            onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
          >
            <Menu className="stroke-white h-6" />
          </button>
          <LanguageSwitcher />
        </nav>

        <main
          className="app mt-12"
          onClick={() => isSideMenuOpen && setIsSideMenuOpen(false)}
        >
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </main>
      </div>
    </>
  );
}

export default appWithTranslation(CustomApp);
