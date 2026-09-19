import './App.css';

// function containing the html component for changing the input settings
export function InputSettings({handler}) {
  // returns the html inputs
  return (
    <div>
      <label htmlFor='totalSeats'>Seats: </label>
      <input type='number' id='totalSeats' name='totalSeats' className='inputSettingsInput' min='1' defaultValue='1' onChange={handler}/>
      <label htmlFor='minVotes'>Min. votes: </label>
      <input type='number' id='minVotes' name='minVotes' className='inputSettingsInput' min='0' defaultValue='0' onChange={handler}/>
      <label htmlFor='allocation'>Allocation method: </label>
      <select id='allocation' name='allocation' onChange={handler}>
        <option value={0}>D'Hondt</option>
        <option value={1}>Sainte-Laguë</option>
      </select>
    </div>
  )
}

// function to read the settings and return the data structure
export function updateInputSettings() {
  try {
    // gets the values from the inputs
    let s = parseInt(document.getElementById('totalSeats').value);
    let m = parseInt(document.getElementById('minVotes').value);
    let a = document.getElementById('allocation').value;

    // updates state
    return(new InputSettingsValues(s, m, a));
  } catch {
    return null;
  }
}

// class to hold the settings values
export class InputSettingsValues {
  constructor(seats, minVotes, allocation) {
    this.seats = seats;
    this.minVotes = minVotes;
    this.allocation = allocation;
  }
}