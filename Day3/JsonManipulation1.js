function convertBatchIdArr(source) {
  const res = {};

  for (const obj of source) {
    const { batch_id, ...arg } = obj;

    if (!res[batch_id]) {
      res[batch_id] = [];
    }

    res[batch_id].push(arg);
  }

  return Object.keys(res).map((key) => {
    return {
      [key]: res[key],
    };
  });
}

const source = [
  {
    batch_id: "123",
    name: "Tony",
    contact: "9872276210",
  },
  {
    batch_id: "231",
    name: "Steve",
    contact: "7876543210",
  },
  {
    batch_id: "123",
    name: "Bruce",
    contact: "6776543210",
  },
  {
    batch_id: "321",
    name: "Clint",
    contact: "8954643210",
  },
  {
    batch_id: "123",
    name: "Peter",
    contact: "7666543210",
  },
  {
    batch_id: "231",
    name: "Phil",
    contact: "8896543210",
  },
  {
    batch_id: "321",
    name: "Nick",
    contact: "9876521210",
  },
];

console.dir(convertBatchIdArr(source), { depth: null });
