const person1 = { name: "abc" };
const person2 = { name: "pqr" };

function introduce(age, city) {
  console.log(`My name is ${this.name}, My age is ${age} and live in ${city}.`);
}

introduce.call(person1, 30, "Noida");
introduce.call(person2, 25, "Delhi");
