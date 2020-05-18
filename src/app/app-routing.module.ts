import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent },
  {path: 'artist', component: ArtistComponent },
  {path: '**', redirectTo: '404'},
  // {path: '404', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
