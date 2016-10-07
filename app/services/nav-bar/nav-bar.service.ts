import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { NavBarLink } from '../../models/nav-bar-link';

@Injectable()
export class NavBarService {
    constructor(private _http: Http) { }

    getNavBarLinks():Promise<NavBarLink[]> {

        return this._http.get('data/nav-bar-links.json')
            .toPromise()
            .then(response => {
                let navLinks = [];
                for(let navLink of response.json()) {
                    navLinks.push(new NavBarLink(navLink.id, navLink.description, navLink.route));
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
