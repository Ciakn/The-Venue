import { useState } from "react";
import { useEffect } from "react";
import { Slide } from "react-awesome-reveal";

const CountDownShow = () => {
  const [time, setTime] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    second: "0",
  });
  console.log(time);
  const rendertime = (time, value) => {
    return (
      <div className="countdown_item">
        <div className="countdown_time">{time}</div>
        <div className="countdown_tag">{value}</div>
      </div>
    );
  };
  const getUntilDate = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());

    if (time < 0) {
      console.log(`time has passed`);
    } else {
      const second = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      console.log(second);
      setTime({ second, minutes, hours, days });
    }
  };
  useEffect(() => {
    setInterval(() => getUntilDate(`Jun,20,2024,01:30:00`), 1000);
  }, [getUntilDate]);
  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event Starts in</div>
        <div className="countdown_bottom">
          {rendertime(time.days, `days`)}
          {rendertime(time.hours, `hours`)}
          {rendertime(time.minutes, `minutes`)}
          {rendertime(time.second, `seconds`)}
        </div>
      </div>
    </Slide>
  );
};

export default CountDownShow;
