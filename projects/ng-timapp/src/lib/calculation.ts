export class Calculation {

    private absMinutes: number;
    private absSeconds: number;

    private hours: number;
    private minutes: number;
    private seconds: number;

    constructor(attrs: Object = {}) {
        this.hours = parseInt(attrs['hours']) || 0;
        this.absMinutes = parseInt(attrs['minutes']) || 0;
        this.absSeconds = parseInt(attrs['seconds']) || 0;

        this.seconds = 0;
        this.minutes = 0;
    }

    calculateHours(): number {
        return this.hours += this.hoursContainedInMinutes(this.absMinutes);
    }

    calculateMinutes(additionalMinutes: number = 0): number {
        this.absMinutes += this.minutesContainedInSeconds(this.absSeconds);

        return Calculation.sumValues(this.absMinutes, additionalMinutes) -
            (this.hoursContainedInMinutes(this.absMinutes +
                additionalMinutes) * 60);
    }

    calculateSeconds(additionalSeconds: number = 0): number {
        return Calculation.sumValues(this.absSeconds, additionalSeconds) -
            (this.minutesContainedInSeconds(this.absSeconds +
                additionalSeconds) * 60);
    }

    sum(...time): Object {

        time.forEach(
            (o: Object) => {

                // resolve seconds
                if (!o['seconds']) {
                    o['seconds'] = 0;
                }
                this.seconds = this.calculateSeconds(o['seconds']);
                this.absSeconds += o['seconds'];

                // resolve minutes
                if (!o['minutes']) {
                    o['minutes'] = 0;
                }
                this.minutes = this.calculateMinutes(o['minutes']);

                // resolve hours
                if (!o['hours']) {
                    o['hours'] = 0;
                }
                this.hours = this.calculateHours();
                this.hours += o['hours'];

                // reconfigure absolute time
                this.absMinutes = this.minutes;
                this.absSeconds = this.seconds;
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

    private hoursContainedInMinutes(minutes: number = 0): number {
        return Math.trunc(minutes / 60);
    }

    private minutesContainedInSeconds(seconds: number = 0): number {
        return Math.trunc(seconds / 60);
    }

}
