const person1 = { name: "Abc" };
const person2 = { name: "Pqr" };

function introduce(age, city) {
  console.log(`My name is ${this.name}, My age is ${age} and live in ${city}.`);
}

introduce.apply(person1, [30, "Noida"]);
introduce.apply(person2, [25, "Delhi"]);
