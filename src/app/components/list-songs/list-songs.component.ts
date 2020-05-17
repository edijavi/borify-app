import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-songs',
  templateUrl: './list-songs.component.html',
  styleUrls: ['./list-songs.component.scss']
})
export class ListSongsComponent implements OnInit {


  showList:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showPlayList(){
    this.showList= true
  }
}
