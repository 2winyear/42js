function setTimer1(printNum, time) {
  this.state = {
    count: 0
  };

  setTimeout(printNum(this.state.count), time);
  this.state.count++;
  setTimeout(printNum(this.state.count), time);
  this.state.count++;
  setTimeout(printNum(this.state.count), time);
  this.state.count++;
  setTimeout(printNum(this.state.count), time);
  this.state.count++;
  setTimeout(printNum(this.state.count), time);
  this.state.count++;
  setTimeout(printNum(this.state.count), time);
}

module.exports = {setTimer1}