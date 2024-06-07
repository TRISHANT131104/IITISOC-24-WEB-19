import Image from "next/image";
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
export default function Home() {
  return (
<div>
  <Navbar1/>
  <Navbar2/>
  <div className="min-h-[75vh] bg-gray-200"></div>
  <Footer/>
</div>
  );
}
