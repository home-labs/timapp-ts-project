import { Time } from './time';
import { IClonablePrototype } from './i-clonable-prototype';


export class Calculation  implements IClonablePrototype<Calculation> {

    private time: Time;

    constructor(time: Time) {
        this.time = time;

        this.resolvesTime();
    }

    getClone(): Calculation {
        return Object.assign(new Calculation(new Time({})), this);
    }

    calculatesSum(time: Time): Calculation {

        const
            clone = this.getClone();

        clone.time = this.time.getClone();

        let seconds = 0;

        let minutes = 0;

        // the order is important
        clone.time.addsSeconds(time.getSeconds());
        seconds = clone.calculatesSeconds();

        clone.time.addsMinutes(time.getMinutes());
        minutes = clone.calculatesMinutes();

        clone.time.addsHours(time.getHours());

        clone.time.resetHours(clone.calculatesHours());
        clone.time.resetMinutes(minutes);
        clone.time.resetSeconds(seconds);

        return clone;
    }

    calculatesElapsedTime(elapsedTime: Time): Time {
        const clone = this.getClone();

        const calculation: Calculation = new Calculation(elapsedTime);

        const calculatedHours: number = clone.calculatesHours();

        const calculatedMinutes: number = clone.calculatesMinutes();

        const calculatedSeconds: number = clone.calculatesSeconds();

        const elapsedResolvedHours: number = calculation.calculatesHours();

        const elapsedResolvedMinutes: number = calculation.calculatesMinutes();

        const elapsedResolvedSeconds: number = calculation.calculatesSeconds();

        const elapsedSeconds: number = elapsedResolvedSeconds -
                calculatedSeconds;

        const elapsedMinutes: number = elapsedResolvedMinutes -
                calculatedMinutes;

        const elapsedHours: number = elapsedResolvedHours - calculatedHours;

        let realElapsedHours: number = elapsedHours;

        let realElapsedMinutes: number = elapsedMinutes;

        let realElapsedSeconds: number = elapsedSeconds;

        if (elapsedHours < 0) {
            realElapsedHours = 24 - Math.abs(elapsedHours);
        }

        if (elapsedMinutes < 0) {
            realElapsedMinutes = 60 - Math.abs(elapsedMinutes);

            realElapsedHours -= 1;
        }

        if (elapsedSeconds < 0) {
            realElapsedSeconds = 60 - Math.abs(elapsedSeconds);

            realElapsedMinutes -= 1;
        }

        return new Time(
            {
                hours: realElapsedHours,
                minutes: realElapsedMinutes,
                seconds: realElapsedSeconds
            }
        );
    }

    getHours(asAbsolute: boolean = true) {
        return this.time.getHours(asAbsolute);
    }

    getMinutes(asAbsolute: boolean = true) {
        return this.time.getMinutes(asAbsolute);
    }

    getSeconds(asAbsolute: boolean = true) {
        return this.time.getSeconds(asAbsolute);
    }

    private resolvesTime() {
        this.time.resetHours(this.calculatesHours());
        this.time.resetMinutes(this.calculatesMinutes());
        this.time.resetSeconds(this.calculatesSeconds());
    }

    private calculatesHours(): number {
        return parseInt(this.getHours(), 10) + this
            .hoursContainedInMinutes(parseInt(this.getMinutes(), 10));
    }

    private calculatesMinutes(): number {
        this.time.addsMinutes(this.minutesContainedInSeconds(parseInt(this.getSeconds(), 10)));

        return parseInt(this.getMinutes(), 10) - (this
            .hoursContainedInMinutes(parseInt(this
                .getMinutes(), 10)) * 60);
    }

    private calculatesSeconds(): number {
        return parseInt(this.getSeconds(), 10) - (this
            .minutesContainedInSeconds(parseInt(this
                .getSeconds(), 10)) * 60);
    }

    private hoursContainedInMinutes(minutes: number = 0): number {
        return Math.trunc(minutes / 60);
    }

    private minutesContainedInSeconds(seconds: number = 0): number {
        return Math.trunc(seconds / 60);
    }

}
