import { Injectable, OnInit } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Urls } from '../../constants/urls.constants';
import { RefData } from '../../models/ref-data';

@Injectable()
export class GenreService{
    constructor(private _http: Http,
                private _urls: Urls) { }

    genres: RefData[];

    public getGenres():Promise<void> {
        return this._http.get(this._urls.GENRES)
            .toPromise()
            .then(response => {
                return this.genres = response.json();
            })
            .catch(this.handleError);
    }

    private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}