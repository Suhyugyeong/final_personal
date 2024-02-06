import { useState, useEffect } from "react";

const Timer = ({ endtime }) => {
  // console.log("999", endtime);

  const [countTime, setCountTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      // console.log("00", endtime);
      const currentDate = new Date();
      const endDate = new Date(endtime);
      const timeRemaining = endDate - currentDate;
      // console.log("000000", currentDate, endDate, timeRemaining);
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)); //1초 1000밀리초
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      console.log(days, hours, minutes, seconds);
      setCountTime({ days, hours, minutes, seconds });

      // setTimeLeft((prevTimeLeft) => {
      //   console.log("99999", prevTimeLeft);
      //   return {
      //     days: prevTimeLeft.days,
      //     hours: prevTimeLeft.hours,
      //     minutes: prevTimeLeft.minutes,
      //     seconds: prevTimeLeft.seconds - 1,
      //   };
      // });
    };

    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, [endtime]);

  // useEffect(() => {
  //   const updateTimer = () => {
  //     setTimeLeft((prevTimeLeft) => {
  //       console.log("99999", prevTimeLeft);
  //       return {
  //         days: prevTimeLeft.days,
  //         hours: prevTimeLeft.hours,
  //         minutes: prevTimeLeft.minutes,
  //         seconds: prevTimeLeft.seconds - 1,
  //       };
  //     });
  //   };

  //   const timerId = setInterval(updateTimer, 1000);

  //   return () => clearInterval(timerId);
  // }, [endtime]);

  return (
    <div>
      <div id="timer">
        <div>
          {countTime.days}
          <span>Days</span>
        </div>
        <div>
          {countTime.hours}
          <span>Hours</span>
        </div>
        <div>
          {countTime.minutes}
          <span>Minutes</span>
        </div>
        <div>
          {countTime.seconds}
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
