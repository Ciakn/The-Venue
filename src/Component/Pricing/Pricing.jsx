import { Zoom } from "react-awesome-reveal";
import PurchaseButton from "../utils/PurchaseButton";

const Pricing = () => {
  const PriceState = [
    {
      price: 100,
      position: "Medium",
      desc: "lorem ispum is what it is concuer whilding such as",
      delay: 500,
    },
    {
      price: 150,
      position: "Balcony",
      desc: "lorem ispum is what it is concuer whilding such as",
      delay: 0,
    },
    {
      price: 180,
      position: "Star",
      desc: "lorem ispum is what it is concuer whilding such as",
      delay: 500,
    },
  ];

  return (
    <>
      <div className="bck_black">
        <div id="pricing" className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {PriceState.map((p) => {
              return (
                <Zoom triggerOnce delay={p.delay} className="pricing_item">
                  <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                      <span>${p.price}</span>
                      <span>${p.position}</span>
                    </div>
                    <div className="pricing_description">
                        {p.desc}
                    </div>
                    <div className="pricing_buttons">
                        <PurchaseButton/>
                    </div>
                  </div>
                </Zoom>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
