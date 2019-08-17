import { Time } from './time';
import { ClonablePrototypeInterface } from './clonable-prototype-interface';


export class Calculation  implements ClonablePrototypeInterface<Calculation> {

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

        let
            seconds: number = 0,
            minutes: number = 0;

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
        const
            clone = this.getClone(),
            calculation = new Calculation(elapsedTime),
            calculatedHours: number = clone.calculatesHours(),
            calculatedMinutes: number = clone.calculatesMinutes(),
            calculatedSeconds: number = clone.calculatesSeconds(),
            elapsedResolvedHours: number = calculation.calculatesHours(),
            elapsedResolvedMinutes: number = calculation.calculatesMinutes(),
            elapsedResolvedSeconds: number = calculation.calculatesSeconds(),
            elapsedSeconds: number = elapsedResolvedSeconds -
                calculatedSeconds,
            elapsedMinutes: number = elapsedResolvedMinutes -
                calculatedMinutes,
            elapsedHours: number = elapsedResolvedHours - calculatedHours;

        let
            realElapsedHours: number = elapsedHours,
            realElapsedMinutes: number = elapsedMinutes,
            realElapsedSeconds: number = elapsedSeconds;

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
        return Number.parseInt(this.getHours()) + this
            .hoursContainedInMinutes(Number.parseInt(this.getMinutes()));
    }

    private calculatesMinutes(): number {
        this.time.addsMinutes(this.minutesContainedInSeconds(Number
            .parseInt(this.getSeconds())));

        return Number.parseInt(this.getMinutes()) - (this
            .hoursContainedInMinutes(Number.parseInt(this
                .getMinutes())) * 60);
    }

    private calculatesSeconds(): number {
        return Number.parseInt(this.getSeconds()) - (this
            .minutesContainedInSeconds(Number.parseInt(this
                .getSeconds())) * 60);
    }

    private hoursContainedInMinutes(minutes: number = 0): number {
        return Math.trunc(minutes / 60);
    }

    private minutesContainedInSeconds(seconds: number = 0): number {
        return Math.trunc(seconds / 60);
    }

}
