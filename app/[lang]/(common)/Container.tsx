'use client';

import type {ReactElement} from 'react';
import {useState} from 'react';
import clsx from 'clsx';

import type {Translates} from '../../../src/localization';

import Header from './Header';
import Sidebar from './Sidebar';

type Props = {
  t: Translates['nav'];
  lang: 'en' | 'ko';
  langs: {en: string; ko: string};
  children: React.ReactNode;
};

export default function Container(props: Props): ReactElement {
  const {t, lang, langs, children} = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main
      className={clsx(
        'text-center flex-1 self-stretch relative',
        'flex flex-col',
      )}
    >
      <Header
        t={t}
        lang={lang}
        langs={{
          en: langs.en,
          ko: langs.ko,
        }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className={clsx('flex-1', 'flex flex-row relative')}>
        {isOpen ? <Sidebar t={t} lang={lang} /> : null}
        {children}
      </div>
    </main>
  );
}
