import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default function ActiveLink({ href, label, dropdownIcon }) {
  const router = useRouter();
  const [activeClass, setActiveClass] = useState('');
  useEffect(() => {
    if (router.asPath === href) {
      setActiveClass('text-slate-900 font-semibold');
    } else {
      setActiveClass('');
    }
  }, [router.asPath]);

  return (
    <Link href={href}>
      <a className={cn('flex items-center', activeClass && activeClass)}>
        {label} <span className="pl-1">{dropdownIcon}</span>
      </a>
    </Link>
  );
}

ActiveLink.propTypes = {
  href: PropTypes.string.isRequired,
};
