import { Calculation } from './calculation';
import { Formatting } from './formatting';


export class Conversion {

    private hours: number;
    private minutes: number;
    private seconds: number;

    private calculation: Calculation;

    constructor(attrs: Object) {
        this.calculation = new Calculation(attrs);

        this.calculate();
    }

    getHours(asAbsolute: boolean = true): string {
        return Formatting.formatHours(this.hours, asAbsolute);
    }

    getMinutes(asAbsolute: boolean = true): string {
        return Formatting.formatMinutes(this.minutes, asAbsolute);
    }

    getSeconds(asAbsolute: boolean = true): string {
        return Formatting.formatSerconds(this.seconds, asAbsolute);
    }

    private calculate() {
        // the order isn't important
        this.seconds = this.calculation.calculatesSeconds();
        this.minutes = this.calculation.calculatesMinutes();
        this.hours = this.calculation.calculatesHours();
    }

}
