import ButtonTwo from './ButtonTwo';
import CustomSelect from './CustomSelect';
import { sortOptions } from '../components/Alldata/SelectOptions';
import { Icon } from '@iconify/react';

export default function ShopFilterMenuTop({ show, setShow, onClearFilters, setSort }) {
  return (
    <div className="px-5 py-2 md:mt-5 sticky top-0 md:top-20 z-30 bg-slate-50 flex items-center justify-between">
      <ButtonTwo
        label="Filter"
        showIcon={<Icon icon="akar-icons:settings-vertical" />}
        onClick={() => setShow(!show)}
        show={show}
      />
      <div className="ml-3">
        <ButtonTwo
          label="Clear Filter"
          showIcon={<Icon icon="fluent:eraser-medium-20-filled" />}
          onClick={onClearFilters}
        />
      </div>
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
