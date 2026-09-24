import './App.css';
import './PartyTable.css';

export function PartyTable({data}) {
  return (
    <table>
      <tr>
        <th>Colour</th>
        <th>Position</th>
        <th>Votes</th>
        <th>Initial Seats</th>
        <th>Final Seats</th>
      </tr>
      <tr>
        <td><input type='color' value={data[0].colour}/></td>
        <td><select value={data[0].position}>
          <option value={0}>Opposition</option>
          <option value={1}>Government</option>
          <option value={2}>Cross-Bench</option>
          </select></td>
        <td><input type='number' value={data[0].votes}/></td>
        <td><input type='number' value={data[0].inseats}/></td>
        <td>{data[0].fseats}</td>
        <td><button>X</button></td>
        <td><button>🡑</button></td>
        <td><button>🡓</button></td>
      </tr>
      <tr>
        <td><input type='color' value={data[1].colour}/></td>
        <td><select value={data[1].position}>
          <option value={0}>Opposition</option>
          <option value={1}>Government</option>
          <option value={2}>Cross-Bench</option>
          </select></td>
        <td><input type='number' value={data[1].votes}/></td>
        <td><input type='number' value={data[1].inseats}/></td>
        <td>{data[1].fseats}</td>
        <td><button>X</button></td>
        <td><button>🡑</button></td>
        <td><button>🡓</button></td>
      </tr>
      <tr>
        <td><input type='color' value={data[2].colour}/></td>
        <td><select value={data[2].position}>
          <option value={0}>Opposition</option>
          <option value={1}>Government</option>
          <option value={2}>Cross-Bench</option>
          </select></td>
        <td><input type='number' value={data[2].votes}/></td>
        <td><input type='number' value={data[2].inseats}/></td>
        <td>{data[2].fseats}</td>
        <td><button>X</button></td>
        <td><button>🡑</button></td>
        <td><button>🡓</button></td>
      </tr>
      <tr>
        <td></td>
        <td>Totals:</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  )
}

export class Party {
  constructor(colour, position, votes, inseats, fseats) {
    this.colour = colour;
    this.position = position;
    this.votes = votes;
    this.inseats = inseats;
    this.fseats = fseats;
  }
}