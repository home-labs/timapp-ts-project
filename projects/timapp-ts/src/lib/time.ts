import { Formatting } from './formatting';
import { IClonablePrototype } from './i-clonable-prototype';


declare interface ITimeConstructorParameters {

    hours?: number | string;

    minutes?: number | string;

    seconds?: number | string;

}


export class Time implements IClonablePrototype<Time> {

    private hours: number;

    private minutes: number;

    private seconds: number;

    constructor(time: ITimeConstructorParameters) {
        this.hours = parseInt(`${time.hours || 0}`, 10);
        this.minutes = parseInt(`${time.minutes || 0}`, 10);
        this.seconds = parseInt(`${time.seconds || 0}`, 10);
    }

    getClone(): Time {
        return Object.assign(new Time({}), this);
    }

    getHours(asAbsolute: boolean = true): string {
        return Formatting.twoDigits(this.hours, asAbsolute);
    }

    getMinutes(asAbsolute: boolean = true): string {
        return Formatting.twoDigits(this.minutes, asAbsolute);
    }

    getSeconds(asAbsolute: boolean = true): string {
        return Formatting.twoDigits(this.seconds, asAbsolute);
    }

    addsHours(value: number | string) {
        this.hours += parseInt(`${value}`, 10);
    }

    addsMinutes(value: number | string) {
        this.minutes += parseInt(`${value}`, 10);
    }

    addsSeconds(value: number | string) {
        this.seconds += parseInt(`${value}`, 10);
    }

    resetHours(value: number | string) {
        this.hours = parseInt(`${value}`, 10);
    }

    resetMinutes(value: number | string) {
        this.minutes = parseInt(`${value}`, 10);
    }

    resetSeconds(value: number | string) {
        this.seconds = parseInt(`${value}`, 10);
    }

}
