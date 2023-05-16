import type {ReactElement} from 'react';
import clsx from 'clsx';

import {getTranslates} from '../../../src/localization';
import Container from '../(common)/Container';

import type {Locale} from '~/i18n';

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {langs, nav, posts} = await getTranslates(lang);

  return (
    <Container lang={lang} langs={langs} t={nav}>
      <div className={clsx('flex-1 bg-paper', 'flex flex-col')}>
        <p className={clsx('p-8 text-basic')}>{posts.title}</p>
      </div>
    </Container>
  );
}
