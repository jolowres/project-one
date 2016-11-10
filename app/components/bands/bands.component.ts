import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Band } from '../../models/band';
import { BandService } from '../../services/band/band.service';

@Component({
    selector: 'bands',
    moduleId: module.id,
    templateUrl: 'bands.template.html',
    styleUrls: [ 'bands.component.css' ]
})
export class BandsComponent {
    constructor(
        private _bandService: BandService,
        private _router: Router
    ) {}

    bands: Band[];

    getBands(): void {
        this._bandService.getBands()
            .subscribe(() => this.bands = this._bandService.bands);
    }

    addBand(): void {
        this._router.navigate(['../band']);
    }

    ngOnInit(): void {
        console.log('initiating bands component');
        this.getBands();
    }
}