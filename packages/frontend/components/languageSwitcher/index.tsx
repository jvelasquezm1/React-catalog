import { useRouter } from 'next/router';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';

const LanguageSwitcher: React.FC<{
  onChange?: (locale: string) => unknown;
}> = ({ onChange }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const locales = router.locales;

  const [displayLanguages, setDisplayLanguages] = useState(false);
  const languageSwitcherRef = useRef<HTMLDivElement | null>(null);

  const switchToLocale = useCallback(
    (locale: string) => {
      const path = router.asPath;

      return router.push(path, path, { locale });
    },
    [router]
  );

  const languageChanged = useCallback(
    async (option: string) => {
      const locale = option;

      if (onChange) {
        onChange(locale);
      }

      await switchToLocale(locale);
    },
    [switchToLocale, onChange]
  );

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        languageSwitcherRef.current &&
        !languageSwitcherRef.current.contains(event.target as Node)
      ) {
        setDisplayLanguages(false);
      }
    },
    [setDisplayLanguages]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className="center w-44" ref={languageSwitcherRef}>
      <button
        className="h-full w-full text-left p-2 hover:bg-slate-400"
        onClick={() => setDisplayLanguages(!displayLanguages)}
      >
        {t('language')}
      </button>
      {displayLanguages && (
        <div className="z-10 bg-white divide-y divide-gray-100 rounded-b-lg shadow w-44">
          <ul className="py-2 text-sm text-gray-700 ">
            {locales?.map((option) => (
              <li key={option} className="hover:bg-gray-100">
                <button
                  onClick={() => languageChanged(option)}
                  className="w-full h-full text-left block px-4 py-2"
                >
                  {t(option)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default memo(LanguageSwitcher);
