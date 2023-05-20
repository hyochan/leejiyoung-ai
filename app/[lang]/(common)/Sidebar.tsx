'use client';

import type {ReactElement} from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

import type {Translates} from '../../../src/localization';

import type {NavLink} from './Header';

type Props = {
  t: Translates['nav'];
  lang: 'en' | 'ko';
};

export default function Sidebar({t, lang}: Props): ReactElement {
  const pathname = usePathname();
  const navLinks: NavLink[] = [
    {
      name: t.chat,
      path: '/',
    },
  ];

  return (
    <aside className={clsx('w-[280px] bg-basic py-2', 'flex flex-col')}>
      {navLinks.map((link, index) => {
        return (
          <ul
            key={link.name}
            className={clsx(
              'h-12 pointer hover:bg-paper hover:opacity-70',
              'flex items-center',
            )}
          >
            <Link
              href={`${lang}/${link.path}`}
              className={clsx(
                'text-body4 truncate flex-1 h-10 px-8',
                'flex items-center',
                'hover:opacity-100',
                pathname?.includes(link.path) ? 'opacity-100' : 'opacity-30',
              )}
            >
              <li
                key={index}
                className={clsx('text-ellipsis', 'body3 font-bold')}
              >
                {link.name}
              </li>
            </Link>
          </ul>
        );
      })}
    </aside>
  );
}
