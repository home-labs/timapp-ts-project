export class Calculation {

    private hours: number;
    private minutes: number;
    private seconds: number;

    constructor(attrs: Object = {}) {
        this.hours = attrs['hours'] || 0;
        this.minutes = attrs['minutes'] || 0;
        this.seconds = attrs['seconds'] || 0;
    }

    calculateHours(): number {
        this.hours += this.hoursContainedInMinutes();

        return this.hours;
    }

    calculateMinutes(...minutes): number {
        this.minutes += this.minutesContainedInSeconds();

        return Calculation.sumValues.apply(null, [this.minutes].concat(minutes)) -
            (this.hoursContainedInMinutes.apply(this, minutes) * 60);
    }

    calculateSeconds(...seconds): number {
        return Calculation.sumValues.apply(null, [this.seconds].concat(seconds)) -
            (this.minutesContainedInSeconds.apply(this, seconds) * 60);
    }

    minutesContainedInSeconds(...seconds): number {
        return Math.trunc(Calculation.sumValues
            .apply(null, [this.seconds].concat(seconds)) / 60);
    }

    hoursContainedInMinutes(...minutes): number {
        return Math.trunc(Calculation.sumValues
            .apply(null, [this.minutes].concat(minutes)) / 60);
    }

    sum(...time): Object {
        let
            minutesOverSeconds: number,
            hoursOverMinutes: number;

        time.forEach(
            (o: Object) => {
                if (!o['seconds']) {
                    o['seconds'] = 0;
                }

                if ((o['seconds'] + this.seconds) < 60) {
                    this.seconds += o['seconds'];
                } else {
                    minutesOverSeconds = this
                        .minutesContainedInSeconds(o['seconds']);
                    this.minutes += minutesOverSeconds;
                    this.seconds = this.calculateSeconds(o['seconds']);
                }

                if (!o['minutes']) {
                    o['minutes'] = 0;
                }

                if ((o['minutes'] + this.minutes) < 60) {
                    this.minutes += o['minutes'];
                } else {
                    hoursOverMinutes = this
                        .hoursContainedInMinutes(o['minutes']);
                    this.hours += hoursOverMinutes;
                    this.minutes = this.calculateMinutes(o['minutes']);
                }

                if (!o['hours']) {
                    o['hours'] = 0;
                }

                this.hours += o['hours'];
            }
        );

        return {
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds
        }
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
