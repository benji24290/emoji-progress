class EmojiBar {
  constructor(config) {
    //TODO check if int
    //TODO rename state to indo
    this.startValue = config && config.start ? config.start : 0;
    this.endValue = config && config.end ? config.end : 100;
    this.isLoader = config && config.isLoader ? config.isLoader : false;
    this.hideState = config && config.hideState ? config.hideState : false;
    this.autostart = config && config.autostart ? config.autostart : false;
    this.reverse = config && config.reverse ? config.reverse : false;
    this.indicator = config && config.indicator ? config.indicator : '❤️';
    this.unit = config && config.unit ? config.unit : '🍌';
    this.separator = config && config.separator ? config.separator : '|';
    this.paddingRight = config && config.paddingRight ? config.paddingRight : 0;
    this.fillerLeft = config && config.fillerLeft ? config.fillerLeft : '-';
    this.fillerRight = config && config.fillerRight ? config.fillerRight : ' ';
    this.intervalTime =
      config && config.intervalTime ? config.intervalTime : 200;

    this.value = this.startValue;
    this.interval = null;
    this.width = process.stdout.columns;
    this.drawSpace = this._getDrawSpace();
    this._handleResize();
    if (this.autostart);
    {
      this.start();
    }
  }
  increase(v) {
    if (parseInt(v)) {
      this.value += v;
      if (this.value >= this.endValue) {
        this.value = this.endValue;
        this.complete();
      }
    }
  }
  _handleResize() {
    process.stdout.on('resize', () => {
      this.width = process.stdout.columns;
      this.drawSpace = this._getDrawSpace();
      console.clear();
    });
  }
  _getDrawSpace() {
    return this.width - this._getState().length - this.paddingRight - this.indicator.length;
  }
  start() {
    if (this.interval) {
      clearInterval(this.interval)
    }
    //console.clear();
    if (this.isLoader) {
      this._printLoader();
    } else {
      this._printProgress();
    }
  }
  _printProgress() {
    this.interval = setInterval(() => {
      const i = parseInt((this.value / this.endValue) * this.drawSpace);
      process.stdout.write(
        this._line(i)
      );
    }, this.intervalTime);
  }
  _line(i) {
    const bar = this._fill(i, true) +
      this.indicator +
      this._fill(i)
    const pr = this.paddingRight ? this.paddingRight : 0
    const spacing = Math.max(this.width - (bar.length + this._getState().length + pr), 0)
    //return bar + ' '.repeat(spacing) + this._getState() + ' '.repeat(this.paddingRight) + '\r'
    return ' '.repeat(spacing) + bar + this._getState() + ' '.repeat(this.paddingRight) + '\r'
  }
  _printLoader() {
    let position = 0;
    this.interval = setInterval(() => {
      const i = position % this.drawSpace;
      process.stdout.write(
        this._line(i)
      );
      position++;
    }, this.intervalTime);
  }

  complete() {
    setTimeout(() => {
      if (this.interval) {
        clearInterval(this.interval);
        process.stdout.write(
          '\n'
        );
      }
    }, this.intervalTime);
  }

  _getState() {
    return !this.hideState
      ? `${this.separator} ${this.value} of ${this.endValue} ${this.unit}`
      : '';
  }
  _fill(i, first) {
    if ((first && !this.reverse) || (!first && this.reverse)) {
      return this._repeat(i, this.fillerLeft)
    }
    return this._repeat(this.drawSpace - i - 1, this.fillerRight)
  }
  _repeat(space, filler) {
    if (space > 0 && filler.length > 0) {
      return filler.repeat(Math.max(parseInt(space / filler.length), 0))
    }
    return ''
  }
}

module.exports = EmojiBar;
