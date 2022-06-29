import cn from 'classnames';

export default function PriceRange({ value, onChange }) {
  return (
    <>
      <h4 className="pl-5 font-semibold underline mt-4">Price Filter</h4>
      <div className="grid grid-cols-2 gap-4 items-center px-5 mt-4">
        <span className="text-center">
          <span>Min $</span>
          <input
            type="number"
            value={value.min}
            onChange={onChange}
            id="min"
            className={cn(
              'max-w-max w-full px-1 text-center border-2 border-slate-700 focus:outline-none',
              value.error && 'border-red-500'
            )}
          />
        </span>
        <span className="text-center">
          <span>Max $</span>
          <input
            type="number"
            value={value.max}
            onChange={onChange}
            id="max"
            className={cn(
              'max-w-max w-full px-1 text-center border-2 border-slate-700 focus:outline-none',
              value.error && 'border-red-500'
            )}
          />
        </span>
      </div>
    </>
  );
}
