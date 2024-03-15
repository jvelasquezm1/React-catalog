import { MutableRefObject, useCallback, useEffect } from 'react';

const useOutsideClick = <T,>({
  ref,
  callback,
  value,
}: {
  ref: MutableRefObject<HTMLDivElement | null>;
  callback: (value: T) => void;
  value: T;
}) => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(value);
      }
    },
    [ref, callback, value]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClick]);
};

export { useOutsideClick };
