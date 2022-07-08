import Image from 'next/image';
import Link from 'next/link';

export default function ShopCard() {
  return (
    <>
      <div className="py-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
        <div className="flex items-center bg-slate-200 p-2 rounded-md group">
          <Image
            src="/images/brand1.jpg"
            width={100}
            height={100}
            className="rounded-md group-hover:scale-125 duration-300"
          />
          <div className="ml-5">
            <Link href="/">
              <a className="font-semibold">El de amore to</a>
            </Link>
            <p className="text-slate-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
        <div className="flex items-center bg-slate-200 p-2 rounded-md group">
          <Image
            src="/images/brand2.jpg"
            width={100}
            height={100}
            className="rounded-md group-hover:scale-125 duration-300"
          />
          <div className="ml-5">
            <Link href="/">
              <a className="font-semibold">El de amore to</a>
            </Link>
            <p className="text-slate-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
        <div className="flex items-center bg-slate-200 p-2 rounded-md group">
          <Image
            src="/images/brand3.jpg"
            width={100}
            height={100}
            className="rounded-md group-hover:scale-125 duration-300"
          />
          <div className="ml-5">
            <Link href="/">
              <a className="font-semibold">El de amore to</a>
            </Link>
            <p className="text-slate-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
        <div className="flex items-center bg-slate-200 p-2 rounded-md group">
          <Image
            src="/images/brand4.jpg"
            width={100}
            height={100}
            className="rounded-md group-hover:scale-125 duration-300"
          />
          <div className="ml-5">
            <Link href="/">
              <a className="font-semibold">El de amore to</a>
            </Link>
            <p className="text-slate-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
        <div className="flex items-center bg-slate-200 p-2 rounded-md group">
          <Image
            src="/images/brand5.jpg"
            width={100}
            height={100}
            className="rounded-md group-hover:scale-125 duration-300"
          />
          <div className="ml-5">
            <Link href="/">
              <a className="font-semibold">El de amore to</a>
            </Link>
            <p className="text-slate-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
        <div className="flex items-center bg-slate-200 p-2 rounded-md group">
          <Image
            src="/images/brand6.jpg"
            width={100}
            height={100}
            className="rounded-md group-hover:scale-125 duration-300"
          />
          <div className="ml-5">
            <Link href="/">
              <a className="font-semibold">El de amore to</a>
            </Link>
            <p className="text-slate-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
