import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Urls } from './constants/urls.constants';
import { GenreService } from './services/reference-data/genre.service';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { BandsComponent } from './components/bands/bands.component';
import { BandComponent } from './components/band/band.component';

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
        GenreService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
