import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
function Layout({ title, children }) {
  return (
    <>
     

      <Head>
        <title>{`${title} - tetisan`}</title>
      </Head>
      <Navbar/>
      <div className="	">
        <main>{children}</main>
      </div>
      <div className=" ">
        <Footer/>
      </div>
    </>
  );
}

export default Layout;
