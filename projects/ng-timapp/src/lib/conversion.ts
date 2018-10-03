export class Conversion {

    private hours: number;
    private minutes: number;
    private seconds: number;

    private calculatedHours: number;
    private calculatedMinutes: number;
    private calculatedSeconds: number;

    constructor(attrs: Object = {}) {
        this.hours = attrs['hours'] || 0;
        this.minutes = attrs['minutes'] || 0;
        this.seconds = attrs['seconds'] || 0;

        this.calculate();
    }

    static formatHours(hours: number): string {
        if (hours < 10) {
            return `0${hours}`;
        }

        return `${hours}`;
    }

    static formatMinutes(minutes: number): string {
        if (minutes < 10) {
            return `0${minutes}`;
        }

        return `${minutes}`;
    }

    static formatSerconds(seconds: number): string {
        if (seconds < 10) {
            return `0${seconds}`;
        }

        return `${seconds}`;
    }

    getHours(): number {
        return this.calculatedHours;
    }

    getMinutes(): number {
        return this.calculatedMinutes;
    }

    getSeconds(): number {
        return this.calculatedSeconds;
    }

    getFormatedHours(): string {
        return Conversion.formatHours(this.calculatedHours);
    }

    getFormatedMinutes(): string {
        return Conversion.formatMinutes(this.calculatedMinutes);
    }

    getFormatedSerconds(): string {
        return Conversion.formatSerconds(this.calculatedSeconds);
    }

    private calculate() {

        const
            totalSeconds: number = this.seconds,
            seconds: number = totalSeconds - (Math.trunc(totalSeconds / 60) * 60),
            totalMinutes: number = this.minutes + Math.trunc(totalSeconds / 60),
            minutes: number = totalMinutes - (Math.trunc(totalMinutes / 60) * 60),
            hours: number = this.hours + Math.trunc(totalMinutes / 60);

        this.calculatedHours = hours;
        this.calculatedMinutes = minutes;
        this.calculatedSeconds = seconds;
    }

}
