export class Conversion {

    private hours: number;
    private minutes: number;
    private seconds: number;

    private hoursAsString: string;
    private minutesAsString: string;
    private secondsAsString: string;

    constructor(attrs: Object = {}) {
        this.hours = attrs['hours'] || 0;
        this.minutes = attrs['minutes'] || 0;
        this.seconds = attrs['seconds'] || 0;

        this.calculate();
        this.format();
    }

    getHours(): string {
        return this.hoursAsString;
    }

    getMinutes(): string {
        return this.minutesAsString;
    }

    getSeconds(): string {
        return this.secondsAsString;
    }

    private format() {
        if (parseInt(this.hoursAsString) < 10) {
            this.hoursAsString = `0${this.hoursAsString}`;
        }

        if (parseInt(this.minutesAsString) < 10) {
            this.minutesAsString = `0${this.minutesAsString}`;
        }

        if (parseInt(this.secondsAsString) < 10) {
            this.secondsAsString = `0${this.secondsAsString}`;
        }
    }

    private calculate() {

        const
            totalSeconds: number = this.seconds,
            seconds: number = totalSeconds - (Math.trunc(totalSeconds / 60) * 60),
            totalMinutes: number = this.minutes + Math.trunc(totalSeconds / 60),
            minutes: number = totalMinutes - (Math.trunc(totalMinutes / 60) * 60),
            hours: number = this.hours + Math.trunc(totalMinutes / 60);

        this.hoursAsString = `${hours}`;
        this.minutesAsString = `${minutes}`;
        this.secondsAsString = `${seconds}`;
    }

}
