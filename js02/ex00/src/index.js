import { setTimer1 } from './setTimerTimeout.js'
import { setTimer2 } from './setTimerTimeout.js'

function printNum(count){
  console.log(count);
  return count < 3;
}

setTimer1(printNum, 100000);
// setTimer2(printNum, 100000);