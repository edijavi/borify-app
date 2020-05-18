import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ArtistComponent } from './components/artist/artist.component';
import { HeaderComponent } from './components/header/header.component';
import { ArtistControlComponent } from './components/artist-control/artist-control.component';
import { PlayerAudioComponent } from './components/player-audio/player-audio.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { CardAlbumComponent } from './components/card-album/card-album.component';
import { ListSongsComponent } from './components/list-songs/list-songs.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ArtistComponent,
    HeaderComponent,
    ArtistControlComponent,
    PlayerAudioComponent,
    ListAlbumsComponent,
    CardAlbumComponent,
    ListSongsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
