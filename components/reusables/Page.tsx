import Head from "next/head";
import { PageProps } from "../../types/components/reusables/page";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Page({ children, title }: PageProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      
      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}
