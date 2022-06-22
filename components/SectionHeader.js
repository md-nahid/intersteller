export default function SectionHeader({ title, subtitle }) {
  return (
    <header className="text-center px-2">
      <h3 className="text-3xl capitalize font-semibold leading-8 xs:leading-5">{title}</h3>
      <span className="border-t-2 border-slate-800 w-36 h-0 inline-block"></span>
      <p className="text-sm sm:text-[16px] font-normal text-slate-800 mt-4">{subtitle}</p>
    </header>
  );
}
