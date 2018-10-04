// ver só a questão da dependência circular, porque um não pode depender do outro bem como o outro do um ao mesmo tempo

export class Calculation {

    private hours: number;
    private minutes: number;
    private seconds: number;

    constructor(attrs: Object = { hours: 0, minutes: 0, seconds: 0 }) {
        this.hours = attrs['hours'];
        this.minutes = attrs['minutes'];
        this.seconds = attrs['seconds'];
    }

    minutesContainedInSeconds(...seconds): number {
        return Math.trunc(Calculation.sumValues
            .apply(null, [this.seconds].concat(seconds)) / 60);
    }

    hoursContainedInMinutes(...minutes): number {
        return Math.trunc(Calculation.sumValues
            .apply(null, [this.minutes].concat(minutes)) / 60);
    }

    calculateSeconds(...seconds) {
        return Calculation.sumValues.apply(null, [this.seconds].concat(seconds)) -
            (this.minutesContainedInSeconds.apply(this, seconds) * 60);
    }

    calculateMinutes(...minutes) {
        return Calculation.sumValues.apply(null, [this.minutes].concat(minutes)) -
            (this.hoursContainedInMinutes.apply(this, minutes) * 60);
    }

    sum(...time) {
        let
            minutesOverSeconds: number,
            hoursOverMinutes: number;

        time.forEach(
            (o: Object) => {
                if ((o['seconds'] + this.seconds) < 60) {
                    this.seconds += o['seconds'];
                } else {
                    minutesOverSeconds = this
                        .minutesContainedInSeconds(o['seconds']);
                    this.seconds = this.calculateSeconds(o['seconds']);
                    this.minutes += minutesOverSeconds;
                }

                if ((o['minutes'] + this.minutes) < 60) {
                    this.minutes += o['minutes'];
                } else {
                    hoursOverMinutes = this
                        .hoursContainedInMinutes(o['minutes']);
                    this.minutes = this
                        .calculateMinutes(o['minutes']);
                    this.hours += hoursOverMinutes;
                }

                this.hours += o['hours'];
            }
        );
    }

    getHours(): number {
        return this.hours;
    }

    getMinutes(): number {
        return this.minutes;
    }

    getSeconds(): number {
        return this.seconds;
    }

    private static sumValues(...values) {
        let
            sum: number = 0

        values.forEach(
            (value) => {
                sum += value;
            }
        );

        return sum;
    }

}
