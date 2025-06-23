function generateURL(obj, url) {
  let urlString = url + "?"; // add '?' after the base url
  for (const key in obj) {
    const value = obj[key];
    urlString = urlString + key + "=" + value + "&"; // adding  key value to the url and add '&' at the end of value
  }

  return urlString.slice(0, -1);
}

//TODO: Try to complete by using default function provided by JS

function generateURL2(obj, baseUrl) {
  const url = new URL(baseUrl);
  url.search = new URLSearchParams(obj).toString();
  return url.toString();
}
// - Global execuation context
//

// example usage

const obj = {
  keyOne: "value One",
  keyTwo: "value Two",
  keyThree: "value Three",
};

const url = "https://localhost:400";

console.log(generateURL2(obj, url)); //   https://localhost:400?keyOne=value One&keyTwo=value Two&keyThree=value Three
