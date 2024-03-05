import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

const LanguageSwitcher: React.FC<{
  onChange?: (locale: string) => unknown;
}> = ({ onChange }) => {
  const router = useRouter();
  const locales = router.locales;

  const [displayLanguages, setDisplayLanguages] = useState(false);

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

  return (
    <div className="center w-44">
      <button
        className="h-full w-full text-left p-2 hover:bg-slate-600"
        onClick={() => setDisplayLanguages(!displayLanguages)}
      >
        Languages
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
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
