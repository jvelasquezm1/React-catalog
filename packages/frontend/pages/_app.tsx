import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Link from 'next/link';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SideMenuItem, { RevelationChapters } from '../components/sideMenuItem';
import { Home } from '../public/assets';
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
  const [displayDaniel, setDisplayDaniel] = useState(true);
  const [displayRevelation, setDisplayRevelation] = useState(true);

  return (
    <>
      <Head>
        <title>{t('biblicalProphecy')}</title>
      </Head>

      <div className="fixed w-52 top-0 bottom-0 left-0 bg-blue-950 z-20 overflow-auto">
        <Link
          href="/"
          className={`mt-[0.45rem] pl-4 pr-4 p-2 block w-full text-left font-semibold ${
            router.pathname === '/' && 'bg-blue-950'
          } hover:bg-blue-950 cursor-pointer flex`}
        >
          <Home className="stroke-white h-6 w-6 fill-white mr-4" />
          <span className="text-white">{t('home')}</span>
        </Link>

        <SideMenuItem
          label={t('daniel')}
          onClick={() => setDisplayDaniel(!displayDaniel)}
          isOpen={displayDaniel}
          chapters={Array.from({ length: 12 })}
          basePath="/daniel"
          route={router.pathname}
          t={t}
        />
        <SideMenuItem
          label={t('revelation')}
          onClick={() => setDisplayRevelation(!displayRevelation)}
          isOpen={displayRevelation}
          chapters={Object.values(RevelationChapters)}
          basePath="/revelation"
          route={router.pathname}
          t={t}
        />
      </div>
      <div className="flex flex-col">
        <nav
          className={
            'ml-[13rem] flex justify-between border-b fixed top-0 bottom-3 w-full h-12 z-20 bg-gradient-to-r from-[#172554] to-[#537895]'
          }
        >
          <div className="mr-52 ml-auto">
            <LanguageSwitcher />
          </div>
        </nav>

        <main className="mt-3 ml-52 p-8">
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </main>
      </div>
    </>
  );
}

export default appWithTranslation(CustomApp);
