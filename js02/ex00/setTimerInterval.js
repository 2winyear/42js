function setInterv (callback, time) {
    this.state = {
        count: 0
    };

    setInterval(callback(this.state.count++), time);
}

module.exports = {setInterv}