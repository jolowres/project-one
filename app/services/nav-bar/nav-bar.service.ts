import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Urls } from '../../constants/urls.constants';
import { NavBarLink } from '../../models/nav-bar-link';

@Injectable()
export class NavBarService {
    constructor(private _http: Http,
                private _urls: Urls) { }

    getNavBarLinks():Promise<NavBarLink[]> {
        return this._http.get(this._urls.NAV_BAR_LINKS)
            .toPromise()
            .then(response => {
                let navLinks = [];
                for(let navLink of response.json()) {
                    navLinks.push(navLink);
                }
                return navLinks;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
