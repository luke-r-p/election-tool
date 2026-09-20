import './App.css';
import './PartyTable.css';

export function PartyTable() {
  return (
    <table>
      <tr>
        <th>Colour</th>
        <th>Votes</th>
        <th>Initial Seats</th>
        <th>Final Seats</th>
      </tr>
      <tr>
        <td><input type='color'/></td>
        <td><input type='number'/></td>
        <td><input type='number'/></td>
        <td>Seats</td>
        <button>X</button>
        <button>🡑</button>
        <button>🡓</button>
      </tr>
      <tr>
        <td><input type='color'/></td>
        <td><input type='number'/></td>
        <td><input type='number'/></td>
        <td>Seats</td>
        <button>X</button>
        <button>🡑</button>
        <button>🡓</button>
      </tr>
      <tr>
        <td><input type='color'/></td>
        <td><input type='number'/></td>
        <td><input type='number'/></td>
        <td>Seats</td>
        <button>X</button>
        <button>🡑</button>
        <button>🡓</button>
      </tr>
    </table>
  )
}