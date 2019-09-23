class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.numb = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {

        this.numb = Math.ceil(this.min + ((this.max - this.min) / 2));
        // console.log(this)
        return this.numb;
    }

    lower() {
        this.max = this.numb;
    }

    greater() {
        this.min = this.numb;
    }
}

module.exports = GuessingGame;
