import {Party} from './PartyTable'
import {allocMethods} from './InputSettings';

export function allocateSeats(partyData, method) {
  // arrays of the values being [taken from / given to] the party list
  let votes = [];
  let inseats = [];
  let fseats = [];

  // creates arrays from the party data
  for (let i = 0; i < partyData.length; i++) {
    votes.push(partyData[i].votes);
    inseats.push(partyData[i].inseats);
    fseats.push(0);
  }

  // calls the appropriate method for allocating seats
  switch (allocMethods[method]) {
    case 'dhondt':
      fseats = dhondt(votes, inseats, fseats);
      break;
    default:
      fseats = votes;
      break;
  }

  // updates the partyData with the new fseats values
  for (let i = 0; i < partyData.length; i++) {
    partyData[i].fseats = fseats[i];
  }

  // returns the updated partyData
  return partyData;
}

// function to allocate seats using the d'hondt method
function dhondt(votes, inseats, fseats) {
  return inseats;
}