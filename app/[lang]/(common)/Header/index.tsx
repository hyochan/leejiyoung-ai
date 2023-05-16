'use client';

import type {Dispatch, ReactElement, SetStateAction} from 'react';
import {useEffect, useState} from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import clsx from 'clsx';
import {Inter} from 'next/font/google';
import Link from 'next/link';
import Github from 'public/assets/github.svg';
import Logo from 'public/assets/logo.svg';

import {useAuthContext} from '../../../../src/components/AuthProvider';
import {H1} from '../../../../src/components/Typography';
import type {Translates} from '../../../../src/localization';
import {isDarkMode, toggleTheme} from '../../../../src/utils/theme';

import SwitchToggle from './SwitchToggle';

const inter = Inter({subsets: ['latin']});

export type NavLink = {
  name: string;
  path: string;
};

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  t: Translates['nav'];
  lang: 'en' | 'ko';
  langs: {en: string; ko: string};
};

function NavMenus(
  props: Props & {
    login: string;
    isDark: boolean;
    setIsDark: Dispatch<SetStateAction<boolean>>;
    navLinks: NavLink[];
  },
): ReactElement {
  const {isDark, isOpen, setIsOpen} = props;

  return (
    <div className={clsx('flex flex-row-reverse')}>
      <div className="cursor-pointer p-4" onClick={() => setIsOpen(!isOpen)}>
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={() => setIsOpen(!isOpen)}
          width={18}
          height={12}
          strokeWidth={2}
          rotate={0}
          borderRadius={0}
          animationDuration={0.5}
          color={isDark ? 'white' : 'black'}
        />
      </div>
    </div>
  );
}

export default function Header(props: Props): ReactElement {
  const {t, lang} = props;
  const [isDark, setIsDark] = useState(false);
  const {login} = useAuthContext();

  const navLinks: NavLink[] = [];

  useEffect(() => setIsDark(isDarkMode()), []);

  return (
    <header
      className={clsx(
        'h-[56px] decoration-0 bg-basic sticky border border-b-[0.3px] border-border-light dark:border-border-dark',
        'flex flex-row items-center justify-between',
        'pl-3 pr-7',
      )}
    >
      <div className={clsx('flex-1 h-14 ', 'flex flex-row items-center')}>
        <NavMenus
          {...props}
          navLinks={navLinks}
          login={login}
          isDark={isDark}
          setIsDark={setIsDark}
        />
        <div
          className={clsx(
            'decoration-0 transition duration-300 ml-3',
            'hover:opacity-70 hover:translate-y-2px',
            'active:opacity-100 flex-1',
            'flex flex-row items-center justify-between',
          )}
        >
          <Link href={`${lang}/`} className="flex flex-row items-center">
            <Logo className="h-5 text-brand cursor-pointer" />
            <H1
              className={clsx(
                'body3 font-bold ml-[6px] mr-[12px]',
                inter.className,
              )}
            >
              {t.title}
            </H1>
          </Link>
          <div className={clsx('flex flex-row items-center')}>
            <div className="ml-[6px] mr-2">
              <a
                href="https://github.com/prisma-korea/prisma-nextjs-rsc"
                aria-label="prisma-nextjs-rsc"
              >
                <Github className="h-6 body2" />
              </a>
            </div>
            <SwitchToggle
              isDark={isDark}
              onToggle={() => {
                toggleTheme();
                setIsDark(!isDark);
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
