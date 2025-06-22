import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-06-28T16:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-6 font-montserrat">
        До выпускного вечера осталось
      </h2>
      <div className="flex justify-center gap-4 md:gap-8">
        <div className="countdown-unit">
          <div className="countdown-number">{timeLeft.days}</div>
          <div className="countdown-label">дней</div>
        </div>
        <div className="countdown-unit">
          <div className="countdown-number">{timeLeft.hours}</div>
          <div className="countdown-label">часов</div>
        </div>
        <div className="countdown-unit">
          <div className="countdown-number">{timeLeft.minutes}</div>
          <div className="countdown-label">минут</div>
        </div>
        <div className="countdown-unit">
          <div className="countdown-number animate-pulse">
            {timeLeft.seconds}
          </div>
          <div className="countdown-label">секунд</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
