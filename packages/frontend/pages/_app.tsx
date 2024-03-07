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
import Breadcrumbs from '../components/breadcrumbs';

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
        <div className="fixed w-52 top-0 bottom-0 left-0 bg-slate-700 z-20 overflow-auto">
          <Link
            href="/"
            className={`mt-12 pl-4 pr-4 p-2 block w-full text-left font-semibold ${
              router.pathname === '/' && 'bg-slate-700'
            } hover:bg-slate-700 cursor-pointer flex`}
          >
            <Home className="stroke-white h-6 w-6 fill-white mr-4" />
            <span>{t('home')}</span>
          </Link>

          <SideMenuItem
            label={t('daniel')}
            onClick={() => setDisplayDaniel(!displayDaniel)}
            isOpen={displayDaniel}
            chapters={Array.from({ length: 12 })}
            basePath="/books/daniel"
            route={router.pathname}
            t={t}
          />
          <SideMenuItem
            label={t('revelation')}
            onClick={() => setDisplayRevelation(!displayRevelation)}
            isOpen={displayRevelation}
            chapters={Object.values(RevelationChapters)}
            basePath="/books/revelation"
            route={router.pathname}
            t={t}
          />
        </div>
      )}
      <div className="flex flex-col">
        <nav className="flex justify-between bg-slate-700 fixed top-0 bottom-3 w-full h-12 z-20">
          <div className="flex items-center">
            <button
              className={`center h-full p-2 ${
                isSideMenuOpen ? 'mr-48' : 'mr-[1rem]'
              }`}
              onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
            >
              <Menu className="stroke-white h-6" />
            </button>
            <Breadcrumbs t={t} />
          </div>
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
