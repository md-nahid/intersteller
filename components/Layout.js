import Topbar from './Topbar';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Topbar />
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
