import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {BandService} from "../../services/band/band.service";
import {Band} from "../../models/band";
import {RefData} from "../../models/ref-data";
import {GenreService} from "../../services/reference-data/genre.service";


@Component({
    selector: 'band',
    moduleId: module.id,
    templateUrl: 'band.template.html'
})

export class BandComponent implements OnInit{
    constructor (
        private _router: Router,
        private _bandService: BandService,
        private _genreService: GenreService
    ) {}

    @Input() band: Band;
    genres: RefData[];

    saveBand(): void {
        this._bandService.addBand(this.band);
        this._router.navigate(['../bands']);
    }

    ngOnInit(): void {
        this.band = new Band();
        this.genres = this._genreService.genres;
    }

}
