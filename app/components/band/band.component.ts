import { Component, Input, OnInit } from '@angular/core';
import {BandService} from "../../services/band/band.service";
import {Band} from "../../models/band";


@Component({
    selector: 'band',
    providers: [ BandService ],
    moduleId: module.id,
    templateUrl: 'band.template.html'
})

export class BandComponent implements OnInit{
    constructor () {}

    @Input() band: Band;

    ngOnInit(): void {
        this.band = new Band();
    }

    //TODO save button add band

}

