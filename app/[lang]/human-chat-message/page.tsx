import type {ReactElement} from 'react';
import clsx from 'clsx';
import {HumanChatMessage} from 'langchain/schema';

import {chatAI} from '../../../server/openai';
import {getTranslates} from '../../../src/localization';
import Container from '../(common)/Container';

import type {Locale} from '~/i18n';

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {langs, nav} = await getTranslates(lang);
  const res = await chatAI.call([
    new HumanChatMessage(
      'Translate this sentence from English to French. I love programming.',
    ),
  ]);

  console.log(`res: ${JSON.stringify(res)}`);

  const message = new HumanChatMessage('Hello, how are you?');

  return (
    <Container lang={lang} langs={langs} t={nav}>
      <div className={clsx('flex-1 bg-paper', 'flex flex-col')}>
        <p className={clsx('p-8 text-basic')}>HumanChatMessage</p>
      </div>
    </Container>
  );
}
