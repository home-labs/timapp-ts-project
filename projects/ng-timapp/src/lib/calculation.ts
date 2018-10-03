import { Conversion } from './conversion';


export class Calculation {

    constructor() {

    }

    static getFormatedSum(...time: Array<Object>): Object {
        return {};
    }

    static sum(...time): Object {
        let
            hours: number = 0,
            minutes: number = 0,
            seconds: number = 0;

        time.forEach(
            (o: Object) => {
                if ((o['seconds'] + seconds) < 60) {
                    seconds += o['seconds'];
                } else {
                    seconds = (o['seconds'] + seconds) - (Math.trunc((o['seconds'] + seconds) / 60) * 60);
                    minutes += 1;
                }

                if ((o['minutes'] + minutes) < 60) {
                    minutes += o['minutes'];
                } else {
                    minutes = (o['minutes'] + minutes) - (Math.trunc((o['minutes'] + minutes) / 60) * 60);
                    hours += 1;
                }

                hours += o['hours'];
            }
        );

        return {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

}
