import React, {useState, useEffect} from 'react';

export default function Timer(props) {
  const [percentage, setPercentage] = useState(0);
  const [startTime, setStartTime] = useState(
    {...props.timerDurations}
  );
  const [currentTime, setCurrentTime] = useState(
    {...startTime}
  );
  const [barRadius, setBarRadius] = useState(210);
  const [timerState, setTimerState] = useState('Ready');
  const [toggleText, setToggleText] = useState('Start');

  const handleToggle = (e) => {    
    if (
      timerState == 'Ready'
    ) {
      setCurrentTime(
        {...startTime}
      );
      console.log(currentTime);
      setPercentage(0);
      setTimerState('Running');
      setToggleText('Pause');
    } else if (
      timerState == 'Running'
    ) {
      console.log(currentTime);
      setTimerState('Paused');
      setToggleText('Resume');
    } else if (
      timerState == 'Paused'
      ) {
      console.log(currentTime);
      setTimerState('Running');
      setToggleText('Pause');
    };
  };

  useEffect(
    () => {
      setStartTime(
        {...props.timerDurations}
      );
      setCurrentTime(
        {...props.timerDurations}
      );
    },
    [props.timerMode, props.timerDurations]
  );
  
  useEffect(
    () => {
      let countdownInterval = null;
      let count = (100 / ((startTime.minutes * 60) + startTime.seconds)) / 10;

      console.log(timerState);

      if (
        timerState == 'Running'
      ) {
        countdownInterval = setInterval(
          () => {
            setPercentage((prevPercentage) => {
              if (prevPercentage + count >= 100) {
                clearInterval(countdownInterval);
                setTimerState('Ready');
                setToggleText('Start');
                return 100;
              }
              return parseFloat((prevPercentage + count).toFixed(2));
            });
            setCurrentTime((prevStartTime) => {
              return {
                minutes: (
                  prevStartTime.seconds == 0 && prevStartTime.milliseconds == 0
                    ? prevStartTime.minutes - 1
                  : prevStartTime.minutes
                ),
                seconds: (
                  prevStartTime.seconds == 0 && prevStartTime.milliseconds == 0
                    ? 59
                  : prevStartTime.milliseconds == 0
                    ? prevStartTime.seconds - 1
                  : prevStartTime.seconds
                ),
                milliseconds: (
                  prevStartTime.milliseconds == 0
                    ? 90
                  : prevStartTime.milliseconds - 10
                ),
              }
            });
          }
          , 100
        )
      } else if (
        timerState == 'Paused'
      ) {
        clearInterval(countdownInterval);
      };

      return () => {
        clearInterval(countdownInterval);
      };
    },
    [timerState]
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
    let milliseconds = (
      currentTime.milliseconds < 10
      ? `0${currentTime.milliseconds}`
      : currentTime.milliseconds
    );

    if (
      !(
        minutes == 0
        && seconds <= 4
      )
    ) {
      return `${minutes}:${seconds}`;
    } else if (
      minutes == 0
      && seconds <= 4
    ) {
      return `${seconds}.${milliseconds}`;
    }
  };

  return (
    <div className="pomodoro-timer">
      <div className="text">
        {/* <p className="percentage">{percentage.toFixed(0)}%</p> */}
        <p className="time">{printTime()}</p>
        <button className="toggle" onClick={handleToggle}>{toggleText}</button>
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
          // className={`fluid ${(isDone) ? 'done': ''}`}
          className={`fluid`}
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
      </svg>
    </div>
  );
};