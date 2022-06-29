import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function ProductCard({ image, title, price }) {
  return (
    <>
      <div>
        <div className="group bg-slate-50 shadow h-72 2xl:h-96 p-2 flex justify-center items-center relative overflow-hidden">
          <Image
            priority="low"
            layout="fill"
            src={image}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-90 duration-300"
          />
          <div className="absolute left-0 top-0 w-full h-full bg-slate-500 transition-all duration-500 group-hover:bg-opacity-40 opacity-0 group-hover:opacity-100">
            <Preview />
          </div>
        </div>
        <div className="p-2">
          <h4 className="text-slate-900 font-semibold text-lg">{title}</h4>
          <p className="text-slate-400 text-lg">$ {price}</p>
        </div>
      </div>
    </>
  );
}

function Preview() {
  function addToCart() {}
  function previewProduct() {}
  function detailsProduct() {}
  return (
    <div className="flex justify-center items-center h-full text-center">
      <div className="-translate-x-10 group-hover:translate-x-0 duration-500">
        <button
          className="p-3 text-xl text-slate-800 bg-slate-100 rounded-full"
          onClick={addToCart}
        >
          <Icon icon="icon-park-solid:shopping-cart" />
        </button>
        <p className="text-slate-50">Add</p>
      </div>
      <div className="mx-4 -translate-y-10 group-hover:translate-y-0 duration-500">
        <button
          className="p-3 text-xl text-slate-800 bg-slate-100 rounded-full"
          onClick={previewProduct}
        >
          <Icon icon="fa:search" />
        </button>
        <p className="text-slate-50">Preview</p>
      </div>
      <div className="translate-x-10 group-hover:translate-x-0 duration-500">
        <button
          className="p-3 text-xl text-slate-800 bg-slate-100 rounded-full"
          onClick={detailsProduct}
        >
          <Icon icon="uil:share" />
        </button>
        <p className="text-slate-50">Details</p>
      </div>
    </div>
  );
}
