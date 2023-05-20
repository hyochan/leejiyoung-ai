import 'server-only';
import '../../styles/output.css';

import type {ReactElement, ReactNode} from 'react';

import RootProvider from '../../src/components/RootProvider';
import {getTranslates} from '../../src/localization';

import type {Locale} from '~/i18n';

type Props = {
  children: ReactNode;
  params: {lang: Locale};
};

export default async function RootLayout(props: Props): Promise<ReactElement> {
  const {
    params: {lang},
    children,
  } = props;

  const {
    nav: {title},
  } = await getTranslates(lang);

  return (
    <html lang={lang} className="dark">
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="All stats for developers" />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <RootProvider initialLocale={lang}>{children}</RootProvider>
      </body>
    </html>
  );
}
