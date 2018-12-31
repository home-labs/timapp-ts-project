import { Calculation } from './calculation';
import { Time } from './time';


export class Conversion {

    private calculation: Calculation;

    constructor(time: Time) {
        this.calculation = new Calculation(time);
    }

    asMinutes(): number {
        const
            hours: number = Number.parseInt(this.calculation.getHours()),
            minutes: number = Number.parseInt(this.calculation.getMinutes());

        return (hours * 60) + minutes;
    }

    asSeconds(): number {
        const
            hours: number = Number.parseInt(this.calculation.getHours()),
            minutes: number = Number.parseInt(this.calculation.getMinutes()),
            seconds: number = Number.parseInt(this.calculation.getSeconds());

        return (hours * 60 * 60) + (minutes * 60) + seconds;
    }

}
