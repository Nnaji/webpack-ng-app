import { Component, OnInit } from '@angular/core';
import './app.component.scss';

@Component({
    selector: 'app-root',
    // template: "<h1>{{title}}</h1>",
    templateUrl: './app.component.html',
    // styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    data = [
        {
            id: '1',
            employee_name: 'Tiger Nixon',
            employee_salary: '320800',
            employee_age: '61',
            profile_image: '',
        },
        {
            id: '2',
            employee_name: 'Garrett Winters',
            employee_salary: '170750',
            employee_age: '63',
            profile_image: '',
        },
        {
            id: '3',
            employee_name: 'Ashton Cox',
            employee_salary: '86000',
            employee_age: '66',
            profile_image: '',
        },
        {
            id: '4',
            employee_name: 'Cedric Kelly',
            employee_salary: '433060',
            employee_age: '22',
            profile_image: '',
        },
        {
            id: '5',
            employee_name: 'Airi Satou',
            employee_salary: '162700',
            employee_age: '33',
            profile_image: '',
        },
    ];
    constructor() {
        console.log('Hello World'); // Logs false for default environment
    }
    ngOnInit() {}
    selectData(d: string) {
        const selectedData = d;
        console.log('SELECTED DATA', selectedData);
    }
    title = 'Welcome to Angular';
    myHero = 'Windstorm';
}