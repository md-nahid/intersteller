import { Icon } from '@iconify/react';
import cn from 'classnames';
import useApi from '../hooks/useApi';

export default function Accordion({ selected, setSelected }) {
  const { data, isLoading, isError } = useApi('/products/categories');
  return (
    <>
      {isError && <p>Something wrong</p>}
      {isLoading && <p>Loading ...</p>}
      {data &&
        data.map((c) => (
          <button
            key={c}
            className={cn(
              'w-full px-5 flex justify-between items-center py-3 capitalize',
              selected === `/products/category/${c}` && 'text-red-700'
            )}
            onClick={() => setSelected(`/products/category/${c}`)}
          >
            {c} <Icon icon="akar-icons:plus" />
          </button>
        ))}
    </>
  );
}
