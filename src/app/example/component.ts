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

    private conversor: NgTimapp.Conversion;

    constructor() {
        this.conversor = new NgTimapp.Conversion(
            {
                seconds: 7777
            }
        );
    }

    ngOnInit() {
        const
            map = {
                hours : 1,
                minutes: 29,
                seconds: 30
            };

        // console.log('hours: ', this.conversor.getFormatedHours());
        // console.log('minutes: ', this.conversor.getFormatedMinutes());
        // console.log('seconds: ', this.conversor.getFormatedSerconds());

        console.log('soma: ', NgTimapp.Calculation.sum(map, map));
    }

}
