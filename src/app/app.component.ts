import { Component } from '@angular/core';

import { NgTimapp } from '../../projects/ng-timapp/src/public_api';
import { Time } from 'projects/ng-timapp/src/lib';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'app';

    private resolver: NgTimapp.Calculation;
    private conversor: NgTimapp.Conversion;
    private sumCalc: NgTimapp.Calculation;
    private elapsedTimeCalc: NgTimapp.Calculation;

    constructor() {
        this.resolver = new NgTimapp.Calculation(new Time(
            {
                // hours: 0,
                // minutes: 60,
                seconds: 61
            }
        ));

        this.conversor = new NgTimapp.Conversion(new Time(
            {
                hours: 1,
                minutes: 1,
                seconds: 1
            }
        ));

        this.sumCalc = new NgTimapp.Calculation(new Time(
            {
                hours: 0,
                minutes: 30,
                seconds: 31
            }
        ));

        this.elapsedTimeCalc = new NgTimapp.Calculation(new Time(
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
        //     sum: NgTimapp.Calculation = this.sumCalc.calculatesSum(new Time(
        //         {
        //             // minutes: 30,
        //             seconds: 30
        //         }
        //     ));

        // console.log(`original state (doesn't change): ${this.sumCalc.getHours()}:${this.sumCalc.getMinutes()}:${this.sumCalc.getSeconds()}`);
        // console.log(`sum's result: ${sum.getHours()}:${sum.getMinutes()}:${sum.getSeconds()}`);

        // let
        //     elapsedTime: NgTimapp.Time = this.elapsedTimeCalc
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
