import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Starting interval");

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup function: runs when component unmounts
    return () => {
      console.log("Clearing interval");
      clearInterval(intervalId);
    };
  }, []);

  return <h2>Timer: {seconds} seconds</h2>;
};

export default Timer;
