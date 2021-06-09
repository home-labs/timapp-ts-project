import { Calculation } from './calculation.js';
import { Time } from './time.js';


export class Conversion {

    private calculation: Calculation;

    constructor(time: Time) {
        this.calculation = new Calculation(time);
    }

    asMinutes(): number {
        const
            hours: number = parseInt(this.calculation.getHours(), 10),
            minutes: number = parseInt(this.calculation.getMinutes(), 10);

        return (hours * 60) + minutes;
    }

    asSeconds(): number {
        const
            hours: number = parseInt(this.calculation.getHours(), 10),
            minutes: number = parseInt(this.calculation.getMinutes(), 10),
            seconds: number = parseInt(this.calculation.getSeconds(), 10);

        return (hours * 60 * 60) + (minutes * 60) + seconds;
    }

}
