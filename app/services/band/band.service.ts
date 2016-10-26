import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Urls } from '../../constants/urls.constants';
import { Band } from '../../models/band';


@Injectable()
export class BandService {
    constructor(private _http: Http,
                private _urls: Urls) { }

    //TODO store the bands as an array here?

    getBands():Observable<Band[]> {
        return this._http
            .get(this._urls.BANDS)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
