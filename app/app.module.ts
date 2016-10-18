import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';

import { Urls } from './constants/urls.constants';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { BandsComponent } from './components/bands/bands.component';

import { NavBarLink } from './models/nav-bar-link';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
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
            }
        ])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        BandsComponent
    ],
    providers: [Urls],
    bootstrap: [AppComponent]
})
export class AppModule { }
