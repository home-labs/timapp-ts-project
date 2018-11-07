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

    getFormatedHours(asAbsolute: boolean = true): string {
        return Formatting.formatHours(this.hours);
    }

    getFormatedMinutes(asAbsolute: boolean = true): string {
        return Formatting.formatMinutes(this.minutes, asAbsolute);
    }

    getFormatedSerconds(asAbsolute: boolean = true): string {
        return Formatting.formatSerconds(this.seconds);
    }

    private calculate() {
        // this order isn't important
        this.seconds = this.calculation.calculateSeconds();
        this.minutes = this.calculation.calculateMinutes();
        this.hours = this.calculation.calculateHours();
    }

}
