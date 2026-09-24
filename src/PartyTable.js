import './App.css';
import './PartyTable.css';

/*
TODO:
- minimum values
- remove leading 0s
- implement totals
- implement allocation
- implement adding/deleting/moving rows
*/

// gets the data for the party with the provided index
export function getPartyData(index) {
  try {
    // gets the values from the inputs (and the current fseats value)
    let c = document.getElementById('colour' + index).value;
    let p = document.getElementById('position' + index).value;
    let v = parseInt(document.getElementById('votes' + index).value);
    let i = parseInt(document.getElementById('inseats' + index).value);
    let f = parseInt(document.getElementById('fseats' + index).innerText);

    // returns the data in a Party
    return (new Party(c, p, v, i, f))
  } catch {
    return null;
  }
}

export function PartyTable({data, handler}) {
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
        <td><input type='color' id='colour0' value={data[0].colour} onChange={() => handler(0)}/></td>
        <td><select id='position0' value={data[0].position} onChange={() => handler(0)}>
          <option value={0}>Opposition</option>
          <option value={1}>Government</option>
          <option value={2}>Cross-Bench</option>
          </select></td>
        <td><input type='number' id='votes0' value={data[0].votes} onChange={() => handler(0)}/></td>
        <td><input type='number' id='inseats0' value={data[0].inseats} onChange={() => handler(0)}/></td>
        <td id='fseats0'>{data[0].fseats}</td>
        <td><button>X</button></td>
        <td><button>🡑</button></td>
        <td><button>🡓</button></td>
      </tr>
      <tr>
        <td><input type='color' id='colour1' value={data[1].colour} onChange={() => handler(1)}/></td>
        <td><select id='position1' value={data[1].position} onChange={() => handler(1)}>
          <option value={0}>Opposition</option>
          <option value={1}>Government</option>
          <option value={2}>Cross-Bench</option>
          </select></td>
        <td><input type='number' id='votes1' value={data[1].votes} onChange={() => handler(1)}/></td>
        <td><input type='number' id='inseats1' value={data[1].inseats} onChange={() => handler(1)}/></td>
        <td id='fseats1'>{data[1].fseats}</td>
        <td><button>X</button></td>
        <td><button>🡑</button></td>
        <td><button>🡓</button></td>
      </tr>
      <tr>
        <td><input type='color' id='colour2' value={data[2].colour} onChange={() => handler(2)}/></td>
        <td><select id='position2' value={data[2].position} onChange={() => handler(2)}>
          <option value={0}>Opposition</option>
          <option value={1}>Government</option>
          <option value={2}>Cross-Bench</option>
          </select></td>
        <td><input type='number' id='votes2' value={data[2].votes} onChange={() => handler(2)}/></td>
        <td><input type='number' id='inseats2' value={data[2].inseats} onChange={() => handler(2)}/></td>
        <td id='fseats2'>{data[2].fseats}</td>
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