// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];


// define our tuple
let newTuple: [number, boolean, string];
// initialize correctly
newTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
newTuple.push('Something new and wrong');
console.log(newTuple);

// define our tuple
let urTuple: [number, boolean, string];

// initialize correctly
urTuple = [5, false, 'Coding God was here'];

// We have no type safety in our tuple for indexes 3+
urTuple.push('Something new and wrong');

// instead use our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];

// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');