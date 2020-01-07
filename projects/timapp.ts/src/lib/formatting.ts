export class Formatting {

    static twoDigits(timeChunck: number, asAbsolute: boolean = true): string {
        const
            absTime = Math.abs(timeChunck);

        if (timeChunck < 0) {
            if (asAbsolute && absTime < 10) {
                return `0${absTime}`;
            } else if (asAbsolute && absTime >= 10) {
                return `${absTime}`;
            // if isn't to return as absolute
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
