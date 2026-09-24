import { useState } from 'react';
import './App.css';
import {InputSettings, InputSettingsValues, updateInputSettings} from './InputSettings'
import {PartyTable, Party} from './PartyTable'

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

  // contains the data for all of the parties
  const [partyData, setPartyData] = useState([new Party(0, 0, 0, 0, 0), new Party(0, 0, 0, 0, 0), new Party(0, 0, 0, 0, 0)]);

  return (
    <div className="App">
      <div className='groupInput'>
        <h3>Settings:</h3>
        <InputSettings handler={handleInputSettings}/>
        <h3>Parties:</h3>
        <PartyTable data={partyData}/>
      </div>
      <div id='diagramDiv'></div>
    </div>
  );
}

export default App;
