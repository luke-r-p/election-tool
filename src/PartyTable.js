import './App.css';
import './PartyTable.css';

export function PartyTable({data}) {
  return (
    <table>
      <tr>
        <th>Colour</th>
        <th>Votes</th>
        <th>Initial Seats</th>
        <th>Final Seats</th>
      </tr>
      <tr>
        <td><input type='color' value={data[0].colour}/></td>
        <td><input type='number' value={data[0].votes}/></td>
        <td><input type='number' value={data[0].inseats}/></td>
        <td>{data[0].fseats}</td>
        <button>X</button>
        <button>🡑</button>
        <button>🡓</button>
      </tr>
      <tr>
        <td><input type='color' value={data[1].colour}/></td>
        <td><input type='number' value={data[1].votes}/></td>
        <td><input type='number' value={data[1].inseats}/></td>
        <td>{data[1].fseats}</td>
        <button>X</button>
        <button>🡑</button>
        <button>🡓</button>
      </tr>
      <tr>
        <td><input type='color' value={data[2].colour}/></td>
        <td><input type='number' value={data[2].votes}/></td>
        <td><input type='number' value={data[2].inseats}/></td>
        <td>{data[2].fseats}</td>
        <button>X</button>
        <button>🡑</button>
        <button>🡓</button>
      </tr>
    </table>
  )
}

export class Party {
  constructor(colour, votes, inseats, fseats) {
    this.colour = colour;
    this.votes = votes;
    this.inseats = inseats;
    this.fseats = fseats;
  }
}