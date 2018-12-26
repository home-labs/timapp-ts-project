import { Component } from '@angular/core';

import { NgTimapp } from '../../projects/ng-timapp/src/public_api';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'app';

    private calculation: NgTimapp.Calculation;
    private conversor: NgTimapp.Conversion;

    private time: Object = {
        hours: 0,
        minutes: 59,
        seconds: 61
    };

    constructor() {
        this.calculation = new NgTimapp.Calculation(this.time);

        // this.conversor = new NgTimapp.Conversion(
        //     {
        //         // minutes: '99'
        //         // minutes: 56753
        //         seconds: 9734
        //     }
        // );
    }

    ngOnInit() {
        // console.log(`${this.conversor.getFormattedHours()}:${this.conversor.getFormattedMinutes()}:${this.conversor.getFormattedSerconds()}`);

        console.log('sum: ', this.calculation.sum({ seconds: 30 }, { seconds: 31 }));
    }

}
