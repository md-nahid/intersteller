import { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';

export default function Newsletter() {
  const [valid, setValid] = useState(false);
  const [notValid, setNotValid] = useState(false);
  const [email, setEmail] = useState('');
  function handleSumit(e) {
    e.preventDefault();
    if (email.match(/\S+@\S+\.\S+/)) {
      setNotValid(false);
      setValid(true);
      setEmail('');
    } else {
      setNotValid(true);
      setValid(false);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setValid(false);
    }, 3000);
  }, [valid]);

  return (
    <section className="bg-slate-100 py-8 sm:py-10 md:py-20">
      <SectionHeader
        title="subscribe to our newsletter"
        subtitle="Sign up for our newsletter to be updated on the latest designs, exclusive offers, inspiration and tips!"
      />
      <div className=" mt-5 sm:mt-10 md:mt-14 sm:flex sm:justify-center sm:items-center">
        <form onSubmit={handleSumit} className="sm:flex items-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-5 py-3 border-0 outline-0 w-full text-center sm:min-w-[420px] md: sm:text-left placeholder:text-slate-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="Submit"
            className="bg-slate-700 text-slate-50 px-5 py-3 cursor-pointer hover:bg-slate-900 transition-all duration-300 w-full mt-5 sm:mt-0 md:px-16"
          >
            Submit
          </button>
        </form>
      </div>
      {valid && (
        <p className="text-center text-green-600 underline mt-2">
          Congratulations. You have Susscesfully Subscribed. Thanks
        </p>
      )}
      {notValid && (
        <p className="text-center text-red-600 underline mt-2">
          Please provide a valid email address!
        </p>
      )}
    </section>
  );
}
