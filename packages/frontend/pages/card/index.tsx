import React, { memo } from 'react';

const ModalBabylon = () => {
  return (
    <div
      className="static left-0 top-0 z-[1055] block w-full overflow-y-auto overflow-x-hidden outline-none"
      tabIndex={-1}
    >
      <div>
        <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <h5>Modal title</h5>
        </div>
        <div className="relative flex-auto p-4">
          Modal body text goes here. Modal body text goes here. Modal body text
          goes here. Modal body text goes here. Modal body text goes here. Modal
          body text goes here.
        </div>
      </div>
    </div>
  );
};

export default memo(ModalBabylon);
