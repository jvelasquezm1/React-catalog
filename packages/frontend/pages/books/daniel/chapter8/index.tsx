import React, { memo, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

interface Event {
  year: number;
  description: string;
}

const events: Event[] = [
  {
    year: 457,
    description:
      'El decreto de Artajerjes para restaurar y reedificar Jerusalén',
  },
  {
    year: 408,
    description: 'Reconstrucción de Jerusalén completada (49 años)',
  },
  { year: 27, description: 'Jesús es ungido en su bautismo' },
  { year: 31, description: 'Crucifixión de Jesús a mitad de la semana' },
  { year: 34, description: 'El evangelio es llevado a los gentiles' },
  {
    year: 1844,
    description: 'Inicio de la purificación del santuario celestial',
  },
];

const eventGroups: { [key: number]: Event[] } = {
  2300: events,
  70: events.filter((event) => event.year !== 1844),
  1: events.filter((event) => [27, 31, 34].includes(event.year)),
  1810: events.filter((event) => [34, 1844].includes(event.year)),
};

interface ButtonConfig {
  year: number;
  timelapse: number;
  targetTimelapse: number;
  label: string;
  buttonWidth: string;
  action?: () => void;
}

const buttonsConfig: ButtonConfig[] = [
  {
    year: 457,
    timelapse: 2300,
    targetTimelapse: 70,
    label: '70 semanas',
    buttonWidth: 'w-[400%]',
  },
  {
    year: 457,
    timelapse: 70,
    targetTimelapse: 70,
    label: '7 semanas',
    buttonWidth: 'w-full',
  },
  {
    year: 408,
    timelapse: 70,
    targetTimelapse: 70,
    label: '69 semanas',
    buttonWidth: 'w-[100%]',
  },
  {
    year: 27,
    timelapse: 70,
    targetTimelapse: 1,
    label: '1 semana',
    buttonWidth: 'w-[200%]',
  },
  {
    year: 34,
    timelapse: 2300,
    targetTimelapse: 1810,
    label: '1810 años',
    buttonWidth: 'w-full',
  },
];

const generateClassNames = (event: Event, timelapse: number): string => {
  let classNames = 'w-[400%] h-32 translate-y-2 z-0 translate-x-1/2 ';
  if (event.year === 457) classNames += 'border-2 ';
  if (event.year === 34 && timelapse === 2300)
    classNames += 'border-2 border-l-0 w-[100%] ';
  if (event.year === 408 && timelapse === 70)
    classNames += 'border-2 w-[100%] ';
  return classNames.trim();
};

const Chapter8: React.FC = () => {
  const { t } = useTranslation();
  const [activeEvents, setActiveEvents] = useState<Event[]>(events);
  const [timelapse, setTimelapse] = useState<number>(2300);

  const switchWeeks = (targetTimelapse: number) => {
    setActiveEvents(eventGroups[targetTimelapse]);
    setTimelapse(targetTimelapse);
  };

  return (
    <div className="p-4 relative">
      <h2 className="mb-3 text-3xl font-extrabold text-center pb-4 border-b">
        {t('danielBook.chapter8.title')}
      </h2>
      <h2 className="mb-3 text-3xl font-extrabold text-center pb-4 border-b">
        {timelapse}
      </h2>
      <div className="flex">
        {activeEvents.map((event) => (
          <div
            key={event.year}
            className="flex w-full flex-col items-center relative"
          >
            {buttonsConfig.map(
              (btn) =>
                event.year === btn.year &&
                timelapse === btn.timelapse && (
                  <button
                    key={btn.label}
                    onClick={() => switchWeeks(btn.targetTimelapse)}
                    className={`${btn.buttonWidth} z-20 absolute h-32 m-auto translate-x-1/2`}
                  >
                    {btn.label}
                  </button>
                )
            )}
            <div className={generateClassNames(event, timelapse)} />
            <div className="w-4 h-4 bg-blue-500 rounded-full z-10" />
            <div className="mt-2 text-center">
              <p className="text-xl font-bold">{event.year}</p>
              <p className="text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Chapter8);
