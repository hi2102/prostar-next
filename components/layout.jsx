import NavBar from 'components/navBar';
import Footer from 'components/footer';

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
