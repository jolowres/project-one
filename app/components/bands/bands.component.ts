import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Band } from '../../models/band';
import { BandService } from '../../services/band/band.service';

@Component({
    selector: 'bands',
    providers: [BandService],
    moduleId: module.id,
    templateUrl: 'bands.template.html'
})
export class BandsComponent {
    constructor(private _bandService: BandService) { }

    bands: Band[];

    getBands(): void {
        this._bandService.getBands()
            .subscribe((bands) => this.bands = bands);
    }

    ngOnInit(): void {
        this.getBands();
    }
}