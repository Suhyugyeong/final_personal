import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useCallback, useState, useEffect } from "react";

const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});
// useEffect(() => {
//   const futureDate = new Date("2024/02/02 00:00:00").getTime();

//   const updateTimer = () => {
//     const now = new Date().getTime();
//     const diff = futureDate - now;

//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(
//       (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//     setTimeLeft({
//       days,
//       hours,
//       minutes,
//       seconds,
//     });
//   };

//   const timerId = setInterval(updateTimer, 1000);

//   return () => clearInterval(timerId);
// }, []);
