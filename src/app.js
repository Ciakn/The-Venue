import Cards from "./Component/Caroussel/Cards";
import Footer from "./Component/footer/Footer";
import Header from "./Component/header/Header";
import VenuInfo from "./Component/VenuInfo/VenuInfo";

import "./styles.css";
const App = () => {
  return (
    <>
      <Header />

      <Cards />
      <VenuInfo/>

      <div style={{ backgroundColor: "yellow", height: "800px" }}></div>
      <div style={{ backgroundColor: "blue", height: "800px" }}></div>
      <div style={{ backgroundColor: "red", height: "800px" }}></div>
      <div style={{ backgroundColor: "green", height: "800px" }}></div>
      <Footer />
    </>
  );
};

export default App;
