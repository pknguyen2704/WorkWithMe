import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SettingsIcon from '@mui/icons-material/Settings';

const PomodoroClock = () => {
  const modes = {
    pomodoro: 25,
    short: 5,
    long: 15,
  };

  const [mode, setMode] = useState("pomodoro");
  const [timeLeft, setTimeLeft] = useState(modes[mode] * 60);
  const [isRunning, setIsRunning] = useState(false);

  // Cập nhật khi mode thay đổi
  useEffect(() => {
    setTimeLeft(modes[mode] * 60);
    setIsRunning(false);
  }, [mode]);

  // Đếm ngược
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60));
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handleReset = () => {
    setTimeLeft(modes[mode] * 60);
    setIsRunning(false);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: 'inherit',
      borderRadius: '10px'
    }}>
      {/* Mode Selector */}
      <Box sx={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3
      }}>
        {["pomodoro", "short", "long"].map(m => (
          <Button
            key={m}
            variant={mode === m ? "contained" : "outlined"}
            onClick={() => handleModeChange(m)}
            sx={{
              borderRadius: '50px',
              color: mode === m ? 'black' : 'white',
              bgcolor: mode === m ? 'white' : 'transparent',
              borderColor: 'white',
              fontSize: '1rem',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: 'white',
                color: 'black',
                borderColor: 'white',
              }
            }}
          >
            {m === "pomodoro" ? "Pomodoro" : m === "short" ? "Short Break" : "Long Break"}
          </Button>
        ))}
      </Box>

      {/* Timer Display */}
      <Box sx={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3
      }}>
        <Typography sx={{
          fontSize: '8rem !important',
          fontWeight: '800',
          color: 'white'
        }}>
          {formatTime(timeLeft)}
        </Typography>
      </Box>

      {/* Controls */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        marginTop: 2
      }}>
        <Button
          variant="outlined"
          onClick={() => setIsRunning(!isRunning)}
          sx={{
            borderRadius: '50px',
            borderColor: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            bgcolor: 'white',
            color: 'black',
            paddingX: 5,
            '&:hover': {
              color: 'white',
              bgcolor: 'black',
              borderColor: 'white'
            }
          }}
        >
          {isRunning ? 'Pause' : 'Start'}
        </Button>

        <RestartAltIcon
          sx={{ color:'white', cursor: 'pointer' }}
          onClick={handleReset}
        />
        <SettingsIcon sx={{color:'white', cursor: 'pointer'}}/>
      </Box>
    </Box>
  );
};

export default PomodoroClock;
