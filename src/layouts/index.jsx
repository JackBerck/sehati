import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
