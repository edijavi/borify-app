import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';

const routes: Routes = [
  // {path: 'artist', component: ArtistComponent},
  // {path: '404', component: Error404Component},
  // {path: '**', redirectTo: '404'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent },
  {path: 'artist', component: ArtistComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
