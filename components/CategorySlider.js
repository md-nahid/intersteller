import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function CategorySlider() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-5 py-5 font-inter">
        <div className="group relative overflow-hidden">
          <Image
            layout="responsive"
            width={100}
            height={80}
            src="https://i.ibb.co/6vrRbW0/mikkel-bech-yj-AFnk-Lt-KY0-unsplash.jpg"
            alt="icon"
            className="w-full h-full group-hover:scale-110 transition-all duration-500"
          />
          <div className="text-slate-50 absolute left-0 top-0 p-5 w-full h-full group-hover:bg-slate-800 group-hover:bg-opacity-50 transition-all duration-500">
            <h3 className="capitalize text-3xl">big collections</h3>
            <button className="flex items-center mt-3">
              explore
              <span className="mt-1 ml-3 font-semibold">
                <Icon icon="akar-icons:arrow-right" />
              </span>
            </button>
          </div>
        </div>
        <div className="group relative overflow-hidden">
          <Image
            layout="responsive"
            width={100}
            height={80}
            src="https://i.ibb.co/Qcqq2Rb/one.jpg"
            alt="icon"
            className="w-full h-full group-hover:scale-110 transition-all duration-500"
          />
          <div className="text-slate-50 absolute right-0 bottom-0 p-5 w-full h-full group-hover:bg-slate-800 group-hover:bg-opacity-50 transition-all duration-500">
            <div className="absolute right-0 bottom-0 p-5">
              <h3 className="capitalize text-3xl">big collections</h3>
              <button className="flex items-center mt-3">
                explore
                <span className="mt-1 ml-3 font-semibold">
                  <Icon icon="akar-icons:arrow-right" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="group relative overflow-hidden">
          <Image
            layout="responsive"
            width={100}
            height={80}
            src="https://i.ibb.co/QYB2DtY/three.jpg"
            alt="icon"
            className="w-full h-full group-hover:scale-110 transition-all duration-500"
          />
          <div className="text-slate-50 absolute left-0 top-0 p-5 w-full h-full group-hover:bg-slate-800 group-hover:bg-opacity-50 transition-all duration-500">
            <h3 className="capitalize text-3xl text-slate-50">big collections</h3>
            <button className="flex items-center mt-3">
              explore
              <span className="mt-1 ml-3 font-semibold">
                <Icon icon="akar-icons:arrow-right" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
