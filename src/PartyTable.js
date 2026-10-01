import './App.css';
import './PartyTable.css';

/*
TODO:
- implement adding/deleting/moving rows
- implement allocation
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

// returns the table containing all of the parties
// the size of the table is based on the size of the data provided
export function PartyTable({data, handler}) {
  // gets the totals for the bottom of the table
  let [totalV, totalIn, totalF] = totals(data);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Colour</th>
            <th>Position</th>
            <th>Votes</th>
            <th>Initial Seats</th>
            <th>Final Seats</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(data.length)].map((_, i) =>
              <PartyTableEntry key={i} data={data} handler={handler} index={i}/>
            )}
          <tr>
            <td></td>
            <td>Totals:</td>
            <td>{totalV}</td>
            <td>{totalIn}</td>
            <td>{totalF}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button id='addParty'>Add Party</button>
    </div>
  )
}

// returns a row of the party table, corresponding to the given index
function PartyTableEntry({data, handler, index}) {
  return (
    <tr>
        <td><input type='color' id={'colour' + index} value={data[index].colour} onChange={() => handler(index)}/></td>
        <td><select id={'position' + index} value={data[index].position} onChange={() => handler(index)}>
          <option value={0}>Opposition</option>
          <option value={1}>Government</option>
          <option value={2}>Cross-Bench</option>
          </select></td>
        <td><input type='number' id={'votes' + index} value={data[index].votes.toString()} min='0' onChange={() => handler(index)}/></td>
        <td><input type='number' id={'inseats' + index} value={data[index].inseats.toString()} min='0' onChange={() => handler(index)}/></td>
        <td id={'fseats' + index}>{data[index].fseats}</td>
        <td><button className='deleteButton'>X</button></td>
        <td><button className='upButton'>🡑</button></td>
        <td><button className='downButton'>🡓</button></td>
      </tr>
  )
}

// calculates the total number of votes, inseats, and fseats, and returns an array containing the three
function totals(data) {
  // variables to hold totals in
  let v = 0; // votes
  let i = 0; // initial seats
  let f = 0; // final seats

  // adds up the totals
  for (let n = 0; n < data.length; n++) {
    v += data[n].votes;
    i += data[n].inseats;
    f += data[n].fseats;
  }

  return [v, i, f];
}

// class containing all of the data relating to a party
export class Party {
  constructor(colour, position, votes, inseats, fseats) {
    this.colour = colour;
    this.position = position;
    this.votes = votes;
    this.inseats = inseats;
    this.fseats = fseats;
  }
}