import Link from 'next/link';
// import images and icons
import { Icon } from '@iconify/react';
import ActiveLink from './ActiveLink';

export default function Topbar() {
  return (
    <>
      <div className="flex justify-between items-center px-5 md:px-10 bg-navBg border-b border-slate-400">
        <div className="flex justify-end items-center">
          <Link href="/">
            <a className="text-3xl font-bold leading-5 text-navText py-7">SHOP</a>
          </Link>
        </div>
        <div className="hidden md:block h-full">
          <ul className="flex items-center uppercase font-normal font-inter">
            {topNavData.map((nav) => (
              <li key={nav.label} className="mx-3 h-full py-7 group">
                <ActiveLink href={nav.value} label={nav.label} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end items-center text-xl font-normal text-navText">
          <button className="hidden sm:block mr-7">
            <Icon icon="carbon:search" />
          </button>
          <button className="mr-7">
            <Icon icon="fa-solid:moon" />
          </button>
          <button className="hidden sm:block mr-7 relative">
            <Icon icon="ep:shopping-bag" />
            <span className="absolute -right-2 -top-4 px-[6px] rounded-full bg-green-600 text-white font-semibold text-sm">
              0
            </span>
          </button>
          <button>
            <Icon icon="fa:user-circle-o" />
          </button>
        </div>
      </div>
    </>
  );
}

const topNavData = [
  {
    label: 'home',
    value: '/',
  },
  {
    label: 'shop',
    value: '/shop',
  },
  {
    label: 'blog',
    value: '/blog',
  },
  {
    label: 'contact us',
    value: '/contact',
  },
];
