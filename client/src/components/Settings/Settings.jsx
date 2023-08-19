import React, {useState} from 'react';
import CloseSVG from './x.svg';

export default function Settings({timerDurations, setTimerDurations, toggleSettings}) {
  const [tempValues, setTempValues] = useState(
    {...timerDurations}
  );

  const handleTimeChange = (e) => {
    // console.log(e.target.value);
    let target = e.target.id.match(/[^-]+/g);
    console.log(target);

    setTempValues(
      (prevTempValues) => {
        return {
          ...prevTempValues,
          [target[0]]: {
            ...prevTempValues[target[0]],
            [target[1]]: e.target.value
          }
        };
      }
    );
  };

  const saveChanges = () => {
    setTimerDurations(
      () => {
        return {
          ...tempValues
        };
      }
    );
    toggleSettings();
  };

  return (
    <div className="settings">
      <div className="settings-modal modal">
        <div className="head">
          <h2>Settings</h2>
          <button className="close-button" onClick={toggleSettings}>
            <img className="" src={CloseSVG}></img>
          </button>
        </div>
        <div className="body">
          <div className="item-time item">
            <div className="head">
              <h3>Time</h3>
            </div>
            <div className="body">
              <div className="pomodoro">
                <h4>Pomodoro</h4>
                <label htmlFor="pomodoro-minute" className="pomodoro-minutes">
                  <input type="number" id="pomodoro-minutes" 
                    value={tempValues.pomodoro.minutes || 0}
                    onChange={handleTimeChange}
                  />
                  <p>m</p>
                </label>
                <label htmlFor="pomodoro-minute" className="pomodoro-seconds">
                  <input type="number" id="pomodoro-seconds" 
                    value={tempValues.pomodoro.seconds || 0}
                    onChange={handleTimeChange}
                  />
                  <p>s</p>
                </label>
              </div>
              <div className="shortBreak">
                <h4>Short Break</h4>
                <label htmlFor="shortBreak-minute" className="shortBreak-minutes">
                  <input type="number" id="shortBreak-minutes" 
                    value={tempValues.shortBreak.minutes || 0}
                    onChange={handleTimeChange}
                  />
                  <p>m</p>
                </label>
                <label htmlFor="shortBreak-minute" className="shortBreak-seconds">
                  <input type="number" id="shortBreak-seconds" 
                    value={tempValues.shortBreak.seconds || 0}
                    onChange={handleTimeChange}
                  />
                  <p>s</p>
                </label>
              </div>
              <div className="longBreak">
                <h4>Long Break</h4>
                <label htmlFor="longBreak-minute" className="longBreak-minutes">
                  <input type="number" id="longBreak-minutes" 
                    value={tempValues.longBreak.minutes || 0}
                    onChange={handleTimeChange}
                  />
                  <p>m</p>
                </label>
                <label htmlFor="longBreak-minute" className="longBreak-seconds">
                  <input type="number" id="longBreak-seconds" 
                    value={tempValues.longBreak.seconds || 0}
                    onChange={handleTimeChange}
                  />
                  <p>s</p>
                </label>
              </div>
            </div>
          </div>
          {/* <div className="item-font item">
            <div className="head">
              <h3>Font</h3>
            </div>
            <div className="body">
              <label htmlFor="font-1">
                <input type="radio" id="font-1" name="font" value="font-1" />
                <span>Aa</span>
              </label>
              <label htmlFor="font-2">
                <input type="radio" id="short-break" name="font" value="font-2" />
                <span>Aa</span>
              </label>
              <label htmlFor="font-3">
                <input type="radio" id="long-break" name="font" value="font-3" />
                <span>Aa</span>
              </label>
            </div>
          </div> */}
          {/* <div className="item-color item">
            <div className="head">
              <h3>Color</h3>
            </div>
            <div className="body">
              <label htmlFor="color-1">
                <input type="radio" id="color-1" name="color" value="color-1" />
                <span>Aa</span>
              </label>
              <label htmlFor="color-2">
                <input type="radio" id="short-break" name="color" value="color-2" />
                <span>Aa</span>
              </label>
              <label htmlFor="color-3">
                <input type="radio" id="long-break" name="color" value="color-3" />
                <span>Aa</span>
              </label>
            </div>
          </div> */}
        </div>
        <button className="submit-button" onClick={saveChanges}>Apply</button>
      </div>
    </div>
  );
};