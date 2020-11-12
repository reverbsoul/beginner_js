// --> PLACEHOLDER DATA <--
// Placeholder: Data
// const person = {
//   name: 'j. miller',
//   email: 'j@reverbsoul.com',
//   yearsAttended: 9,
//   points: 9000,
//   uniqueID: 893247,
// };

// Placeholder: Data
const jay = {
  name: 'j. miller',
  email: 'j@reverbsoul.com',
  yearsAttended: 9,
  points: 100,
  uniqueID: 7080638, // Loyalty Code
};

// --> CREATE PERSON <--
// Input (form/csv)
function createPerson(a, b, c, d, e) {
  const person = {
    name: a,
    email: b,
    yearsAttended: c,
    points: d,
    uniqueID: e,
  };
  return person; // Output(database)
}

const x = createPerson('tim', 'timber@mail.com', 5, 5000, 38792);
console.log(x);

// --> CREATE COLLECTION <--

// --> ADD PERSON TO COLLECTION <--

// --> UPDATE USER INFO <--

// --> REMOVE PERSON FROM COLLECTION <--

// --> UPDATE POINTS <--

function updatePoints(UID, pointsEarned) {
  UID.points += pointsEarned;
  return UID;
}

// Update Points Test
updatePoints(jay, 700);
console.log(jay);

// --> Convert to points <--
function convertPoints(UID, value, multiplier) {
  UID.points += value * multiplier;
  return UID;
}

// Test Point Conversion
convertPoints(jay, 100, 7);
console.log(jay);

// --> FIND PERSON IN COLLECTION <--
