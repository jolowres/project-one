import { TestBed }      from '@angular/core/testing';
import { Component, Provider } from '@angular/core';

import {NavBarComponent} from "./nav-bar.component";
import {NavBarService} from "../../services/nav-bar/nav-bar.service";

class MockNavBarService {
    constructor() {}
    getNavBarLinks() {}
}
//useful link
//https://github.com/juliemr/ng2-test-seed/blob/master/src/test/greeting-component_test.ts

describe('NavBarComponent Tests', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NavBarComponent],
            providers: [
                {provide: NavBarService, useClass: MockNavBarService }
            ]
        });
    });



    it('expect 1 to be 1', () => {
        expect(1).toBe(1);
    });
});