import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'bands',
    providers: [],
    moduleId: module.id,
    templateUrl: 'bands.template.html'
})
export class BandsComponent {
    constructor() { }

    links: any[];

    getBands(): void {
        //do nothing for now
    }

    ngOnInit(): void {
        this.getBands();
    }
}