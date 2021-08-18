let i = 0;
function setTimer (callback, time) {
    let timerId= setInterval(()=>{ 
        callback(i++)
        if (callback(i++) === false) {
            clearInterval(timerId);
        }
    }, time);
}

function printNum(count) {
    console.log(count);
    return count < 3;
  }
  
  setTimer(printNum, 100);