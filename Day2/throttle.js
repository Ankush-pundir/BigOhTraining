function throttle(fn, delay) {
  let lastCall;

  return function (...args) {
    let now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

function message(query) {
  console.log("message: ", query);
}

const usingThrottle = throttle(message, 2000);

usingThrottle("hii");
usingThrottle("hello");
usingThrottle("hey");
