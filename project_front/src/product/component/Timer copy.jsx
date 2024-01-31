import { useState, useEffect } from "react";

const Timer = ({ countdown }) => {
  const [timeLeft, setTimeLeft] = useState(countdown);

  useEffect(() => {
    const updateTimer = () => {
      setTimeLeft((prevTimeLeft) => {
        return {
          days: prevTimeLeft.days,
          hours: prevTimeLeft.hours,
          minutes: prevTimeLeft.minutes,
          seconds: prevTimeLeft.seconds - 1,
        };
      });
    };

    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, [countdown]);

  return (
    <div>
      <div id="timer">
        <div>
          {timeLeft.days}
          <span>Days</span>
        </div>
        <div>
          {timeLeft.hours}
          <span>Hours</span>
        </div>
        <div>
          {timeLeft.minutes}
          <span>Minutes</span>
        </div>
        <div>
          {timeLeft.seconds}
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
