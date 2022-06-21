import cn from 'classnames';
import { useState } from 'react';

export default function Button({ onClick, label }) {
  const [active, setActive] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      className="px-16 py-2 border-2 border-slate-800 text-lg font-inter font-normal tracking-wider relative overflow-hidden"
    >
      <span
        className={cn(
          'absolute w-full h-[70px] top-0 left-0 -translate-x-3 -z-10 transition-all duration-500 -rotate-45 bg-slate-800',
          active ? 'scale-[5]' : 'translate-x-0'
        )}
      ></span>
      <span className="text-slate-50">{label}</span>
    </button>
  );
}
