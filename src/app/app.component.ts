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
        // this.conversor = new NgTimapp.Conversion(
        //     {
        //         // minutes: '99'
        //         // minutes: 56753
        //         seconds: 9734
        //     }
        // );

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

        console.log('sum: ', this.sumCalc.sum({ seconds: 30 }, { seconds: 31 }));

        // console.log('difference: ', this.diffCalc.difference({ seconds: 30 }));
    }

}
