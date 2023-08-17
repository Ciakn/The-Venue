import { Zoom } from "react-awesome-reveal";
import Icon_Calender from "./../../resources/images/icons/calendar.png";
import Icon_Location from "../../resources/images/icons/location.png";
const VenuInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom triggerOnce className="vn_item">
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red">
                      </div>
                    <div
                      className="vn_icon"
                      style={{ background: `url(${Icon_Calender})` }}
                    ></div>
                    <div className="vn_title">Event Date & Time
                    </div>
                    <div className="vn_desc">
                    Jun,20,2024,
                    @01:30:00 PM 
                    </div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom  delay={500} triggerOnce className="vn_item">
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red">
                      </div>
                    <div
                      className="vn_icon"
                      style={{ background: `url(${Icon_Location})` }}
                    ></div>
                    <div className="vn_title">Event Location
                    </div>
                    <div className="vn_desc">
                  254 Deer oklaohma Lorem, ipsum.
                    </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenuInfo;
