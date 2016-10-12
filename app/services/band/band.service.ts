import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { Band } from '../../models/band';

@Injectable()
export class BandService {
    constructor(private _http: Http) { }

    getBands():Observable<Band[]> {
        return this._http
            .get('data/bands.json')
            //.map((response: Response) => response.json() as Band[]);
            .map((response: Response) => {
                let bands = [];
                for(let band of response.json()) {
                    bands.push(new Band(band.id, band.name, band.route));
                }
                return bands;
            });
            //.catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
