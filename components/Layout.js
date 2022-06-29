import Footer from './Footer';
import Topbar from './Topbar';
import MobileMenu from './MobileMenu';
import useWindowsize from '../hooks/useWindowsize';

export default function Layout({ children }) {
  const width = useWindowsize();
  return (
    <>
      <header className="md:sticky top-0 z-50">{width > 767 ? <Topbar /> : <MobileMenu />}</header>
      <main>{children}</main>
      <footer className="bg-slate-200">
        <Footer />
      </footer>
    </>
  );
}
