import { Icon } from '@iconify/react';
import cn from 'classnames';

export default function Accordion({ selected, setSelected }) {
  return (
    <div>
      <h4 className="pl-5 font-semibold underline mb-3">Category Filter</h4>
      {data.map((c) => (
        <button
          key={c.value}
          className={cn(
            'w-full px-5 flex justify-between items-center py-2 capitalize',
            selected === `/products/category/${c.value}` && 'text-red-700'
          )}
          onClick={() => setSelected(`/products/category/${c.value}`)}
        >
          {c.label} <Icon icon="akar-icons:plus" />
        </button>
      ))}
    </div>
  );
}

const data = [
  {
    label: 'Electronics',
    value: 'electronics',
  },
  {
    label: 'Jewelery',
    value: 'jewelery',
  },
  {
    label: "Men's Clothing",
    value: "men's clothing",
  },
  {
    label: "Women's Clothing",
    value: "women's clothing",
  },
];
