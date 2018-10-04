import { Calculation } from './calculation';
import { Formatting } from './formatting';


export class Conversion {

    private hours: number;
    private minutes: number;
    private seconds: number;

    private calculatedHours: number;
    private calculatedMinutes: number;
    private calculatedSeconds: number;

    private calculation: Calculation;

    constructor(attrs: Object = {}) {
        this.hours = attrs['hours'] || 0;
        this.minutes = attrs['minutes'] || 0;
        this.seconds = attrs['seconds'] || 0;

        this.calculation = new Calculation(attrs);

        this.calculate();
    }

    getHours(): number {
        return this.calculatedHours;
    }

    getMinutes(): number {
        return this.calculatedMinutes;
    }

    getSeconds(): number {
        return this.calculatedSeconds;
    }

    getFormatedHours(): string {
        return Formatting.formatHours(this.calculatedHours);
    }

    getFormatedMinutes(): string {
        return Formatting.formatMinutes(this.calculatedMinutes);
    }

    getFormatedSerconds(): string {
        return Formatting.formatSerconds(this.calculatedSeconds);
    }

    private calculate() {

        const
            totalSeconds: number = this.seconds,
            seconds: number = totalSeconds - (Math.trunc(totalSeconds / 60) * 60),
            totalMinutes: number = this.minutes + Math.trunc(totalSeconds / 60),
            minutes: number = totalMinutes - (Math.trunc(totalMinutes / 60) * 60),
            hours: number = this.hours + Math.trunc(totalMinutes / 60);

        this.calculatedSeconds = this.calculation.calculateSeconds();
        this.calculatedMinutes = this.calculation.calculateMinutes();
        this.calculatedHours = this.calculation.calculateHours();

    }

}
