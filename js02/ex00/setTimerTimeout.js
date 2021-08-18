function setTimer (callback, time) {
  function tick (i) {
    setTimeout(()=> {
      callback(i)
      if (callback(++i) === true)
        tick(++i);
    }, time)};
  tick(0);
}

function printNum(count) {
  console.log(count);
  return count < 3;
}

setTimer(printNum, 100);