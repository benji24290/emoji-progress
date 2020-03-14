class ProgressBar {
    constructor(start, end, config) {
        this.value = start
        this.end = end
        this.indicator = config && config.indicator ? config.indicator : '❤️'
        this.unit = config && config.unit ? config.unit : '🍌'
        this.separator = config && config.separator ? config.separator : '|'
        this.width = process.stdout.columns
        this.paddingRight = 20
        this.drawSpace = this.width - this.paddingRight
        this.reverse = false
        this.isLoader = true
        this.fillerLeft = '-'
        this.fillerRight = ' '
        this.handleResize()
        this.print()
    }
    increase(v) {
        if (parseInt(v)) {
            this.value += v
        }
        this.print()
    }
    handleResize() {
        process.stdout.on('resize', () => {
            this.width = process.stdout.columns
            this.drawSpace = this.width - this.paddingRight
            console.clear()
        });
    }
    print() {
        if (this.isLoader) {
            this.printLoader()
        } else {
            this.printProgress
        }
    }
    printProgress() {

    }

    printLoader() {
        let position = 0
        setInterval(() => {
            const i = position % this.drawSpace
            process.stdout.write(this.fill(i, true) + this.indicator + this.fill(i) + this.getState() + '\r');
            position++;
        }, 100)
    }
    getState() {
        return `${this.separator} ${this.value} of ${this.end} ${this.unit}`
    }
    fill(i, first) {
        if ((first && !this.reverse) || !first && this.reverse) {
            return this.fillerLeft.repeat(i)
        }
        return this.fillerRight.repeat(this.drawSpace - i - 1)
    }

}

module.exports = ProgressBar