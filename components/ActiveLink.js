import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ActiveLink({ href, label }) {
  const router = useRouter();
  const [activeClass, setActiveClass] = useState('');
  useEffect(() => {
    if (router.asPath === href) {
      setActiveClass('text-blue-500 text-shadow');
    } else {
      setActiveClass('');
    }
  }, [router.asPath]);

  return (
    <Link href={href}>
      <a className={activeClass}>{label}</a>
    </Link>
  );
}

ActiveLink.propTypes = {
  href: PropTypes.string.isRequired,
};
