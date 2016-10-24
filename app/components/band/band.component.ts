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
    constructor (private _bandService: BandService) {}

    @Input band: Band;

    ngOnInit(): void {
        this.band = new Band(null, null, null); //TODO we don;t want to do this - sort out the models
    }

}

