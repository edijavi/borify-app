import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrls: ['./card-album.component.scss']
})
export class CardAlbumComponent implements OnInit {

  Albums: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
