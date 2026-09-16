import './App.css';

export function InputSettings(setter) {
  // updates the settings values
  function updateInputSettings() {
    console.log("Called");
    
    try {
      // gets the values from the inputs
      let s = parseInt(document.getElementById('totalSeats').value);
      let m = parseInt(document.getElementById('minVotes').value);
      let a = document.getElementById('allocation').value;

      // updates state
      setter(new InputSettingsValues(s, m, a));

      console.log("Updated");
    } catch {}
  }

  // returns the html inputs
  return (
    <div>
      <label htmlFor='totalSeats'>Seats: </label>
      <input type='number' id='totalSeats' name='totalSeats' className='inputSettingsInput' min='1' defaultValue='1' onInput={updateInputSettings()}/>
      <label htmlFor='minVotes'>Min. votes: </label>
      <input type='number' id='minVotes' name='minVotes' className='inputSettingsInput' min='0' defaultValue='0' onInput={updateInputSettings()}/>
      <label htmlFor='allocation'>Allocation method: </label>
      <select id='allocation' name='allocation' onChange={updateInputSettings()}>
        <option value={0}>D'Hondt</option>
        <option value={1}>Sainte-Laguë</option>
      </select>
    </div>
  )
}

// class to hold the settings values
export class InputSettingsValues {
  constructor(seats, minVotes, allocation) {
    this.seats = seats;
    this.minVotes = minVotes;
    this.allocation = allocation;
  }
}