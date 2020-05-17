import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  showList:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  showPlayList() {
    this.showList = true;
  }
}
