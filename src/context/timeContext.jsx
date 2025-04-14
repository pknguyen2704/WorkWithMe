import { createContext, useState, useContext, useEffect } from 'react';

const TimerContext = createContext();

export const useTimer = () => useContext(TimerContext);

export const TimerProvider = ({ children }) => {
  const [mode, setMode] = useState("pomodoro");
  const [durations, setDurations] = useState({
    pomodoro: 25,
    short: 5,
    long: 10
  });
  const [timeLeft, setTimeLeft] = useState(durations.pomodoro * 60);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    setTimeLeft(durations[mode] * 60);
  }, [mode, durations]);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // playSound(); 
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning]);

  // const playSound = () => {
  //   const audio = new Audio('/bell.mp3'); // thêm file bell vào public/
  //   audio.volume = 0.5;
  //   audio.play();
  // };

  return (
    <TimerContext.Provider value={{
      mode, setMode,
      durations, setDurations,
      timeLeft, setTimeLeft,
      isRunning, setIsRunning
    }}>
      {children}
    </TimerContext.Provider>
  );
};
