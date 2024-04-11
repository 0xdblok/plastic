import Image from "next/image";
import Hero from "./component/hero";
import Token from "./component/token";
import Footer from "./component/footer";

export default function Home() {
  return (
    <main className="bg-[#F6D46B]">
      <Hero />
      <Token />
      <Footer />
    </main>
  );
}
