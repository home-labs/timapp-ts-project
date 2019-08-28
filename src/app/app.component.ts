import { Component } from '@angular/core';

// import { Timapp } from '../../projects/timapp.ts';
import { Timapp } from 'timapp';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {

    private resolver: Timapp.Calculation;

    private conversor: Timapp.Conversion;

    private sumCalc: Timapp.Calculation;

    private elapsedTimeCalc: Timapp.Calculation;

    constructor() {
        this.resolver = new Timapp.Calculation(new Timapp.Time(
            {
                // hours: 0,
                // minutes: 60,
                seconds: 61
            }
        ));

        this.conversor = new Timapp.Conversion(new Timapp.Time(
            {
                hours: 1,
                minutes: 1,
                seconds: 1
            }
        ));

        this.sumCalc = new Timapp.Calculation(new Timapp.Time(
            {
                hours: 0,
                minutes: 30,
                seconds: 31
            }
        ));

        this.elapsedTimeCalc = new Timapp.Calculation(new Timapp.Time(
            {
                hours: 22,
                minutes: 58,
                seconds: 3
            }
        ));
    }

    ngOnInit() {
        // console.log(`${this.resolver.getHours()}:${this.resolver.getMinutes()}:${this.resolver.getSeconds()}`);

        console.log('conversion as minutes: ', this.conversor.asMinutes());
        console.log('conversion as seconds: ',this.conversor.asSeconds());

        // let
        //     sum: Timapp.Calculation = this.sumCalc.calculatesSum(new Time(
        //         {
        //             // minutes: 30,
        //             seconds: 30
        //         }
        //     ));

        // console.log(`original state (doesn't change): ${this.sumCalc.getHours()}:${this.sumCalc.getMinutes()}:${this.sumCalc.getSeconds()}`);
        // console.log(`sum's result: ${sum.getHours()}:${sum.getMinutes()}:${sum.getSeconds()}`);

        // let
        //     elapsedTime: Timapp.Time = this.elapsedTimeCalc
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
