import CountDownShow from "../ShowCountDown/CountDownShow";
import Carroussel from "./Carroussel";

const Cards = () => {
  return (
    <div className="featured_container">
      <Carroussel />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
      <CountDownShow />
    </div>
  );
};

export default Cards;
