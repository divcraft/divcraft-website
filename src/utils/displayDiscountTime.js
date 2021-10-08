import React, { useEffect, useState } from 'react';

export const displayDiscountTime = finalDate => {
  const [showCounter, setshowCounter] = useState(false);
  const [nowTime, setNowTime] = useState(new Date().getTime());

  const endTime = new Date(finalDate).getTime();
  const days = Math.floor(
    endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor(
    (endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60
  );
  const secs = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
  useEffect(() => {
    setshowCounter(true);
    const counterInterval = setInterval(
      () => setNowTime(new Date().getTime()),
      1000
    );
    return () => {
      clearInterval(counterInterval);
    };
  }, []);
  return (
    showCounter && (
      <p>
        <span>{days} dni </span>
        <span>{hours}h </span>
        <span>{minutes}m </span>
        <span>{secs}s</span>
      </p>
    )
  );
};
