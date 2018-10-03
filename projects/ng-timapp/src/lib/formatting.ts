export class Formatting {

    constructor() {

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

}
