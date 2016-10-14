import { TestBed }      from '@angular/core/testing';
import { Provider } from '@angular/core';

import { BandsComponent } from './bands.component';
import { BandService } from '../../services/band/band.service';
import { Band } from '../../models/band';

import { Observable } from 'rxjs/Rx';

class MockBandService extends BandService{
    constructor() {
        super(null);
    }
    getBands() {
        console.log('retun fake bands');
        return Observable.of([
                new Band(99, 'test band', 'test genre')
        ]);
    }
}

describe('BandsComponent Tests', () => {

    var bandsComponent: BandsComponent;
    var mockBandService: BandService;

    beforeEach(() => {
        mockBandService = new MockBandService();
    });

    beforeEach(() => {
        bandsComponent = new BandsComponent(mockBandService);
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