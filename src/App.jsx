import Deals from "./components/Deals/Deals";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import Electronics from "./components/Electronics/Electronics";
import Trending from "./components/Trending/Trending";
import Graden from "./components/Garden-part/Graden";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Deals />
      <Trending />
      <Graden />
      <Newsletter />
      <Electronics />
      <Footer />
    </div>
  );
};

export default App;
