import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';

import { BandService } from './band.service';

describe('BandService tests', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                BandService,
                {provide: Http,
                useFactory: (backend: ConnectionBackend,
                             defaultOptions: BaseRequestOptions) => {
                    return new Http(backend, defaultOptions);
                }, deps: [MockBackend, BaseRequestOptions] }
            ]
        });
    });

    //smoke test
    it('should pass this', () => {
        expect(1).toEqual(1);
    });
});