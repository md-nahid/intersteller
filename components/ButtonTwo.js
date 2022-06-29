import { Icon } from '@iconify/react';
import cn from 'classnames';

export default function ButtonTwo({ type, label, show, onClick, showIcon }) {
  return (
    <>
      <button
        type={type}
        className={cn(
          'flex items-center px-2 sm:px-4 py-2 bg-slate-300 rounded hover:bg-slate-500 hover:text-slate-50 capitalize',
          show && 'bg-slate-500 text-slate-50'
        )}
        onClick={onClick}
      >
        {showIcon && showIcon}
        <span className="ml-1 hidden sm:block">{label}</span>
      </button>
    </>
  );
}
