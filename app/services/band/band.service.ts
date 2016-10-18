import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { Urls } from '../../constants/urls.constants';
import { Band } from '../../models/band';

@Injectable()
export class BandService {
    constructor(private _http: Http,
                private _urls: Urls) { }

    getBands():Observable<Band[]> {
        return this._http
            .get(this._urls.BANDS)
            .map((response: Response) => {
                let bands = [];
                for(let band of response.json()) {
                    bands.push(new Band(band.id, band.name, band.genre));
                }
                return bands;
            });

    }

}
