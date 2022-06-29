import ButtonTwo from './ButtonTwo';
import CustomSelect from './CustomSelect';
import { sortOptions } from '../components/Alldata/SelectOptions';
import { Icon } from '@iconify/react';

export default function ShopFilterMenuTop({ data, show, setShow, onClearFilters, setSort }) {
  return (
    <div className="px-5 py-2 my-2 md:my-10 sticky top-0 md:top-20 z-30 bg-slate-50 flex items-center justify-between">
      <div className="block md:hidden mr-4">
        <ButtonTwo
          label="Filter"
          showIcon={<Icon icon="akar-icons:settings-vertical" />}
          onClick={() => data && setShow(!show)}
          show={show}
        />
      </div>
      <ButtonTwo
        label="Clear Filter"
        showIcon={<Icon icon="fluent:eraser-medium-20-filled" />}
        onClick={onClearFilters}
      />
      <div className="flex items-center ml-auto">
        <p className="mr-3">Sort</p>
        <CustomSelect
          options={sortOptions}
          onChange={(e) => setSort(e.value)}
          instanceID="sort options"
        />
      </div>
    </div>
  );
}
