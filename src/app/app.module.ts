import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ArtistComponent } from './components/artist/artist.component';
import { HeaderComponent } from './components/header/header.component';
import { ArtistInfoComponent } from './components/artist-info/artist-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ArtistComponent,
    HeaderComponent,
    ArtistInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
