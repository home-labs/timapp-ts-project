import {
    Component,
    OnInit
} from '@angular/core';

// import { NgTimapp } from 'ng-timapp';
import { NgTimapp } from '../../../projects/ng-timapp/src/public_api';

@Component({
    selector: 'app-example',
    templateUrl: './template.html',
    styleUrls: ['./style.sass']
})
export class ExampleComponent implements OnInit {

    private calculation: NgTimapp.Calculation;
    private conversor: NgTimapp.Conversion;

    private time: Object = {
        hours: 0,
        minutes: 60,
        seconds: 61
    };

    constructor() {
        this.calculation = new NgTimapp.Calculation(this.time);

        this.conversor = new NgTimapp.Conversion(
            {
                seconds: 7777
            }
        );
    }

    ngOnInit() {
        // console.log('hours: ', this.conversor.getFormatedHours());
        // console.log('minutes: ', this.conversor.getFormatedMinutes());
        // console.log('seconds: ', this.conversor.getFormatedSerconds());

        this.calculation.sum(this.time)
        console.log('hours: ', this.calculation.getHours());
        console.log('minutes: ', this.calculation.getMinutes());
        console.log('seconds: ', this.calculation.getSeconds());
    }

}
