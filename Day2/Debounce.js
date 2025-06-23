function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      searchQuery(...args);
    }, delay);
  };
}

function searchQuery(query) {
  console.log("query result:: ", query);
}

const searchWithDebounce = debounce(searchQuery, 2000);

searchWithDebounce("hi");
searchWithDebounce("hello");
searchWithDebounce("abcde");
