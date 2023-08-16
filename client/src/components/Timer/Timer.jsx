import React, {useState, useEffect} from 'react';

export default function Timer() {
  const [percentage, setPercentage] = useState(0);
  const [startTime, setStartTime] = useState(
    {
      minutes: 0,
      seconds: 30
    }
  );
  const [currentTime, setCurrentTime] = useState(
    {...startTime}
  );
  const [barRadius, setBarRadius] = useState(210);
  const [isDone, setIsDone] = useState(false);
  const [isAlmostDone, setIsAlmostDone] = useState(false);

  useEffect(
    () => {
      let timer;
      let count = 100 / ((startTime.minutes * 60) + startTime.seconds);
      timer = setInterval(
        () => {
          setPercentage((prevPercentage) => {
            if (prevPercentage + count >= 100) {
              clearInterval(timer);
              // setTimeout(
              //   () => {
              //     setIsDone(true);
              //   }
              //   , 1000
              // );
              setCurrentTime(
                {
                  minutes: 0,
                  seconds: 0
                }                
              );
              return 100;
            }
            return parseFloat((prevPercentage + count).toFixed(2));
          });
          setCurrentTime((prevStartTime) => {
            return {
              minutes: (
                prevStartTime.seconds == 0
                ? prevStartTime.minutes - 1
                : prevStartTime.minutes
              ),
              seconds: (
                prevStartTime.seconds == 0
                ? 59
                : prevStartTime.seconds - 1
              ),
            }
          });
        }
        , 1000
      );
    },
    []
  );

  const printTime = () => {
    let minutes = (
      currentTime.minutes < 10
      ? `0${currentTime.minutes}`
      : currentTime.minutes
    );
    let seconds = (
      currentTime.seconds < 10
      ? `0${currentTime.seconds}`
      : currentTime.seconds
    );

    return `${minutes}:${seconds}`;
  };

  return (
    <div className="pomodoro-timer">
      <div className="text">
        <p className="percentage">{percentage.toFixed(0)}%</p>
        <p className="time">{printTime()}</p>
        <p className="toggle">Pause</p>
      </div>
      <svg className="bar"
        style={
          {
            width: `${barRadius*2}px`,
            height: `${barRadius*2}px`
          }
        }
      >
        <defs>
          {/* <radialGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="10%" stop-color="blue" />
            <stop offset="50%" stop-color="green" />
            <stop offset="90%" stop-color="red" />
          </radialGradient> */}
          {/* <radialGradient id="gradient" cx="30%" cy="150%" r="140%" fx="150%" fy="150%">
            <stop offset="0%" stop-color="gold" />
            <stop offset="50%" stop-color="blue" />
            <stop offset="100%" stop-color="green" />
            <stop offset="50%" stop-color="#03a9f4" />
            <stop offset="100%" stop-color="#25F403" />
          </radialGradient> */}
        </defs>
        <circle
          className="bar"
          cx={barRadius}
          cy={barRadius}
          r={barRadius-10}
          style={
            {
              strokeDashoffset: `${barRadius * (440/70)}`
            }
          }
        ></circle>
        <circle 
          className={`fluid ${(isDone) ? 'done': ''}`}
          cx={barRadius}
          cy={barRadius}
          r={barRadius-10}
          stroke="url(#gradient)"
          style={
            {
              strokeDasharray: `${barRadius * (440/70)}`,
              strokeDashoffset: `calc(${barRadius * (440/70)} - (${barRadius * (440/70)} * ${percentage}) / 100)`
            }
          }
        ></circle>
        {/* <circle 
          className={`half ${(isDone) ? 'done': ''}`}
          cx={barRadius}
          cy={barRadius}
          r={barRadius-10}
          style={
            {
              transition: 'stroke-dashoffset 1s linear',
              strokeDasharray: `${barRadius * (440/70)}`,
              strokeDashoffset: `calc(
                  ${barRadius * (440/70)}
                  - (${barRadius * (440/70)} * ${(percentage - count >=50) ? percentage/2 : 0}) / 100)`
            }
          }
        ></circle> */}
      </svg>
    </div>
  );
};