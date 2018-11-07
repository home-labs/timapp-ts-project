export class Calculation {

    private givenSeconds: number;
    private givenMinutes: number;
    private hours: number;
    private minutes: number;
    private seconds: number;

    constructor(attrs: Object = {}) {
        this.givenSeconds = parseInt(attrs['seconds']) || 0;
        this.givenMinutes = parseInt(attrs['minutes']) || 0;
        this.hours = parseInt(attrs['hours']) || 0;
        this.minutes = 0;
        this.seconds = 0;
    }

    calculateHours(additionalHours: number = 0): number {
        this.hours += additionalHours;

        return this.hours += this.hoursContainedInMinutes(this.givenMinutes);
    }

    calculateMinutes(additionalMinutes: number = 0): number {
        this.givenMinutes += additionalMinutes;

        this.givenMinutes += this.minutesContainedInSeconds(this.givenSeconds);

        return this.givenMinutes -
            (this.hoursContainedInMinutes(this.givenMinutes) * 60);
    }

    calculateSeconds(additionalSeconds: number = 0): number {
        this.givenSeconds += additionalSeconds;

        return this.givenSeconds -
            (this.minutesContainedInSeconds(this.givenSeconds) * 60);
    }

    sum(...time): Object {

        time.forEach(
            (o: Object) => {

                // resolve seconds
                if (!o['seconds']) {
                    o['seconds'] = 0;
                }
                this.seconds = this.calculateSeconds(o['seconds']);

                // resolve minutes
                if (!o['minutes']) {
                    o['minutes'] = 0;
                }
                this.minutes = this.calculateMinutes(o['minutes']);

                // resolve hours
                if (!o['hours']) {
                    o['hours'] = 0;
                }
                this.hours = this.calculateHours(o['hours']);

                // resets absolute time values
                this.givenMinutes = this.minutes;
                this.givenSeconds = this.seconds;
            }
        );

        return {
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds
        }

    }

    private hoursContainedInMinutes(minutes: number = 0): number {
        return Math.trunc(minutes / 60);
    }

    private minutesContainedInSeconds(seconds: number = 0): number {
        return Math.trunc(seconds / 60);
    }

}
