import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} - tetisan`}</title>
      </Head>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
