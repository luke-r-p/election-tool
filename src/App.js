import { useState } from 'react';
import './App.css';
import {InputSettings, InputSettingsValues, updateInputSettings} from './InputSettings'

// main function
function App() {
  // contains data for the input settings
  const [inputSettingsValues, setInputSettingsValues] = useState(new InputSettingsValues(1, 0, 0));

  // updates the input settings
  function handleInputSettings() {
    let values = updateInputSettings();
    if (values != null) {
      setInputSettingsValues(values);
    }
  }

  return (
    <div className="App">
      <div className='groupInput'>
        <h3>Settings:</h3>
        <InputSettings handler={handleInputSettings}/>
        <h3>Parties:</h3>
        <p>{inputSettingsValues.seats}</p>
        <p>{inputSettingsValues.minVotes}</p>
        <p>{inputSettingsValues.allocation}</p>
      </div>
      <div id='diagramDiv'></div>
    </div>
  );
}

export default App;
