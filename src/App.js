import { useState } from 'react';
import './App.css';
import {InputSettings, InputSettingsValues, updateInputSettings} from './InputSettings'
import {PartyTable, Party, getPartyData} from './PartyTable'

// main function
function App() {
  // contains data for the input settings
  const [inputSettingsValues, setInputSettingsValues] = useState(new InputSettingsValues(1, 0, 0, 0, false));

  // updates the input settings
  function handleInputSettings() {
    let values = updateInputSettings();
    if (values != null) {
      setInputSettingsValues(values);
    }
  }

  // contains the data for all of the parties
  const [partyData, setPartyData] = useState([
    new Party('#000000', 0, 0, 0, 0),
    new Party('#000000', 0, 0, 0, 0),
    new Party('#000000', 0, 0, 0, 0),
    new Party('#000000', 0, 0, 0, 0),
    new Party('#000000', 0, 0, 0, 0)]);

  // gets the new data for the party with the provided index and updates the partyData state
  function handlePartyData(index) {
    let values = getPartyData(index);
    if (values != null) {
      let newPartyData = partyData.slice();
      newPartyData[index] = values;
      setPartyData(newPartyData);
    }
  }

  // adds a new party to the list of parties
  function addParty() {
    let newPartyData = partyData.slice();
    newPartyData.push(new Party('#000000', 0, 0, 0, 0));
    setPartyData(newPartyData);
  }

  // moves or deletes a party in the list, depending on the instruction given
  function alterParty(instruction, index) {
    let newPartyData = partyData.slice();

    switch (instruction) {
      // deletes the party at the given index
      case 'delete':
        newPartyData.splice(index, 1);
        break;
      // moves the party at the given index up the list (towards 0)
      case 'up':
        if (index != 0) {
          newPartyData[index] = partyData[index-1];
          newPartyData[index-1] = partyData[index];
        }
        break;
      // moves the party at the given index down the list (towards the end)
      case 'down':
        if (index != partyData.length - 1) {
          newPartyData[index] = partyData[index+1];
          newPartyData[index+1] = partyData[index];
        }
        break;
    }

    setPartyData(newPartyData);
  }

  return (
    <div className="App">
      <div className='groupInput'>
        <h3>Settings:</h3>
        <InputSettings handler={handleInputSettings}/>
        <h3>Parties:</h3>
        <PartyTable data={partyData} handler={handlePartyData} adder={addParty} changer={alterParty}/>
      </div>
      <div id='diagramDiv'></div>
    </div>
  );
}

export default App;
