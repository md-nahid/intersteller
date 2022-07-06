import { Icon } from '@iconify/react';
import cn from 'classnames';

export default function RatingFilter({ star, setStar }) {
  return (
    <div>
      <h4 className="pl-2 font-semibold underline mb-3">Rating Filter</h4>
      {data.map((c) => (
        <button
          key={c.value}
          className={cn(
            'px-3 py-2 text-slate-900 bg-slate-400 bg-opacity-50 inline-flex flex-wrap items-center border-2 rounded-md hover:bg-slate-600 hover:text-slate-50 m-1',
            star === c.value && 'bg-slate-600 text-slate-50'
          )}
          onClick={() => setStar(c.value)}
        >
          <span className="mr-2">{c.label}</span> <Icon icon="noto:glowing-star" />
        </button>
      ))}
    </div>
  );
}

const data = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
  {
    label: '5',
    value: '5',
  },
];
