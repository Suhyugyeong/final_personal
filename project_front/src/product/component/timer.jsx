import { useState, useEffect } from "react";

//assets => css => all.css 에 css 붙여놓음

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);
    futureDate.setHours(0, 0, 0, 0);
    // const futureDate = new Date("2024/02/08 00:00:00").getTime();
    //사용자에게 선택을 주면 이 부분을 바꿔야 함

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = futureDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, []);

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

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Timer = () => {
//   const [countdown, setCountdown] = useState(null);

//   useEffect(() => {
//     // API 호출
//     axios
//       .get("/biddingCountDown/1/biddingCountDown")
//       .then((response) => {
//         const createAt = new Date(response.data.data); // 서버에서 받아온 작성 시간
//         const expireAt = new Date(createAt.getTime() + 7 * 24 * 60 * 60 * 1000); // 7일 후 시간

//         setCountdown(expireAt);
//       })
//       .catch((error) => {
//         console.error("Error fetching countdown data", error);
//       });
//   }, []);

//   // 타이머 업데이트
//   const updateTimer = () => {
//     if (countdown) {
//       const now = new Date().getTime();
//       const diff = countdown.getTime() - now;

//       if (diff > 0) {
//         const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//         const hours = Math.floor(
//           (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         );
//         const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//         // 사용하고자 하는 days, hours, minutes, seconds 값 활용
//         console.log(days, hours, minutes, seconds);
//       } else {
//         // 7일이 지나면 타이머 종료
//         console.log("타이머 종료");
//       }
//     }
//   };

//   // 매초마다 타이머 업데이트
//   useEffect(() => {
//     const timerId = setInterval(updateTimer, 1000);

//     // 컴포넌트 언마운트 시 타이머 제거
//     return () => clearInterval(timerId);
//   }, [countdown]);
//   return (
//     <div>
//       <Timer />
//     </div>
//   );
// };

// export default Timer;
