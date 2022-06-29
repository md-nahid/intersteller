import { Icon } from '@iconify/react';

export default function FreeShipping() {
  return (
    <>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5 py-10 max-w-7xl m-auto px-5">
        <div className="flex">
          <span className="mt-1 text-2xl text-slate-500">
            <Icon icon="ant-design:car-outlined" />
          </span>
          <div className="ml-3 text-slate-700 font-semibold text-sm">
            <h4 className="uppercase">free shipping</h4>
            <p className="font-normal mt-1 leading-6">
              Free shipping on all US order or order above $200
            </p>
          </div>
        </div>
        <div className="flex">
          <span className="mt-1 text-2xl text-slate-500">
            <Icon icon="system-uicons:support" />
          </span>
          <div className="ml-3 text-slate-700 font-semibold text-sm">
            <h4 className="uppercase">support 24/7</h4>
            <p className="font-normal mt-1 leading-6">Contact us 24 hours a day, 7 days a week</p>
          </div>
        </div>
        <div className="flex">
          <span className="mt-1 text-2xl text-slate-500">
            <Icon icon="arcticons:backup" />
          </span>
          <div className="ml-3 text-slate-700 font-semibold text-sm">
            <h4 className="uppercase">30 days return</h4>
            <p className="font-normal mt-1 leading-6">
              Simpley return it within 30 days for an exchange
            </p>
          </div>
        </div>
        <div className="flex">
          <span className="mt-1 text-2xl text-slate-500">
            <Icon icon="icons8:lock-2" />
          </span>
          <div className="ml-3 text-slate-700 font-semibold text-sm">
            <h4 className="uppercase">100% payment secure</h4>
            <p className="font-normal mt-1 leading-6">We ensure secure payment with PEV</p>
          </div>
        </div>
      </div>
    </>
  );
}
