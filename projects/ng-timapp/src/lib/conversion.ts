import { Calculation } from './calculation';
import { Time } from './time';


export class Conversion {

    private calculation: Calculation;
    private time: Time;

    constructor(time: Time) {
        this.calculation = new Calculation(time);

        this.converts();
    }

    getHours(asAbsolute: boolean = true): string {
        return this.time.getHours(asAbsolute);
    }

    getMinutes(asAbsolute: boolean = true): string {
        return this.time.getMinutes(asAbsolute);
    }

    getSeconds(asAbsolute: boolean = true): string {
        return this.time.getSeconds(asAbsolute);
    }

    private converts() {

        this.time = new Time(
            {
                hours: this.calculation.calculatesHours(),
                minutes: this.calculation.calculatesMinutes(),
                seconds: this.calculation.calculatesSeconds()
            }
        );

    }

}
