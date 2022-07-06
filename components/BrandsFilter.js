import cn from 'classnames';
import { Icon } from '@iconify/react';

export default function BrandsFilter({ brand, setBrand }) {
  return (
    <div>
      <h4 className="pl-5 font-semibold underline mb-3">Brands Filter</h4>
      {data.map((c) => (
        <button
          key={c.value}
          className={cn(
            'w-full px-5 flex justify-between items-center py-2 capitalize',
            brand === `/products/category/${c.value}` && 'text-red-700'
          )}
          onClick={() => setBrand(`/products/category/${c.value}`)}
        >
          {c.label} <Icon icon="akar-icons:plus" />
        </button>
      ))}
    </div>
  );
}

const data = [
  {
    label: 'Brand one',
    value: 'Brand one',
  },
  {
    label: 'Brand two',
    value: 'Brand two',
  },
  {
    label: 'Brand three',
    value: 'Brand three',
  },
  {
    label: 'Brand four',
    value: 'Brand four',
  },
];
