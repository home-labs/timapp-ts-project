import { Formatting } from './formatting';
import { ClonablePrototypeInterface } from './clonable-prototype-interface';


declare interface TimeConstructorParameters {

    hours?: Number | string;

    minutes?: Number | string;

    seconds?: Number | string;

}


export class Time implements ClonablePrototypeInterface<Time> {

    private hours: number;

    private minutes: number;

    private seconds: number;

    constructor(time: TimeConstructorParameters) {
        this.hours = parseInt(`${time.hours || 0}`, 10);
        this.minutes = parseInt(`${time.minutes || 0}`, 10);
        this.seconds = parseInt(`${time.seconds || 0}`, 10);
    }

    getClone(): Time {
        return Object.assign(new Time({}), this);
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

    addsHours(value: Number | string) {
        this.hours += parseInt(`${value}`, 10);
    }

    addsMinutes(value: Number | string) {
        this.minutes += parseInt(`${value}`, 10);
    }

    addsSeconds(value: Number | string) {
        this.seconds += parseInt(`${value}`, 10);
    }

    resetHours(value: Number | string) {
        this.hours = parseInt(`${value}`, 10);
    }

    resetMinutes(value: Number | string) {
        this.minutes = parseInt(`${value}`, 10);
    }

    resetSeconds(value: Number | string) {
        this.seconds = parseInt(`${value}`, 10);
    }

}
