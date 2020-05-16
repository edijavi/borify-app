import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ArtistComponent } from './components/artist/artist.component';
import { HeaderComponent } from './components/header/header.component';
import { ArtistControlComponent } from './components/artist-control/artist-control.component';
import { PlayerAudioComponent } from './components/player-audio/player-audio.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ArtistComponent,
    HeaderComponent,
    ArtistControlComponent,
    PlayerAudioComponent,
    ListAlbumsComponent
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
