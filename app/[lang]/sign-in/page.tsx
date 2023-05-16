import type {ReactElement} from 'react';
import clsx from 'clsx';
import {Inter} from 'next/font/google';
import Logo from 'public/assets/logo.svg';

import {getTranslates} from '../../../src/localization';

import type {Locale} from '~/i18n';

const inter = Inter({subsets: ['latin']});

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {signIn} = await getTranslates(lang);

  return (
    <div
      className={clsx(
        'bg-modal-background',
        'flex-1 bg-paper overflow-hidden',
        'max-md:px-4',
        'flex flex-col justify-center items-center',
      )}
    >
      <div
        className={clsx(
          'bg-modal max-w-[480px] rounded-2xl px-12 py-16',
          'flex flex-col items-center justify-center',
        )}
      >
        <Logo className="h-20 mb-2 text-brand" />
      </div>
    </div>
  );
}
