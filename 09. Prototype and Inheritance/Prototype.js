let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    console.log(`I'm ${this.name}, the breath of fire`);
  },
};

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

/**
 * Object is prototype of
 *  => dragon is prototype of
 *    => lizard
 */

lizard.__proto__ = dragon;
lizard.fire; // true - which lizard doesn't have
lizard.fight(); // 1 - still keep its own property
lizard.sing(); // - I'm Kiki, the breath of fire

dragon.isPrototypeOf(lizard); // true

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log("lizard own property => ", prop);
    continue;
  }

  console.log("from outside prototype => ", prop);
}
