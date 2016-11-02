import { Component, OnInit } from '@angular/core';
import { GenreService } from './services/index';

@Component({
    selector: 'my-app',
    template: `<nav-bar></nav-bar>
        <router-outlet></router-outlet>`
})
//load up any reference data required by the site
export class AppComponent implements OnInit{
    constructor ( private _genreService: GenreService ) {}

    //TODO need to get this loaded before the app loads
    ngOnInit() {
        this._genreService.getGenres();
    }
}