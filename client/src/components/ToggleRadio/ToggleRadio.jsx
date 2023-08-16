import React from 'react';

export default function ToggleRadio() {
  return (
    <div className="toggle-radio">
      <label for="html">
        <input type="radio" id="pomodoro" name="timer-mode" value="Pomodoro" />
        <span>Pomodoro</span>
      </label>
      <label for="css">
        <input type="radio" id="short-break" name="timer-mode" value="Short Break" />
        <span>Short Break</span>
      </label>
      <label for="javascript">
        <input type="radio" id="long-break" name="timer-mode" value="Long Break" />
        <span>Long Break</span>
      </label>
    </div>
  );
};