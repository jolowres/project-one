import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarLink } from './models/nav-bar-link';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
      AppComponent,
      HomeComponent,
      NavBarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
