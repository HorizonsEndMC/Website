import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header></header>
      <body className="App-body">
        <img src={'https://avatars.githubusercontent.com/u/95584275?s=200&v=4'} className="App-logo" alt="logo" />
        <h2>WIP</h2>
        <p>A space themed Minecraft server where you can build your own starships, fly them to different planets, fight against other players in ship to ship combat, all of this and more without any mods required, just a resource pack!</p>
        <p>IP: horizonsend.net</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ul>
          <li>
			      <a href='https://horizonsend.net/discord' target="_blank" rel="noreferrer">Discord</a>
          </li>
          <li>
			      <a href='https://reddit.com/r/HorizonsEnd' target="_blank" rel="noreferrer">Reddit</a>
          </li>
          <li>
			      <a href='https://github.com/HorizonsEndMC' target="_blank" rel="noreferrer">GitHub</a>
          </li>
		    </ul>
      </body>
    </div>
  );
}

export default App;
