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

    sum(...time): Object {

        const
            clone = this.getClone();

        let
            minutes: number = 0,
            seconds: number = 0;

        time.forEach(
            (o: Object) => {

                // resolve seconds
                if (!o['seconds']) {
                    o['seconds'] = 0;
                }
                clone.seconds += o['seconds'];
                seconds = clone.calculatesSeconds();

                // resolve minutes
                if (!o['minutes']) {
                    o['minutes'] = 0;
                }
                clone.minutes += o['minutes'];
                minutes = clone.calculatesMinutes();

                // resolve hours
                if (!o['hours']) {
                    o['hours'] = 0;
                }
                clone.hours += o['hours'];
                clone.hours = clone.calculatesHours();

                // resets to calculated values
                clone.minutes = minutes;
                clone.seconds = seconds;
            }
        );

        return {
            hours: clone.hours,
            minutes: minutes,
            seconds: seconds
        }

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
