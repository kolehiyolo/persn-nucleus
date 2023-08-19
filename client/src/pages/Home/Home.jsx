import React, {useEffect, useState} from 'react';

import ToggleRadio from '../../components/ToggleRadio/ToggleRadio.jsx';
import Timer from '../../components/Timer/Timer.jsx';
import Settings from '../../components/Settings/Settings.jsx';
import SettingsSVG from './settings.svg';

export default function Home() {
  const [timerDurations, setTimerDurations] = useState(
    {
      pomodoro: {
        minutes: 25,
        seconds: 0,
        milliseconds: 0
      },
      shortBreak: {
        minutes: 5,
        seconds: 0,
        milliseconds: 0
      },
      longBreak: {
        minutes: 15,
        seconds: 0,
        milliseconds: 0
      },
    }
  );
  const [timerMode, setTimerMode] = useState('pomodoro');
  const [settingsIsActive, setSettingsIsActive] = useState(false);
  // setTimerMode('shortBreak');
  // setTimerMode('longBreak');

  const toggleSettings = () => {
    setSettingsIsActive(
      (prevSettingsIsActive) => {
        return !prevSettingsIsActive;
      }
    );
  };

  return (
    <main className="main home">
      <div className="title">
        <h1>Pomodoro</h1>
        {/* <img className="settings-button" src={SettingsSVG}></img> */}
      </div>
      <ToggleRadio 
        timerMode={timerMode}
        setTimerMode={setTimerMode}
      />
      <Timer 
        timerMode={timerMode}
        timerDurations={timerDurations[timerMode]}
      />
      {
        settingsIsActive &&
        <Settings 
          timerDurations={timerDurations}
          setTimerDurations={setTimerDurations}
          toggleSettings={toggleSettings}
        />
      }
      <button className="settings-button" onClick={toggleSettings}>
        <img className="" src={SettingsSVG}></img>
      </button>
    </main>
  )
};