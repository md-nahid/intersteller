import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl m-auto gap-5 px-5 py-10">
        <div>
          <Link href="/">
            <a className="text-3xl font-bold">SHOP</a>
          </Link>
          <div className="flex text-slate-600 text-sm mt-5">
            <span className="mt-1 text-xl">
              <Icon icon="bytesize:location" />
            </span>
            <h4 className="ml-2">184 Main RD E, St Albans VIC 32021, Australia</h4>
          </div>
          <div className="flex items-center text-slate-600 text-sm mt-2">
            <span className="text-xl">
              <Icon icon="ant-design:mail-outlined" />
            </span>
            <h4 className="ml-2">example@example.com</h4>
          </div>
          <div className="flex items-center text-slate-600 text-sm mt-2">
            <span className="text-xl">
              <Icon icon="fluent:call-32-regular" />
            </span>
            <h4 className="ml-2">+1234567890</h4>
          </div>
          <div className="flex items-center text-slate-700 text-4xl mt-5">
            <a href="https://facebook.com" className="mr-3 hover:scale-110 duration-500">
              <Icon icon="entypo-social:facebook-with-circle" />
            </a>
            <a href="https://twitter.com" className="mr-3 hover:scale-110 duration-500">
              <Icon icon="entypo-social:twitter-with-circle" />
            </a>
            <a href="https://instagram.com" className="mr-3 hover:scale-110 duration-500">
              <Icon icon="entypo-social:instagram-with-circle" />
            </a>
            <a href="https://pinterest.com" className="mr-3 hover:scale-110 duration-500">
              <Icon icon="entypo-social:pinterest-with-circle" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-slate-900 text-lg font-semibold">Quick Links</h4>
          <div className="flex flex-col mt-5 text-xs">
            <Link href="/">
              <a className="mb-3 hover:font-semibold">SHOP</a>
            </Link>
            <Link href="/">
              <a className="mb-3 hover:font-semibold">Blog</a>
            </Link>
            <Link href="/">
              <a className="mb-3 hover:font-semibold">Contact</a>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-slate-900 text-lg font-semibold">Informations</h4>
          <div className="flex flex-col mt-5 text-xs">
            <Link href="/">
              <a className="mb-3 hover:font-semibold">Privacy Policy</a>
            </Link>
            <Link href="/">
              <a className="mb-3 hover:font-semibold">Terms & Conditions</a>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-slate-900 text-lg font-semibold">We Accept</h4>
          <div className="flex mt-5 text-xl text-slate-500">
            <Link href="/">
              <a className="mr-3 hover:text-slate-900" title="visa card pay">
                <Icon icon="fa:cc-visa" />
              </a>
            </Link>
            <Link href="/">
              <a className="mr-3 hover:text-slate-900" title="paypal card pay">
                <Icon icon="fa:cc-paypal" />
              </a>
            </Link>
            <Link href="/">
              <a className="mr-3 hover:text-slate-900" title="discover card pay">
                <Icon icon="fa:cc-discover" />
              </a>
            </Link>
            <Link href="/">
              <a className=" hover:text-slate-900" title="master card pay">
                <Icon icon="fa:cc-mastercard" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-5 border-t border-slate-500 text-sm px-5 max-w-7xl m-auto">
        <span>&copy;</span> Copyright 2022 <span className="text-red-500">NAHID</span>
      </div>
    </>
  );
}
