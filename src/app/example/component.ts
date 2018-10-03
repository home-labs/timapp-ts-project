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
                seconds: 69
            }
        );
    }

    ngOnInit() {
        console.log('horas: ', this.conversor.getFormatedHours());
        console.log('minutos: ', this.conversor.getFormatedMinutes());
        console.log('segundos: ', this.conversor.getFormatedSerconds());
    }

}
