import React from 'react';

export default function ToggleRadio({timerMode, setTimerMode}) {
  // const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event) => {
    // console.log(event.target.value);
    setTimerMode(event.target.value);
    // props.setTimerMode(event.target.value);
  };

  return (
    <div className="toggle-radio">
      <label htmlFor="pomodoro">
        <input 
          type="radio"
          id="pomodoro"
          name="timer-mode"
          value="pomodoro"
          onChange={handleRadioChange}
          checked={timerMode=='pomodoro' || false}
        />
        <p>Focus</p>
      </label>
      <label htmlFor="short-break">
        <input 
          type="radio"
          id="short-break"
          name="timer-mode"
          value="shortBreak"
          onChange={handleRadioChange}
          checked={timerMode=='shortBreak' || false}
        />
        <p>Short Break</p>
      </label>
      <label htmlFor="long-break">
        <input 
          type="radio"
          id="long-break"
          name="timer-mode"
          value="longBreak"
          onChange={handleRadioChange}
          checked={timerMode=='longBreak' || false}
        />
        <p>Long Break</p>
      </label>
      <div 
        className={`fluid ${timerMode}`}
      >
      </div>
    </div>
  );
};