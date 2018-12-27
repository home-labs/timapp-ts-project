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

        // this.diffCalc = new NgTimapp.Calculation(
        //     {
        //         hours: 0,
        //         minutes: 0,
        //         seconds: 0
        //     }
        // );
    }

    ngOnInit() {
        // console.log(`${this.conversor.getFormattedHours()}:${this.conversor.getFormattedMinutes()}:${this.conversor.getFormattedSerconds()}`);

        let
            sum: NgTimapp.Calculation = this.sumCalc.sum({ seconds: 61 });

        console.log(`h: ${this.sumCalc.getHours()}, min: ${this.sumCalc.getMinutes()}, sec: ${this.sumCalc.getSeconds()}`);
        console.log(`h: ${sum.getHours()}, min: ${sum.getMinutes()}, sec: ${sum.getSeconds()}`);
    }

}
