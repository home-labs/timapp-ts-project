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

    getFormattedHours(asAbsolute: boolean = true): string {
        return Formatting.formatHours(this.hours);
    }

    getFormattedMinutes(asAbsolute: boolean = true): string {
        return Formatting.formatMinutes(this.minutes, asAbsolute);
    }

    getFormattedSerconds(asAbsolute: boolean = true): string {
        return Formatting.formatSerconds(this.seconds);
    }

    private calculate() {
        // this order isn't important
        this.seconds = this.calculation.calculatesSeconds();
        this.minutes = this.calculation.calculatesMinutes();
        this.hours = this.calculation.calculatesHours();
    }

}
