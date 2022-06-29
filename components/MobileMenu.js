import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import ActiveLink from './ActiveLink';
import ButtonTwo from './ButtonTwo';

export default function MobileMenu() {
  const [sidebar, setShowSidebar] = useState(false);
  return (
    <div className="fixed left-0 bottom-0 w-full flex justify-between items-center text-2xl font-normal text-navText bg-navBg border-t border-slate-400 z-50 py-3 px-5 shadow-mobileMenu">
      <Link href="/">
        <a>
          <Icon icon="icon-park-solid:home" />
        </a>
      </Link>
      <button>
        <Icon icon="carbon:search" />
      </button>
      <button className="relative">
        <Icon icon="ep:shopping-bag" />
        <span className="absolute -right-4 -top-2 px-[6px] rounded-full bg-green-600 text-white font-semibold text-sm">
          0
        </span>
      </button>
      <button>
        <Icon icon="fa:user-circle-o" />
      </button>
      <button onClick={() => setShowSidebar(!sidebar)}>
        {sidebar ? <Icon icon="akar-icons:cross" /> : <Icon icon="uim:bars" />}
      </button>
      <AnimatePresence>
        {sidebar && (
          <motion.div
            className="fixed top-0 bottom-12 bg-slate-600 bg-opacity-50 right-0 w-full"
            onClick={() => setShowSidebar(false)}
            initial="initial"
            animate="animate"
            exit="initial"
            variants={variants}
          >
            <Drawer onClick={() => setShowSidebar(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Drawer({ onClick }) {
  return (
    <>
      <div
        className="h-full w-full xs:w-3/4 bg-slate-400 text-sm ml-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="p-8 uppercase font-normal font-inter">
          {navData.map((nav) => (
            <li key={nav.label} className="py-3" onClick={onClick}>
              <ActiveLink href={nav.value} label={nav.label} />
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <ButtonTwo label="close" onClick={onClick} />
        </div>
      </div>
    </>
  );
}

const navData = [
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

const variants = {
  initial: {
    width: '0%',
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    width: '100%',
    transition: {
      duration: 0.5,
    },
  },
};
