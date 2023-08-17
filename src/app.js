import Cards from "./Component/Caroussel/Cards";
import Footer from "./Component/footer/Footer";
import Header from "./Component/header/Header";
import HighLightsComp from "./Component/Highlights/Highlights";
import Pricing from "./Component/Pricing/Pricing";
import VenuInfo from "./Component/VenuInfo/VenuInfo";
import { Element } from "react-scroll";

import "./styles.css";
const App = () => {
  return (
    <>
      <Element name="">
        <Header />
      </Element>
      <Element name="featured">
        <Cards />
      </Element>
      <Element name="venuinfo">
        <VenuInfo />
      </Element>
      <Element name="highlights">
        <HighLightsComp />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Footer />
    </>
  );
};

export default App;
