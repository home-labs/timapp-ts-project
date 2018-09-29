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
    }

    makeThroughSeconds(): Conversion {
        let
            minutes = Math.trunc(this.seconds / 60),
            elapsedMinutes: number = minutes % 60,
            elapsedSeconds: number = this.seconds % 60;

        const
            hours = Math.trunc(minutes / 60);

        this.hoursAsString = `${hours}`;
        this.minutesAsString = `${elapsedMinutes}`;
        this.secondsAsString = `${elapsedSeconds}`;

        this.format();

        return this;
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

}
