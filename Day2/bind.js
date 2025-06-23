const person = {
  name: "Abc",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const anotherPerson = {
  name: "PQR",
};

person.greet.call(person);

const boundGreet = person.greet.bind(anotherPerson); // context fixed to anotherPerson

boundGreet.call(person); // current context doesnt change it was binded to another person
