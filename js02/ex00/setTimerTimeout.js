function setTimer (callback, time) {
  const tick = () => {
    setTimeout((i) => {
      if(callback(i++))
        tick(i);
    }, time);
  }
  tick(0);
}

function printNum(count) {
  console.log(count);
  return count < 3;
}

setTimer(printNum, 100);