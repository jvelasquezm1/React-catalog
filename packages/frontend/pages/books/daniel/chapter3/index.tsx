import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HorizontalCard from '../../../../components/horizontalCard';
import { FireStatue, Furnace } from '../../../../public/assets';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const Chapter3 = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4">
      <h2 className="mb-3 text-3xl font-extrabold text-center pb-4 border-b">
        {t('danielBook.chapter3.title')}
      </h2>
      <p className="mb-3">{t('danielBook.chapter3.description')}</p>
      <div className="rounded-lg">
        <h2 className="mb-5 text-2xl font-extrabold">Datos interesantes</h2>
        <ul role="list" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <HorizontalCard
              title="Babilonia en el tiempo"
              description="Babilonia fue una antigua ciudad ubicada en la región que
                    actualmente forma parte de Irak, a orillas del río Éufrates.
                    Durante el reinado de Nabucodonosor II (605-562 a.C.),
                    Babilonia alcanzó su apogeo y se convirtió en la capital del
                    Imperio Neobabilónico. Nabucodonosor II fue uno de los
                    monarcas más destacados de este imperio. Bajo su gobierno,
                    Babilonia experimentó un período de gran esplendor y
                    desarrollo arquitectónico."
              imageSrc={Furnace}
            />
            <HorizontalCard
              title="Daniel y sus amigos"
              description="En el caso de Daniel y sus amigos (Daniel 1:6-7),
                    sus nombres hebreos originales tenían significados relacionados
                    con Dios. Cambiar esos nombres por otros con significados 
                    asociados a los dioses babilónicos reflejaba la intención
                    de redefinir su identidad religiosa y cultural en el 
                    contexto babilónico. Sin embargo, a lo largo del libro, 
                    Daniel y sus amigos continúan aferrándose a su fe en el Dios 
                    de Israel a pesar de los cambios impuestos en sus nombres y circunstancias."
              imageSrc={FireStatue}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default memo(Chapter3);
