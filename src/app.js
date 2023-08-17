import Cards from "./Component/Caroussel/Cards";
import Footer from "./Component/footer/Footer";
import Header from "./Component/header/Header";
import HighLightsComp from "./Component/Highlights/Highlights";
import VenuInfo from "./Component/VenuInfo/VenuInfo";

import "./styles.css";
const App = () => {
  return (
    <>
      <Header />

      <Cards />
      <VenuInfo />
      <HighLightsComp />

      <Footer />
    </>
  );
};

export default App;
