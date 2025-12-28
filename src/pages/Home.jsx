import Artists from "../components/Artists";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Trending from "../components/TrendingSection";


export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Trending />
      <Artists />
      <Join />
      <Footer />
    </>
  );
}
