import React from 'react';

import ToggleRadio from '../../components/ToggleRadio/ToggleRadio.jsx';
import Timer from '../../components/Timer/Timer.jsx';

export default function Home() {
  return (
    <main className="main home">
      <div className="title">
        <h1>Pomodoro</h1>
      </div>
      {/* <ToggleRadio /> */}
      <Timer />
    </main>
  )
};