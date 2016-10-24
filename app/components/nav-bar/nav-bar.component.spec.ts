import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Provider } from '@angular/core';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { NavBarComponent } from './nav-bar.component';
import { NavBarService } from '../../services/nav-bar/nav-bar.service';
import { Urls } from '../../constants/urls.constants';

import { Observable } from 'rxjs/Rx';

import {RouterLinkStubDirective} from "../../../testing/router-stubs";
import {RouterOutletStubComponent} from "../../../testing/router-stubs";

let comp: NavBarComponent;
let fixture: ComponentFixture<NavBarComponent>;
var navBarService;

describe ('NavBarComponent tests', () => {

    beforeEach( async(() => {
        TestBed.configureTestingModule({
                declarations: [
                    NavBarComponent,
                    RouterLinkStubDirective,
                    RouterOutletStubComponent
                ],
                imports: [
                    HttpModule
                ],
                providers: [
                    Urls,
                    MockBackend,
                    NavBarService
                ]
            })
            .compileComponents()
            .then(createComponent);
    }));


    it('should call the getNavBarLinks when ngOnInit is called', () => {
        comp.ngOnInit();
        expect(navBarService.getNavBarLinks).toHaveBeenCalled();
    });
});

function createComponent() {
    fixture = TestBed.createComponent(NavBarComponent);
    comp = fixture.componentInstance;

    navBarService = fixture.debugElement.injector.get(NavBarService);

    spyOn(navBarService, 'getNavBarLinks').and.returnValue(Promise.resolve([]));
}