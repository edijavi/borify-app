import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ArtistComponent } from './components/artist/artist.component';

const routes: Routes = [
  // {path: 'artist', component: ArtistComponent},


  // {path: '404', component: Error404Component},
  // {path: '**', redirectTo: '404'},
  {path: '', redirectTo: 'artist', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
