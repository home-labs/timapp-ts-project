export class Calculation {

    private hours: number;
    private minutes: number;
    private seconds: number;

    constructor(attrs: Object = { hours: 0, minutes: 0, seconds: 0 }) {
        this.hours = attrs['hours'];
        this.minutes = attrs['minutes'];
        this.seconds = attrs['seconds'];
    }

    static minutesContainedInSeconds(...seconds): number {
        return Math.trunc(Calculation.sumValues.apply(null, seconds) / 60);
    }

    static hoursContainedInMinutes(...minutes): number {
        return Math.trunc(Calculation.sumValues.apply(null, minutes) / 60);
    }

    static calculateSeconds(...seconds) {
        return Calculation.sumValues.apply(null, seconds) - (Calculation.minutesContainedInSeconds.apply(null, seconds) * 60);
    }

    static calculateMinutes(...minutes) {
        return Calculation.sumValues.apply(null, minutes) - (Calculation.hoursContainedInMinutes.apply(null, minutes) * 60);
    }

    sum(...time): Object {
        let
            hours: number = this.hours,
            minutes: number = this.minutes,
            seconds: number = this.seconds,
            minutesOverSeconds: number,
            hoursOverMinutes: number;

        time.forEach(
            (o: Object) => {
                if ((o['seconds'] + seconds) < 60) {
                    seconds += o['seconds'];
                } else {
                    minutesOverSeconds = Calculation.minutesContainedInSeconds(seconds, o['seconds']);
                    seconds = Calculation.calculateSeconds(seconds, o['seconds']);
                    minutes += minutesOverSeconds;
                }

                if ((o['minutes'] + minutes) < 60) {
                    minutes += o['minutes'];
                } else {
                    hoursOverMinutes = Calculation.hoursContainedInMinutes(minutes, o['minutes']);
                    minutes = Calculation.calculateMinutes(minutes, o['minutes']);
                    hours += hoursOverMinutes;
                }

                hours += o['hours'];
            }
        );

        return {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
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
