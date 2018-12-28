import { Formatting } from './formatting';


export class Calculation {

    private seconds: number;
    private minutes: number;
    private hours: number;

    private differenceBetweenHours: number;
    private differenceBetweenMinutes: number;
    private differenceBetweenSeconds: number;

    constructor(timeAsHashTable: Object) {
        this.seconds = parseInt(timeAsHashTable['seconds'] || '0');
        this.minutes = parseInt(timeAsHashTable['minutes'] || '0') ;
        this.hours = parseInt(timeAsHashTable['hours'] || '0');

        this.differenceBetweenHours = 0;
        this.differenceBetweenMinutes = 0;
        this.differenceBetweenSeconds = 0;
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

    sum(timeAsHashTable: Object = {}): Calculation {

        const
            clone = this.getClone();

        let
            minutes: number = 0,
            seconds: number = 0;

        // restimeAsHashTableolve seconds
        if (!timeAsHashTable['seconds']) {
            timeAsHashTable['seconds'] = 0;
        }
        clone.seconds += timeAsHashTable['seconds'];
        seconds = clone.calculatesSeconds();

        // resolve minutes
        if (!timeAsHashTable['minutes']) {
            timeAsHashTable['minutes'] = 0;
        }
        clone.minutes += timeAsHashTable['minutes'];
        minutes = clone.calculatesMinutes();

        // resolve hours
        if (!timeAsHashTable['hours']) {
            timeAsHashTable['hours'] = 0;
        }
        clone.hours += timeAsHashTable['hours'];

        // resets to calculated values
        clone.hours = clone.calculatesHours();
        clone.minutes = minutes;
        clone.seconds = seconds;

        return clone;
    }

    difference(elapsedTimeAsHashTable: Object): Calculation {

        const
            clone = this.getClone(),
            calculation = new Calculation(elapsedTimeAsHashTable),
            resolvedHours: number = clone.calculatesHours(),
            resolvedMinutes: number = clone.calculatesMinutes(),
            resolvedSeconds: number = clone.calculatesSeconds(),
            elapsedResolvedHours: number = calculation.calculatesHours(),
            elapsedResolvedMinutes: number = calculation.calculatesMinutes(),
            elapsedResolvedSeconds: number = calculation.calculatesSeconds(),
            differenceBetweenSeconds: number = elapsedResolvedSeconds -
                resolvedSeconds,
            differenceBetweenMinutes: number = elapsedResolvedMinutes -
                resolvedMinutes,
            differenceBetweenHours: number = elapsedResolvedHours - resolvedHours;

        let
            realDifferenceBetweenHours: number = differenceBetweenHours,
            realDifferenceBetweenMinutes: number = differenceBetweenMinutes,
            realDifferenceBetweenSeconds: number = differenceBetweenSeconds;

        if (differenceBetweenHours < 0) {
            realDifferenceBetweenHours = 24 - Math.abs(differenceBetweenHours);
        }

        if (differenceBetweenMinutes < 0) {
            realDifferenceBetweenMinutes = 60 - Math.abs(differenceBetweenMinutes);

            realDifferenceBetweenHours -= 1;
        }

        if (differenceBetweenSeconds < 0) {
            realDifferenceBetweenSeconds = 60 - Math.abs(differenceBetweenSeconds);

            realDifferenceBetweenMinutes -= 1;
        }

        clone.differenceBetweenHours = realDifferenceBetweenHours;
        clone.differenceBetweenMinutes = realDifferenceBetweenMinutes;
        clone.differenceBetweenSeconds = realDifferenceBetweenSeconds;

        return clone;
    }

    getHours(): string {
        return Formatting.formatHours(this.hours);
    }

    getMinutes(): string {
        return Formatting.formatMinutes(this.minutes);
    }

    getSeconds(): string {
        return Formatting.formatSerconds(this.seconds);
    }

    getDifferenceBetweenHours(): string {
        return Formatting.formatHours(this.differenceBetweenHours);
    }

    getDifferenceBetweenMinutes(): string {
        return Formatting.formatMinutes(this.differenceBetweenMinutes);
    }

    getDifferenceBetweenSeconds(): string {
        return Formatting.formatSerconds(this.differenceBetweenSeconds);
    }

    private getClone(): Calculation {
        return Object.assign(new Calculation({}), this);
    }

    private hoursContainedInMinutes(minutes: number = 0): number {
        return Math.trunc(minutes / 60);
    }

    private minutesContainedInSeconds(seconds: number = 0): number {
        return Math.trunc(seconds / 60);
    }

}
