import './App.css';

export default function InputSettings() {
  return (
    <div>
      <label htmlFor='totalSeats'>Seats: </label>
      <input type='number' name='totalSeats' className='inputSettingsInput'/>
      <label htmlFor='minVotes'>Min. votes: </label>
      <input type='number' name='minVotes' className='inputSettingsInput'/>
      <label htmlFor='allocation'>Allocation method: </label>
      <select name='allocation'>
        <option value='0'>D'Hondt</option>
        <option value='1'>Sainte-Laguë</option>
      </select>
    </div>
  )
}