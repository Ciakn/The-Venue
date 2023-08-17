import { useEffect } from "react";
import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import PurchaseButton from "../utils/PurchaseButton";

const Discount = () => {
  const end = 30;
  const [StartNumber, setStartNumber] = useState(0);
  
  
  useEffect(() => {
    if (StartNumber >= 0 && StartNumber < end) {
      setTimeout(() => {
        setStartNumber((prevCount) => prevCount + 1);
      }, 30);
    }
  }, [StartNumber]);
  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade triggerOnce>
          <div className="discount_porcentage">
            <span>{StartNumber}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide triggerOnce direction="right">
          <div className="discount_description">
            <h3>purchase your tickets now</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              incidunt dolorem similique cum minima maiores ducimus cumque
              aliquam ab suscipit? Consectetur, at? Non id ad eum harum pariatur
              molestias aliquam!
            </p>
            <PurchaseButton/>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
