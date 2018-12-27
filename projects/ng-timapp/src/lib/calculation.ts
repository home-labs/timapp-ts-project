export class Calculation {

    private seconds: number;
    private minutes: number;
    private hours: number;

    constructor(attrs: Object = {}) {
        this.seconds = parseInt(attrs['seconds']) || 0;
        this.minutes = parseInt(attrs['minutes']) || 0;
        this.hours = parseInt(attrs['hours']) || 0;
    }

    calculatesHours(): number {
        return this.hours + this.hoursContainedInMinutes(this.minutes);
    }

    calculatesMinutes(): number {
        this.minutes += this.minutesContainedInSeconds(this.seconds);
        return this.minutes -
            (this.hoursContainedInMinutes(this.minutes) * 60);
    }

    calculatesSeconds(): number {
        return this.seconds -
            (this.minutesContainedInSeconds(this.seconds) * 60);
    }

    sum(attrs: Object = {}): Calculation {

        const
            clone = this.getClone();

        let
            minutes: number = 0,
            seconds: number = 0;

        // resattrsolve seconds
        if (!attrs['seconds']) {
            attrs['seconds'] = 0;
        }
        clone.seconds += attrs['seconds'];
        seconds = clone.calculatesSeconds();

        // resolve minutes
        if (!attrs['minutes']) {
            attrs['minutes'] = 0;
        }
        clone.minutes += attrs['minutes'];
        minutes = clone.calculatesMinutes();

        // resolve hours
        if (!attrs['hours']) {
            attrs['hours'] = 0;
        }
        clone.hours += attrs['hours'];

        // resets to calculated values
        clone.hours = clone.calculatesHours();
        clone.minutes = minutes;
        clone.seconds = seconds;

        return clone;
    }

    difference(...time): Object {

        const
            clone = this.getClone();

        let
            minutes: number = 0,
            seconds: number = 0;

        return {
            hours: clone.hours,
            minutes: minutes,
            seconds: seconds
        }

    }

    getHours() {
        return this.hours;
    }

    getMinutes() {
        return this.minutes;
    }

    getSeconds() {
        return this.seconds;
    }

    private getClone(): Calculation {
        return Object.assign(new Calculation(), this);
    }

    private hoursContainedInMinutes(minutes: number = 0): number {
        return Math.trunc(minutes / 60);
    }

    private minutesContainedInSeconds(seconds: number = 0): number {
        return Math.trunc(seconds / 60);
    }

}
