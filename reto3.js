const { deepEqual } = require("./utils");

function organizeInventory(inventory) {
  if (inventory == {}) {
    return {};
  }
  let organizedInventory = {};

  for (let i of inventory) {
    organizedInventory[i.category] = organizedInventory[i.category] || {};
    const cat = organizedInventory[i.category];
    cat[i.name] = cat[i.name] ? cat[i.name] + i.quantity : i.quantity;
  }

  return organizedInventory;
}

const inventary = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];

const result = organizeInventory(inventary);

// Resultado esperado:
const expected = {
  toys: {
    doll: 5,
    car: 5,
  },
  sports: {
    ball: 2,
    racket: 4,
  },
};

console.log(deepEqual(result, expected));
console.log(JSON.stringify(result, null, 4));

const inventary2 = [
  { name: "book", quantity: 10, category: "education" },
  { name: "book", quantity: 5, category: "education" },
  { name: "paint", quantity: 3, category: "art" },
];

const result2 = organizeInventory(inventary2);
// Resultado esperado:
const expected2 = {
  education: {
    book: 15,
  },
  art: {
    paint: 3,
  },
};
console.log(deepEqual(result2, expected2));
console.log(JSON.stringify(result, null, 4));
