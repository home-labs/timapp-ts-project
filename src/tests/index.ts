import { EChronoS } from '../index.js';


class Test {

    private resolver: EChronoS.Calculation;

    private conversor: EChronoS.Conversion;

    private sumCalc: EChronoS.Calculation;

    private elapsedTimeCalc: EChronoS.Calculation;

    constructor() {
        this.resolver = new EChronoS.Calculation(new EChronoS.Time(
            {
                // hours: 0,
                // minutes: 60,
                seconds: 61
            }
        ));

        this.conversor = new EChronoS.Conversion(new EChronoS.Time(
            {
                hours: 1,
                minutes: 1,
                seconds: 1
            }
        ));

        this.sumCalc = new EChronoS.Calculation(new EChronoS.Time(
            {
                hours: 0,
                minutes: 30,
                seconds: 31
            }
        ));

        this.elapsedTimeCalc = new EChronoS.Calculation(new EChronoS.Time(
            {
                hours: 22,
                minutes: 58,
                seconds: 3
            }
        ));

        // console.log(`${this.resolver.getHours()}:${this.resolver.getMinutes()}:${this.resolver.getSeconds()}`);
        console.log('Conversion of 01:01:01');
        console.log('in minutes: ', this.conversor.asMinutes());
        console.log('in seconds: ', this.conversor.asSeconds());

        // let
        //     sum: EChronoS.Calculation = this.sumCalc.calculatesSum(new Time(
        //         {
        //             // minutes: 30,
        //             seconds: 30
        //         }
        //     ));

        // console.log(`original state (doesn't change): ${this.sumCalc.getHours()}:${this.sumCalc.getMinutes()}:${this.sumCalc.getSeconds()}`);
        // console.log(`sum's result: ${sum.getHours()}:${sum.getMinutes()}:${sum.getSeconds()}`);

        // let
        //     elapsedTime: EChronoS.Time = this.elapsedTimeCalc
        //         .calculatesElapsedTime(new Time(
        //             {
        //                 hours: 1,
        //                 minutes: 1,
        //                 seconds: 1
        //             }
        //         )
        //     );

        // console.log(`${elapsedTime.getHours()}:${elapsedTime.getMinutes()}:${elapsedTime.getSeconds()}`);
    }

}

new Test();
