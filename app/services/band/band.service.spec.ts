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
                useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                    return new Http(backend, defaultOptions);
                    }, deps: [MockBackend, BaseRequestOptions] }
            ]
        });
    });

    //smoke test
    it('should pass this', () => {
        expect(1).toEqual(1);
    });

    it('should call the correct utl when getBands is called', inject([BandService, MockBackend], fakeAsync((bandService, mockBackend)  => {
        mockBackend.connections.subscribe(c => {
            expect(c.request.url).toBe('data/bands.json');
        });
        bandService.getBands();
        tick();
    })));

    it('should respond with bands when getBands is called', inject([BandService, MockBackend], fakeAsync((bandService, mockBackend)  => {
        var res;
        var responseObject = {body: '[{"id": 999, "name": "iron maiden", "genre": "metal"}]'};
        mockBackend.connections.subscribe(c => {
            let response = new ResponseOptions(responseObject);
            c.mockRespond(new Response(response));
        });
        bandService.getBands().subscribe((_res) => {
            console.log(_res);
            res = _res;
        });
        tick();
        expect(res[0].name).toBe('iron maiden');
    })));
});