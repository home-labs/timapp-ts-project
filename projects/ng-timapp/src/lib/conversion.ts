import { Calculation } from './calculation';
import { Formatting } from './formatting';


export class Conversion {

    private hours: number;
    private minutes: number;
    private seconds: number;

    private calculation: Calculation;

    constructor(attrs: Object = {}) {
        this.calculation = new Calculation(attrs);

        this.calculate();
    }

    getHours(): number {
        return this.hours;
    }

    getMinutes(): number {
        return this.minutes;
    }

    getSeconds(): number {
        return this.seconds;
    }

    getFormatedHours(): string {
        return Formatting.formatHours(this.hours);
    }

    getFormatedMinutes(): string {
        return Formatting.formatMinutes(this.minutes);
    }

    getFormatedSerconds(): string {
        return Formatting.formatSerconds(this.seconds);
    }

    private calculate() {
        // this order isn't important
        this.seconds = this.calculation.calculateSeconds();
        this.minutes = this.calculation.calculateMinutes();
        this.hours = this.calculation.calculateHours();
    }

}
