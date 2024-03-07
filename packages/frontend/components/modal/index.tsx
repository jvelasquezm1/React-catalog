import React, { ReactNode, memo, useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface ModalProps {
  children?: ReactNode;
  buttonTitle?: string;
  buttonAction?: () => void;
  setOpenModal: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  buttonTitle,
  buttonAction,
  setOpenModal,
}) => {
  const { t } = useTranslation();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenModal(false);
      }
    },
    [setOpenModal]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside, setOpenModal]);

  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center text-center items-center p-0">
          <div
            ref={modalRef}
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-7xl"
          >
            <div className="bg-white px-4 pt-5 p-6 pb-4">
              <div className="flex items-start">{children}</div>
            </div>
            <div className="bg-gray-50  py-3 flex flex-row-reverse px-6">
              {buttonTitle && buttonAction && (
                <button
                  onClick={() => buttonAction()}
                  className="inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-red-500 ml-3 w-auto"
                >
                  {buttonTitle}
                </button>
              )}
              <button
                onClick={() => setOpenModal(false)}
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-0 w-auto"
              >
                {t('cancel')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
