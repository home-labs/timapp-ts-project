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
    private diffCalc: NgTimapp.Calculation;

    constructor() {
        this.conversor = new NgTimapp.Conversion(
            {
                hours: 1,
                minutes: 1,
                seconds: 3600
            }
        );

        this.sumCalc = new NgTimapp.Calculation(
            {
                hours: 0,
                minutes: 59,
                seconds: 61
            }
        );

        this.diffCalc = new NgTimapp.Calculation(
            // {
            //     hours: 0,
            //     minutes: 1,
            //     seconds: 10
            // }
            // {
            //     hours: 0,
            //     minutes: 1,
            //     seconds: 15
            // }
            {
                hours: 22,
                minutes: 58,
                seconds: 15
            }
        );
    }

    ngOnInit() {
        // console.log(`${this.conversor.getHours()}:${this.conversor.getMinutes()}:${this.conversor.getSerconds()}`);

        // let
        //     sum: NgTimapp.Calculation = this.sumCalc.sum({ seconds: 61 });

        // console.log(`h: ${this.sumCalc.getHours()}, min: ${this.sumCalc.getMinutes()}, sec: ${this.sumCalc.getSeconds()}`);
        // console.log(`h: ${sum.getHours()}, min: ${sum.getMinutes()}, sec: ${sum.getSeconds()}`);

        let
            difference: NgTimapp.Calculation = this.diffCalc.difference(
                // {
                //     hours: 1,
                //     minutes: 3,
                //     seconds: 15
                // }
                // {
                //     hours: 1,
                //     minutes: 2,
                //     seconds: 10
                // }
                {
                    hours: 1,
                    minutes: 0,
                    seconds: 10
                }
            );

        console.log(`${difference.getDifferenceBetweenHours()}:${difference.getDifferenceBetweenMinutes()}:${difference.getDifferenceBetweenSeconds()}`);
    }

}
