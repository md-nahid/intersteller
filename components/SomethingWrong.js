import Image from 'next/image';
// import images
import WrongPic from '../public/images/somethingwrong.png';
import Button from './Button';

export default function SomethingWrong({ onClick }) {
  return (
    <>
      <div className="max-w-xl w-full relative">
        <Image src={WrongPic} alt="something wrong" className="w-full" />
        <div className="absolute left-0 top-8 z-20">
          <h4 className="text-2xl text-slate-600 font-bold">Ooops . . .</h4>
          <p className="text-2xl text-slate-600 font-bold mb-8">Something went wrong</p>
          <Button label="Reload" onClick={onClick} />
        </div>
      </div>
    </>
  );
}
