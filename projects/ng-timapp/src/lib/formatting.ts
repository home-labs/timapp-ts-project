export class Formatting {

    static formatHours(hours: number, asAbsolute: boolean = true): string {
        const
            absTime = Math.abs(hours);

        if (hours < 0) {
            if (asAbsolute && absTime < 10) {
                return `0${absTime}`;
            } else if (asAbsolute && absTime >= 10) {
                return `${absTime}`;
            // not to return as absolute
            } else if (absTime < 10) {
                return `-0${absTime}`;
            }

            return `-${absTime}`;
        }

        if (absTime < 10) {
            return `0${absTime}`;
        }

        return `${absTime}`;

    }

    static formatMinutes(minutes: number, asAbsolute: boolean = true): string {
        const
            absTime = Math.abs(minutes);

        if (minutes < 0) {
            if (asAbsolute && absTime < 10) {
                return `0${absTime}`;
            } else if (asAbsolute && absTime >= 10) {
                return `${absTime}`;
            } else if (absTime < 10) {
                return `-0${absTime}`;
            }

            return `-${absTime}`;
        }

        if (absTime < 10) {
            return `0${absTime}`;
        }

        return `${absTime}`;

    }

    static formatSerconds(seconds: number, asAbsolute: boolean = true): string {
        const
            absTime = Math.abs(seconds);

        if (seconds < 0) {
            if (asAbsolute && absTime < 10) {
                return `0${absTime}`;
            } else if (asAbsolute && absTime >= 10) {
                return `${absTime}`;
            } else if (absTime < 10) {
                return `-0${absTime}`;
            }

            return `-${absTime}`;
        }

        if (absTime < 10) {
            return `0${absTime}`;
        }

        return `${absTime}`;
    }

}
