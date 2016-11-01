import { Component, Input, OnInit } from '@angular/core';
import {BandService} from "../../services/band/band.service";
import {Band} from "../../models/band";
import {RefData} from "../../models/ref-data";
import {GenreService} from "../../services/reference-data/genre.service";

@Component({
    selector: 'band',
    providers: [
        BandService
        //GenreService provided by app component
    ],
    moduleId: module.id,
    templateUrl: 'band.template.html'
})

export class BandComponent implements OnInit{
    constructor (
        private _bandService: BandService,
        private _genreService: GenreService
    ) {}

    @Input() band: Band;
    genres: RefData[];

    ngOnInit(): void {
        this.band = new Band();
        this.genres = this._genreService.genres;
        //this._genreService.getGenres().subscribe(()=> {
        //    this.genres = this._genreService.genres;
        //});
    }

    //TODO save button add band

}
