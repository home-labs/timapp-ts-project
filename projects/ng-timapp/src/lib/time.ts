import { Formatting } from './formatting';
import { ClonablePrototypeInterface } from './clonable-prototype-interface';


export class Time implements ClonablePrototypeInterface {

    private hours: number;
    private minutes: number;
    private seconds: number;

    constructor(timeAsHashTable: Object = {}) {
        this.hours = Number.parseInt(timeAsHashTable['hours'] || '0');
        this.minutes = Number.parseInt(timeAsHashTable['minutes'] || '0');
        this.seconds = Number.parseInt(timeAsHashTable['seconds'] || '0');
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

    addsHours(value: number) {
        this.hours += value;
    }

    addsMinutes(value: number) {
        this.minutes += value;
    }

    addsSeconds(value: number) {
        this.seconds += value;
    }

    resetHours(value: number) {
        this.hours = value;
    }

    resetMinutes(value: number) {
        this.minutes = value;
    }

    resetSeconds(value: number) {
        this.seconds = value;
    }

}
