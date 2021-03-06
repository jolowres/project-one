import { TestBed }      from '@angular/core/testing';
import { Provider } from '@angular/core';

import { BandsComponent } from './bands.component';
import { BandService } from '../../services/band/band.service';
import { Band } from '../../models/band';

import { Observable } from 'rxjs/Rx';
import {BandComponent} from "../band/band.component";
import {RouterStub} from "../../../testing/router-stubs";

var mockBand = new Band();
mockBand.id = 99;
mockBand.name = 'test band';
mockBand.genre = 'test genre';

class MockBandService extends BandService{
    constructor() {
        super(null, null);
    }
    getBands() {
        console.log('retun fake bands');
        return Observable.of([mockBand]);
    }
}

describe('BandsComponent Tests', () => {

    var bandsComponent: BandsComponent;
    var mockBandService: BandService;

    beforeEach(() => {
        mockBandService = new MockBandService();
        mockBandService.bands = [mockBand];
    });

    beforeEach(() => {
        bandsComponent = new BandsComponent(mockBandService, null);
    });

    //smoke test
    it('expect 1 to be 1', () => {
        expect(1).toBe(1);
    });

    it('should return the bands when ngInit is called', () => {
        bandsComponent.ngOnInit();
        expect(bandsComponent.bands.length).toBe(1);
        expect(bandsComponent.bands[0].id).toBe(99);
        expect(bandsComponent.bands[0].name).toBe('test band');
    });

});