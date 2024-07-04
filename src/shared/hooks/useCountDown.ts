import { useEffect, useState } from "react";

export const useCountDown = (initialValue = 60, interval = 1000) => {
  const [count, setCount] = useState(0);
  const [maxValue, setMaxValue] = useState<number>(initialValue);
  const [countFormatMinSec, setCountFormatMinSec] = useState("00:00");
  const isCounting = count > 0;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (count > 0) {
      timer = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount - 1;
          setCountFormatMinSec(getCountFormatMinSec(newCount));
          return newCount;
        });
      }, interval);
    }

    return () => {
      clearInterval(timer);
    };
  }, [count, interval, maxValue]);

  const startCountdown = (newCount: number) => {
    setCount(newCount);
    setMaxValue(newCount);
    setCountFormatMinSec(getCountFormatMinSec(newCount));
  };

  const resetCountdown = () => {
    setMaxValue(initialValue);
    setCount(initialValue);
  };

  const stopCountdown = () => {
    setMaxValue(0);
    setCount(0);
  };

  const getCountFormatMinSec = (newCount: number): string => {
    const percentage = (newCount / maxValue) * 100;
    const time = Math.round(percentage * (maxValue / 100));

    if (!isFinite(time)) {
      return "00:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formatSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formatMinutes}:${formatSeconds}`;
  };

  return {
    count,
    isCounting,
    maxValue,
    startCountdown,
    stopCountdown,
    resetCountdown,
    countFormatMinSec,
  };
};
