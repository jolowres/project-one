import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
    NavBarComponent,
    HomeComponent,
    BandsComponent,
    BandComponent
    } from './components/index';

import { APP_PROVIDERS } from './app.providers';


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
        APP_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
