import { Component } from '@angular/core';

import { NgTimapp } from '../../projects/ng-timapp/src/public_api';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'app';

    private conversor: NgTimapp.Conversion;
    private sumCalc: NgTimapp.Calculation;
    private elapsedTimeCalc: NgTimapp.Calculation;

    constructor() {
        this.conversor = new NgTimapp.Conversion(
            {
                hours: 0,
                minutes: 60,
                seconds: 61
            }
        );

        this.sumCalc = new NgTimapp.Calculation(
            {
                hours: 0,
                minutes: 30,
                seconds: 31
            }
        );

        this.elapsedTimeCalc = new NgTimapp.Calculation(
            {
                hours: 22,
                minutes: 58,
                seconds: 3
            }
        );
    }

    ngOnInit() {
        // console.log(`${this.conversor.getHours()}:${this.conversor.getMinutes()}:${this.conversor.getSeconds()}`);

        // let
        //     sum: NgTimapp.Calculation = this.sumCalc.calculatesSum(
        //         {
        //             minutes: 30,
        //             seconds: 30
        //         }
        //     );

        // console.log(`original state (doesn't change): ${this.sumCalc.getHours()}:${this.sumCalc.getMinutes()}:${this.sumCalc.getSeconds()}`);
        // console.log(`sum's result: ${sum.getHours()}:${sum.getMinutes()}:${sum.getSeconds()}`);

        let
            elapsedTime: NgTimapp.Calculation = this.elapsedTimeCalc.calculatesElapsedTime(
                {
                    hours: 1,
                    minutes: 1,
                    seconds: 1
                }
            );

        console.log(`${elapsedTime.getElapsedHours()}:${elapsedTime.getElapsedMinutes()}:${elapsedTime.getElapsedSeconds()}`);
    }

}
