import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Urls } from './constants/urls.constants';
import { AppComponent } from './app.component';

import {
    NavBarComponent,
    HomeComponent,
    BandsComponent,
    BandComponent
    } from './components/index';

import { GenreService, BandService } from './services/index';

import { NavBarLink } from './models/nav-bar-link';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'bands',
                component: BandsComponent
            },
            {
                path: 'band',
                component: BandComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        BandsComponent,
        BandComponent
    ],
    providers: [
        Urls,
        GenreService,
        BandService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
